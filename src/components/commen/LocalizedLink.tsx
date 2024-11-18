import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

interface LocalizedLinkProps {
  href: string;
  children: React.ReactNode;
}

export const LocalizedLink = ({ href, children }: LocalizedLinkProps) => {
  const { language } = useLanguage();
  const localizedHref = href.startsWith("/") ? `/${language}${href}` : `/${language}/${href}`;
  return <Link href={localizedHref}>{children}</Link>;
};
