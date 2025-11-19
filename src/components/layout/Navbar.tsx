"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Link as IntlLink, usePathname } from "@/i18n/navigation";
import Image from "next/image";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const switchLocale = locale === "ar" ? "en" : "ar";

  const NAV_ITEMS = [
    { href: "#about", label: t("about") },
    { href: "#research", label: t("research") },
    { href: "#publications", label: t("publications") },
    { href: "#memory", label: t("memory") },
    { href: "#mediaCenter", label: t("mediaCenter") },
    { href: "#blog", label: t("blog") },
    { href: "#contact", label: t("contact") },
  ];
  return (
    <header className="w-full border-b border-white bg-primary backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-0">
        <Image
          src="/assets/images/navbar/logo.png"
          className="h-16 w-48"
          alt="FACT Center for Strategic Studies"
          width={240}
          height={120}
          priority
        />

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex text-white">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white/70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Image
            src="/assets/images/navbar/search.svg"
            className="h-4 w-4"
            alt="search"
            width={16}
            height={16}
            priority
          />

          <IntlLink
            href={{ pathname }}
            locale={switchLocale}
            className="hidden lg:inline-flex items-center gap-1 rounded-full text-xs font-medium text-white shadow-sm hover:bg-[#0d4f3a]"
          >
            {t("english")}
            <Image
              src="/assets/images/navbar/world.svg"
              className="h-4 w-4"
              alt="arrow"
              width={16}
              height={16}
              priority
            />
          </IntlLink>
        </div>
      </div>
    </header>
  );
}
