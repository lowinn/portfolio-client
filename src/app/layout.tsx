import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LOWIN | Portfolio",
  description: "LOWIN Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head/>
      <body>
        <main className={`${inter.className} dark:bg-gray-800`}>
          <Header/>
          <ThemeProvider attribute="class">
          {children}
          </ThemeProvider>
          <Footer/>
        </main>
      </body>
    </html>
  );
}
