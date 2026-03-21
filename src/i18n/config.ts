export const locales = ['en', 'hu', 'ru', 'he'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeInfo: Record<
  Locale,
  { dir: 'ltr' | 'rtl'; label: string; nativeLabel: string; flag: string }
> = {
  en: { dir: 'ltr', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  hu: { dir: 'ltr', label: 'Hungarian', nativeLabel: 'Magyar', flag: '🇭🇺' },
  ru: { dir: 'ltr', label: 'Russian', nativeLabel: 'Русский', flag: '🇷🇺' },
  he: { dir: 'rtl', label: 'Hebrew', nativeLabel: 'עברית', flag: '🇮🇱' }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
