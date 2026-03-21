import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Approach from '@/components/home/Approach';
import Capabilities from '@/components/home/Capabilities';
import ContactForm from '@/components/home/ContactForm';
import FAQ from '@/components/home/FAQ';
import Hero from '@/components/home/Hero';
import Pricing from '@/components/home/Pricing';
import Problem from '@/components/home/Problem';
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

  const sections = [
    <Navbar
      key="navbar"
      locale={locale as Locale}
      nav={dict.nav}
      localeOptions={localeOptions}
    />,
    <Hero key="hero" locale={locale as Locale} content={dict.hero} />,
    <Problem key="problem" content={dict.problem} />,
    <Capabilities key="services" content={dict.services} />,
    <Approach key="approach" content={dict.approach} />,
    <Pricing key="pricing" content={dict.pricing} />,
    <UseCases key="use-cases" content={dict.useCases} />,
    <FAQ key="faq" content={dict.faq} />,
    <ContactForm key="contact" content={dict.contact} />,
    <Footer key="footer" locale={locale as Locale} content={dict.footer} />
  ];

  return <main id="top">{sections}</main>;
}
