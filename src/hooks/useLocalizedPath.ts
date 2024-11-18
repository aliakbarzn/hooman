'use client'
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export function useLocalizedPath() {
  const { language } = useLanguage();
  const pathname = usePathname();

  const getLocalizedPath = (path: string) => {
    const pathSegments = path.split('/');
    if (pathSegments[1] === language) {
      return path; 
    }
    return `/${language}${path.startsWith('/') ? path : `/${path}`}`;
  };

  return { getLocalizedPath, language, pathname };
}
