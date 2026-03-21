export const locales = ['en', 'hu', 'ru', 'he'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeInfo: Record<
  Locale,
  { dir: 'ltr' | 'rtl'; label: string; nativeLabel: string }
> = {
  en: { dir: 'ltr', label: 'English', nativeLabel: 'English' },
  hu: { dir: 'ltr', label: 'Hungarian', nativeLabel: 'Magyar' },
  ru: { dir: 'ltr', label: 'Russian', nativeLabel: 'Русский' },
  he: { dir: 'rtl', label: 'Hebrew', nativeLabel: 'עברית' }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
