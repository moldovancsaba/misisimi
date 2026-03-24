import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale, locales, type Locale } from '@/i18n/config';

const supportedLocales = new Set<Locale>(locales);

function normalizeCandidate(value: string): string[] {
  const trimmed = value.trim().toLowerCase();

  if (!trimmed) {
    return [];
  }

  const base = trimmed.split(';', 1)[0];
  const primary = base.split('-', 1)[0];

  return [base, primary].filter(Boolean);
}

function detectLocale(headerValue: string | null): Locale {
  if (!headerValue) {
    return defaultLocale;
  }

  for (const token of headerValue.split(',')) {
    for (const candidate of normalizeCandidate(token)) {
      if (supportedLocales.has(candidate as Locale)) {
        return candidate as Locale;
      }
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== '/') {
    return NextResponse.next();
  }

  const locale = detectLocale(request.headers.get('accept-language'));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/'],
};
