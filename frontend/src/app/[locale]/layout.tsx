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
import { promise } from "zod";
import { headers } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: LocaleSType }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string ,title:string}>;
}) {
  const { locale,title } = await params;
  console.log("locale",locale);
  console.log("title",title);
  if (!routing.locales.includes(locale as LocaleSType)) {
    notFound();
  }
  const pathname = (await headers()).get('x-pathname') || '/';
  const messages = await getMessages();
  console.log("messages", messages);
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className || ""}>
        <NextIntlClientProvider messages={messages} key={locale}>
          <UserProvider>
            <Header />
            {children}
          </UserProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}