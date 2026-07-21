/**
 * Site-level runtime configuration.
 *
 * `discordInviteUrl` is the nullable Discord invite value described in the
 * GPT Pro follow-up 4 handoff. A valid trimmed `https://` URL renders the
 * active external CTA; any missing, invalid, expired or withdrawn value
 * renders a disabled non-link control with the pending-copy fallback.
 *
 * The value is read from `PUBLIC_CALIGO_DISCORD_URL` at build time so
 * Nicol (or the deployer) can flip it without editing repository code.
 * Leaving the env var unset keeps the pending state — the current safe
 * default because no valid public invite is confirmed yet.
 */

const RAW_DISCORD = (import.meta.env.PUBLIC_CALIGO_DISCORD_URL ?? '').trim();

function isValidHttpsUrl(candidate: string): boolean {
  if (candidate.length === 0) return false;
  try {
    const url = new URL(candidate);
    return url.protocol === 'https:';
  } catch {
    return false;
  }
}

export const discordInviteUrl: string | null = isValidHttpsUrl(RAW_DISCORD)
  ? RAW_DISCORD
  : null;
