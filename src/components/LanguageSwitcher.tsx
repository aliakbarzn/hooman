'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';
import { ReactNode } from 'react';

interface LanguageButtonProps {
  lang: string;
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
}

const LanguageButton = ({ lang, isActive, onClick, children }: LanguageButtonProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200
      ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-100'}
    `}
    type="button"
    aria-pressed={isActive}
  >
    {children}
  </button>
);

export default function LanguageSwitcher() {
  const { changeLanguage, language } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="flex space-x-4 p-4 bg-white shadow-md rounded-lg">
      <LanguageButton
        lang="fa"
        isActive={language === 'fa'}
        onClick={() => changeLanguage('fa')}
      >
        فارسی
      </LanguageButton>
      <LanguageButton
        lang="en"
        isActive={language === 'en'}
        onClick={() => changeLanguage('en')}
      >
        English
      </LanguageButton>
    </div>
  );
}
