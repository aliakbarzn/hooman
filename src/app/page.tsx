'use client';

import { useTranslation } from '@/hooks/useTranslation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <LanguageSwitcher />
      
      <h1>{t('welcome')}</h1>
      
      <nav>
        <Link href="/">{t('loading')}</Link>
        <Link href="/about">{t('error')}</Link>
        <Link href="/contact">{t('error')}</Link>
      </nav>
    </div>
  );
}