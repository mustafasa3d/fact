import { Navbar } from "@/components/layout/navbar/Navbar";
import { Footer } from "@/components/layout/footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
// import { routing } from "@/i18n/routing";

// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({ locale }));
// }

export default async function ProvidersLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
        {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
