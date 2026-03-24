import af from '@/messages/af.json';
import en from '@/messages/en.json';
import es from '@/messages/es.json';
import fr from '@/messages/fr.json';
import he from '@/messages/he.json';
import hi from '@/messages/hi.json';
import hu from '@/messages/hu.json';
import ka from '@/messages/ka.json';
import pl from '@/messages/pl.json';
import sw from '@/messages/sw.json';
import uz from '@/messages/uz.json';
import { type Locale } from '@/i18n/config';

export const dictionaries = {
  af,
  en,
  es,
  fr,
  he,
  hi,
  hu,
  ka,
  pl,
  sw,
  uz
} as const;

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
