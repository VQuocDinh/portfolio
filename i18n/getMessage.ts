import type { Locale } from './types';
import { en } from './messages/en';
import { vi } from './messages/vi';

const dictionaries = { en, vi } as const;

function getNested(obj: unknown, path: string): string | undefined {
  const parts = path.split('.');
  let current: unknown = obj;
  for (const p of parts) {
    if (current !== null && typeof current === 'object' && p in (current as object)) {
      current = (current as Record<string, unknown>)[p];
    } else {
      return undefined;
    }
  }
  return typeof current === 'string' ? current : undefined;
}

/** Dot path, e.g. `nav.about` or `hero.intro` */
export function getMessage(locale: Locale, path: string): string {
  const value = getNested(dictionaries[locale], path);
  if (value !== undefined) return value;
  const fallback = getNested(dictionaries.en, path);
  return fallback ?? path;
}
