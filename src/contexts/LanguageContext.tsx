'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
interface LanguageContextType {
    language: string;
    changeLanguage: (newLang: string) => void;
}
  
interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState('fa');

  const changeLanguage = (newLang: string) => {
    setLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'fa' ? 'rtl' : 'ltr';
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};