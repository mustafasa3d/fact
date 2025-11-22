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
  params: Promise<{ locale?: "ar" | "en" }>;
}) {
  // const { locale } = await params;
  // const messages = (await import(`../../../messages/${locale}.json`)).default;
  const locale = ((await params)?.locale ?? "ar") as "ar" | "en";
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
