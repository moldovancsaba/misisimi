import en from '@/messages/en.json';
import es from '@/messages/es.json';
import fr from '@/messages/fr.json';
import he from '@/messages/he.json';
import hu from '@/messages/hu.json';
import { type Locale } from '@/i18n/config';

export const dictionaries = {
  en,
  hu,
  fr,
  es,
  he
} as const;

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
