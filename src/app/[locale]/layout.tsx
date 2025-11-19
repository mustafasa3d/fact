import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
// import { HtmlDir } from "@/components/HtmlDir";

// export const dynamic = "force-static";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ProvidersLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: "ar" | "en" };
}) {
  const locale = (await params?.locale ?? "ar") as "ar" | "en";
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {/* <HtmlDir /> */}
      {children}
    </NextIntlClientProvider>
  );
}
