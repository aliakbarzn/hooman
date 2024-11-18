import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LANGUAGES = ['en', 'de', 'se', 'th'];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameHasValidLocale = SUPPORTED_LANGUAGES.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  if (!pathnameHasValidLocale) {
    const newUrl = new URL('/en', request.url); 
    return NextResponse.redirect(newUrl);
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

