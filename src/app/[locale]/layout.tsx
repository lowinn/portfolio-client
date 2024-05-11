import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type { Metadata } from "next";

import './globals.css';

export const metadata: Metadata = {
  title: "LOWIN | Portfolio",
  description: "LOWIN Portfolio",
};

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Noto_Sans_Khmer } from 'next/font/google';
const notoSansKhmer = Noto_Sans_Khmer({subsets: ['khmer']});

import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import lang from '@/types/local.type';
import { ThemeProvider } from 'next-themes';

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${locale == lang.EN? inter.className : notoSansKhmer.className}  m-6`}>
        <NextIntlClientProvider messages={messages}>
          <Header/>
          <ThemeProvider>
          {children}
          </ThemeProvider>
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}