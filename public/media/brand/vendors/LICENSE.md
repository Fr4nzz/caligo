# Vendored brand icons

This directory holds official third-party brand marks vendored locally so we
do not depend on a JavaScript icon package for one or two logos.

## `discord-mark.svg`

Discord's official brand symbol, obtained from the [Simple Icons](https://simpleicons.org/)
open-source icon set (a widely-used mirror of official brand SVGs). Simple
Icons distributes third-party marks under CC0-1.0 for the SVG packaging,
while each mark remains the trademark of its owner.

- Source: <https://simpleicons.org/icons/discord>
- Origin: Discord's official brand assets (<https://discord.com/branding>)
- Trademark: **Discord™** is a trademark of Discord Inc.
- Simple Icons package licence: CC0-1.0 <https://creativecommons.org/publicdomain/zero/1.0/>
- Local use: rendered as an inline SVG-slot icon inside `DiscordCTA.astro`.
  Rendered with `aria-hidden="true"` so the accessible name comes from
  surrounding link/button text ("Join the Caligo Discord" / "Unirse al
  Discord de Caligo") — never from an alt attribute we invent.

If Discord updates its brand mark, replace this file from either the
official brand-assets page or the Simple Icons package. Do not redraw the
mark manually.
