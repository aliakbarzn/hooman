'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/assets/translations';
import type { TranslationType } from '@/@types/translations';

interface UseTranslationType {
  t: (key: keyof TranslationType) => string;
  language: string;
}

export const useTranslation = (): UseTranslationType => {
  const { language } = useLanguage();
  
  const t = (key: keyof TranslationType): string => {
    return translations[language]?.[key] ?? key;
  };

  return { t, language };
};