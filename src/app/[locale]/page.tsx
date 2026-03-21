import Hero from '@/components/home/Hero';
import Trust from '@/components/home/Trust';
import Outcomes from '@/components/home/Outcomes';
import Process from '@/components/home/Process';
import Capabilities from '@/components/home/Capabilities';
import Pricing from '@/components/home/Pricing';
import FinalCTA from '@/components/home/FinalCTA';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale, locales } from '@/i18n/config';
import { notFound } from 'next/navigation';

type LocalizedPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalizedHomePage({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <main id="top">
      <Hero locale={locale} content={dict.hero} />
      <Trust content={dict.trust} />
      <Outcomes content={dict.outcomes} />
      <Process content={dict.process} />
      <Capabilities content={dict.capabilities} />
      <Pricing content={dict.pricing} />
      <FinalCTA content={dict.contact} />
    </main>
  );
}
