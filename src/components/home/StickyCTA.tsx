import Link from 'next/link';
import { type Locale } from '@/i18n/config';

type StickyCTAProps = {
  locale: Locale;
  label: string;
};

export default function StickyCTA({ locale, label }: StickyCTAProps) {
  return (
    <Link
      href={`/${locale}#contact`}
      className="sticky-cta btn btn-primary"
      data-track="sticky-cta"
    >
      {label}
    </Link>
  );
}
