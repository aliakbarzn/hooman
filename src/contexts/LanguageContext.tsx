'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface LanguageContextType {
  language: string;
  changeLanguage: (newLang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLang: string;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState('en');

  const changeLanguage = (newLang: string) => {
    const pathSegments = pathname.split('/');
    pathSegments[1] = newLang;
    const newPath = pathSegments.join('/');
    
    router.push(newPath);
    setLanguage(newLang);
    document.documentElement.dir = newLang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};