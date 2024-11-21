import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'se','de','th'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(th|de|se|en)/:path*']
};