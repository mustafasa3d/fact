"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import LanguageSwitch from "./LanguageSwitch";

export function Navbar() {
  const t = useTranslations("nav");

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
          className="h-14 w-32 md:h-16 md:w-48"
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

        <LanguageSwitch />
      </div>
    </header>
  );
}
