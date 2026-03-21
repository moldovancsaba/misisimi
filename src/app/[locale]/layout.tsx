import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import StickyCTA from '@/components/home/StickyCTA';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale, localeInfo, locales, type Locale } from '@/i18n/config';
import { notFound } from 'next/navigation';

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dict = getDictionary(locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `https://www.misisimi.com/${locale}`,
      siteName: 'misisimi',
      type: 'website',
      locale,
      images: [
        {
          url: '/hero.png',
          width: 768,
          height: 768,
          alt: dict.meta.ogAlt
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/hero.png']
    },
    alternates: {
      canonical: `https://www.misisimi.com/${locale}`,
      languages: Object.fromEntries(
        locales.map((item) => [item, `https://www.misisimi.com/${item}`])
      )
    }
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const info = localeInfo[locale as Locale];
  const dict = getDictionary(locale);
  const localeOptions = locales.map((code) => ({
    code,
    nativeLabel: localeInfo[code].nativeLabel,
    flag: localeInfo[code].flag
  }));

  return (
    <div className="locale-shell" data-locale={locale} lang={locale} dir={info.dir}>
      <Navbar locale={locale as Locale} nav={dict.nav} localeOptions={localeOptions} />
      <StickyCTA locale={locale as Locale} label={dict.nav.stickyCta} />
      {children}
      <Footer locale={locale as Locale} content={dict.footer} />
    </div>
  );
}
