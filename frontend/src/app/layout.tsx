import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css"; 
// import {NextIntlClientProvider} from 'next-intl';
// import {getLocale, getMessages} from 'next-intl/server';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", 
});


export const metadata: Metadata = {
  title: "Frontend Demo",
  description: "Generated by Toricat",
};

// export default async function RootLayout({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   const locale = await getLocale();
//   const messages = await getMessages();
 
//   return (
//     <html lang={locale} suppressHydrationWarning>
//       <body className={inter.className|| ""}>
//         <NextIntlClientProvider messages={messages}>
//           {children}
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }
import { cookies } from 'next/headers';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = (await cookies()).get('i18next')?.value || 'en';
  return (
    <html lang={lang} suppressHydrationWarning>
    <body className={inter.className|| ""}>
        {children}
      </body>
    </html>
  );
}
