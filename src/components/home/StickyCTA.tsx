'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { type Locale } from '@/i18n/config';

type StickyCTAProps = {
  locale: Locale;
  label: string;
};

export default function StickyCTA({ locale, label }: StickyCTAProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-inline-cta]')
    );

    if (!targets.length) {
      setHidden(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setHidden(entries.some((entry) => entry.isIntersecting));
      },
      {
        threshold: 0.35,
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Link
      href={`/${locale}#contact`}
      className={`sticky-cta btn btn-primary${hidden ? ' sticky-cta-hidden' : ''}`}
      data-track="sticky-cta"
    >
      {label}
    </Link>
  );
}
