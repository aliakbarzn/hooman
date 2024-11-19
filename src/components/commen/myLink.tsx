import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

interface MyLinkProps {
  href: string;
  children: React.ReactNode;
}

export const MyLink = ({ href, children }: MyLinkProps) => {
  const { language } = useLanguage();
  const localizedHref = href.startsWith("/") ? `/${language}${href}` : `/${language}/${href}`;
  return <Link href={localizedHref}>{children}</Link>;
};
