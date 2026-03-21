import en from '@/messages/en.json';
import he from '@/messages/he.json';
import hu from '@/messages/hu.json';
import ru from '@/messages/ru.json';
import { type Locale } from '@/i18n/config';

export const dictionaries = {
  en,
  hu,
  ru,
  he
} as const;

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
