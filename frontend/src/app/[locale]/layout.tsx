import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { UserProvider } from "@/context/UserContext";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { LocaleSType } from "@/constants/language";
import { notFound } from 'next/navigation';
import { routing } from '@/libs/next-intl/routing';
import Header from "@/components/header/header";
import exp from "constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: LocaleSType }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('landing.metadata.title'),
    description: t('landing.metadata.description'),
  };
}

type Props ={
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}
export default async function RootLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as LocaleSType)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className || ""}>
        <NextIntlClientProvider messages={messages}>
          <UserProvider>
            <Header />
            {children}
          </UserProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}