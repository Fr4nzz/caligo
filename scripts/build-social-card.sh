#!/usr/bin/env bash
set -euo pipefail

root=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)
source_image="$root/public/media/brand/caligo-emblem-1024.png"
output="$root/public/media/social/caligo-share-v2.png"

command -v magick >/dev/null 2>&1 || {
  echo "ImageMagick 7 ('magick') is required." >&2
  exit 1
}

[[ -f $source_image ]] || {
  echo "Source emblem not found: $source_image" >&2
  exit 1
}

mkdir -p -- "$(dirname -- "$output")"
workdir=$(mktemp -d)
trap 'rm -rf -- "$workdir"' EXIT

transparent_emblem="$workdir/caligo-emblem-transparent.png"
rendered_card="$workdir/caligo-share.png"

"$root/scripts/extract-emblem-background.sh" \
  --force \
  "$source_image" \
  "$transparent_emblem" \
  6 >/dev/null

# Social platforms crop previews differently. Keeping the text-free emblem in
# the central 630 px square makes the complete mark survive both landscape and
# square thumbnail crops.
magick \
  -size 1200x630 \
  'xc:#f6f5f3' \
  \( "$transparent_emblem" -resize '430x340>' \) \
  -gravity center \
  -compose over \
  -composite \
  -depth 8 \
  -strip \
  -define png:color-type=2 \
  "$rendered_card"

mv -f -- "$rendered_card" "$output"
echo "Wrote $output ($(magick identify -format '%wx%h' "$output"))"
