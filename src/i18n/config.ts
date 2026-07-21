export const LOCALES = ['en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
};

/** BCP-47 tags for <html lang> and hreflang. */
export const LOCALE_LANG: Record<Locale, string> = {
  en: 'en',
  es: 'es',
};

/**
 * Prefix an internal path with the deploy base (e.g. "/caligo/") so links keep
 * working under a GitHub Pages project path and after a later custom-domain move.
 * Astro exposes the base at import.meta.env.BASE_URL.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}

/** Build a localized, base-aware path: localePath('es', '/science') -> /caligo/es/science/ */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path === '/' ? '' : path.replace(/^\//, '').replace(/\/$/, '');
  const suffix = clean ? `/${clean}/` : '/';
  return withBase(`/${locale}${suffix}`);
}

/** Extract the active locale from an Astro URL pathname. */
export function localeFromPath(pathname: string): Locale {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const rest = pathname.slice(base.length).replace(/^\//, '');
  const first = rest.split('/')[0];
  return (LOCALES as readonly string[]).includes(first) ? (first as Locale) : DEFAULT_LOCALE;
}

/**
 * Given the current pathname and a target locale, return the equivalent path in
 * that locale (same page, swapped language segment). Keeps trailing slash.
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const rest = pathname.slice(base.length).replace(/^\//, '');
  const parts = rest.split('/').filter(Boolean);
  if ((LOCALES as readonly string[]).includes(parts[0])) {
    parts[0] = target;
  } else {
    parts.unshift(target);
  }
  return withBase(`/${parts.join('/')}/`);
}
