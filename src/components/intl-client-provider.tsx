'use client';

import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

interface IntlClientProviderProps {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, string> | AbstractIntlMessages; // Adjust type if your messages structure is different
}

export default function IntlClientProvider({
  children,
  locale,
  messages,
}: IntlClientProviderProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
