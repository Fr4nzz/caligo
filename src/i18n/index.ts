import { en, type Dict } from './en';
import { es } from './es';
import type { Locale } from './config';

export * from './config';
export type { Dict };

const DICTS: Record<Locale, Dict> = { en, es };

export function getDict(locale: Locale): Dict {
  return DICTS[locale];
}
