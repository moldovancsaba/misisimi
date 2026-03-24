export const locales = ['en', 'hu', 'fr', 'es', 'he'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeInfo: Record<
  Locale,
  { dir: 'ltr' | 'rtl'; label: string; nativeLabel: string; flag: string }
> = {
  en: { dir: 'ltr', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  hu: { dir: 'ltr', label: 'Hungarian', nativeLabel: 'Magyar', flag: '🇭🇺' },
  fr: { dir: 'ltr', label: 'French', nativeLabel: 'Français', flag: '🇫🇷' },
  es: { dir: 'ltr', label: 'Spanish', nativeLabel: 'Español', flag: '🇪🇸' },
  he: { dir: 'rtl', label: 'Hebrew', nativeLabel: 'עברית', flag: '🇮🇱' }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
