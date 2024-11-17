'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations} from '@/assets/translations';

interface UseTranslationType {
  t: (key: string) => string;
  language: string;
}

export const useTranslation = (): UseTranslationType => {
  const { language } = useLanguage();
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value?.[k] === undefined) return key;
      value = value[k];
    }
    
    return value;
  };

  return { t, language };
};