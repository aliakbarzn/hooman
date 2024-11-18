import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip for files/images etc
  if (pathname.includes('.')) return;
  
  // Define supported languages
  const SUPPORTED_LANGUAGES = ['fa', 'en'];
  
  // Check if the path starts with a supported language
  const pathnameHasValidLocale = SUPPORTED_LANGUAGES.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  // If no valid language in URL, redirect to default language (fa)
  if (!pathnameHasValidLocale) {
    const newUrl = new URL(`/fa${pathname === '/' ? '' : pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
