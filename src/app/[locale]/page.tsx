import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Approach from '@/components/home/Approach';
import Capabilities from '@/components/home/Capabilities';
import ContactForm from '@/components/home/ContactForm';
import Hero from '@/components/home/Hero';
import Pricing from '@/components/home/Pricing';
import Problem from '@/components/home/Problem';
import StickyCTA from '@/components/home/StickyCTA';
import UseCases from '@/components/home/UseCases';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale, localeInfo, locales, type Locale } from '@/i18n/config';
import { notFound } from 'next/navigation';

type LocalizedPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalizedHomePage({
  params
}: LocalizedPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const localeOptions = locales.map((code) => ({
    code,
    nativeLabel: localeInfo[code].nativeLabel,
    flag: localeInfo[code].flag
  }));

  return (
    <main id="top">
      <Navbar
        locale={locale as Locale}
        nav={dict.nav}
        localeOptions={localeOptions}
      />
      <StickyCTA locale={locale as Locale} label={dict.nav.stickyCta} />
      <Hero locale={locale as Locale} content={dict.hero} />
      <Problem content={dict.trust} />
      <Capabilities content={dict.outcomes} />
      <Approach content={dict.process} />
      <UseCases content={dict.capabilities} />
      <Pricing content={dict.pricing} />
      <ContactForm content={dict.contact} />
      <Footer locale={locale as Locale} content={dict.footer} />
    </main>
  );
}
