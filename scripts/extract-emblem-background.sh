#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage:
  scripts/extract-emblem-background.sh [--force] INPUT OUTPUT [FUZZ_PERCENT]

Remove a uniform or near-uniform image background while preserving enclosed
details of the same colour. The background colour is sampled from the input's
top-left pixel, only the connected outer region is made transparent, and empty
transparent margins are trimmed.

FUZZ_PERCENT defaults to 6. Increase it cautiously when the background is
slightly uneven.

Example:
  scripts/extract-emblem-background.sh \
    public/media/brand/caligo-emblem-192.png \
    public/media/brand/caligo-emblem-transparent.png
EOF
}

force=false
if [[ ${1:-} == "--force" ]]; then
  force=true
  shift
fi

if (( $# < 2 || $# > 3 )); then
  usage >&2
  exit 2
fi

input=$1
output=$2
fuzz=${3:-6}

command -v magick >/dev/null 2>&1 || {
  echo "ImageMagick 7 ('magick') is required." >&2
  exit 1
}

[[ -f $input ]] || {
  echo "Input file not found: $input" >&2
  exit 1
}

[[ $fuzz =~ ^[0-9]+([.][0-9]+)?$ ]] || {
  echo "FUZZ_PERCENT must be a non-negative number." >&2
  exit 2
}

if [[ $(realpath -m -- "$input") == $(realpath -m -- "$output") ]]; then
  echo "INPUT and OUTPUT must be different files." >&2
  exit 2
fi

if [[ -e $output && $force != true ]]; then
  echo "Output already exists: $output (pass --force to replace it)" >&2
  exit 1
fi

output_dir=$(dirname -- "$output")
mkdir -p -- "$output_dir"
tmp=$(mktemp --suffix=.png)
trap 'rm -f -- "$tmp"' EXIT

key_colour=$(magick "$input" -format '%[pixel:p{0,0}]' info:)

magick "$input" \
  -bordercolor "$key_colour" \
  -border 1 \
  -alpha set \
  -channel RGBA \
  -fuzz "${fuzz}%" \
  -fill none \
  -draw 'alpha 0,0 floodfill' \
  -shave 1x1 \
  -trim \
  +repage \
  "$tmp"

channels=$(magick identify -format '%[channels]' "$tmp")
if [[ $channels != *a* ]]; then
  echo "Extraction failed: output has no alpha channel." >&2
  exit 1
fi

mv -f -- "$tmp" "$output"
trap - EXIT

dimensions=$(magick identify -format '%wx%h' "$output")
echo "Wrote $output ($dimensions, key $key_colour, fuzz ${fuzz}%)"
