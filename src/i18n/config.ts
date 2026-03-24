export const locales = ['en', 'hu', 'fr', 'es', 'he', 'uz', 'sw', 'af', 'pl', 'hi', 'ka'] as const;

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
  he: { dir: 'rtl', label: 'Hebrew', nativeLabel: 'עברית', flag: '🇮🇱' },
  uz: { dir: 'ltr', label: 'Uzbek', nativeLabel: 'Oʻzbekcha', flag: '🇺🇿' },
  sw: { dir: 'ltr', label: 'Swahili', nativeLabel: 'Kiswahili', flag: '🇹🇿' },
  af: { dir: 'ltr', label: 'Afrikaans', nativeLabel: 'Afrikaans', flag: '🇿🇦' },
  pl: { dir: 'ltr', label: 'Polish', nativeLabel: 'Polski', flag: '🇵🇱' },
  hi: { dir: 'ltr', label: 'Hindi', nativeLabel: 'हिन्दी', flag: '🇮🇳' },
  ka: { dir: 'ltr', label: 'Georgian', nativeLabel: 'ქართული', flag: '🇬🇪' }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
