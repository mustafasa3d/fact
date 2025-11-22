"use client";

import Image from "next/image";
import Link from "next/link";
import { CustomBtnLink } from "@/components/shared/CustomBtnLink";
import { Container } from "@/components/shared/Container";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("footer.newsletter");
  const tq = useTranslations("footer.quickLinks");
  const tc = useTranslations("footer.contact");
  const ts = useTranslations("footer.social");
  const tb = useTranslations("footer.bottomLinks");

  return (
    <footer className="bg-[#3f3f3f] text-white" id="footer">
      {/* Newsletter */}
      <Container className="py-6 grid grid-cols-1 lg:grid-cols-2">
        {/* Logo */}
        <div className="flex items-start justify-start max-lg:mb-5">
          <div className="relative h-20 w-56">
            <Image
              src="/assets/images/footer/footer-logo.svg"
              alt={t("logoAlt")}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <form className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center" action="#">
          <input
            type="email"
            placeholder={tn("placeholder")}
            className="min-h-12 flex-1 rounded-md border border-white bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-500 focus:outline-none"
          />
          <CustomBtnLink type="submit" className="min-h-12 rounded-md px-6">
            {tn("subscribe")}
          </CustomBtnLink>
        </form>
      </Container>

      {/* Links */}
      <Container className="py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Quick Links */}
          <div className="col-span-2">
            <h4 className="mb-3 text-sm lg:text-2xl font-semibold text-white">
              {tq("title")}
            </h4>
            <ul className="space-y-2 text-sm lg:text-2xl text-zinc-300 grid md:grid-cols-2">
              <li><Link href="#about" className="hover:text-white">{tq("about")}</Link></li>
              <li><Link href="#research" className="hover:text-white">{tq("research")}</Link></li>
              <li><Link href="#publications" className="hover:text-white">{tq("publications")}</Link></li>
              <li><Link href="#events" className="hover:text-white">{tq("events")}</Link></li>
              <li><Link href="#blog" className="hover:text-white">{tq("blog")}</Link></li>
              <li><Link href="#contact" className="hover:text-white">{tq("contact")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="mb-3 text-sm lg:text-2xl font-semibold text-white">{tc("title")}</h4>
            <ul className="space-y-2 text-sm lg:text-2xl text-zinc-300">
              <li>{tc("email")}</li>
              <li>{tc("phone")}</li>
              <li>{tc("address")}</li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="mb-3 text-sm lg:text-2xl font-semibold text-white">
              {ts("title")}
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              {[
                { name: "facebook", path: mdiPath.facebook, label: ts("facebook") },
                { name: "linkedin", path: mdiPath.linkedin, label: ts("linkedin") },
                { name: "x", path: mdiPath.x, label: ts("x") },
                { name: "instagram", path: mdiPath.instagram, label: ts("instagram") },
                { name: "youtube", path: mdiPath.youtube, label: ts("youtube") },
              ].map((s) => (
                <Link
                  key={s.name}
                  href="#"
                  aria-label={s.label}
                  className="grid h-7 w-7 lg:h-11 lg:w-11 place-items-center rounded-full bg-white text-zinc-900 transition-colors hover:bg-white/90"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-zinc-100 py-3">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center text-zinc-200 divide-x divide-zinc-600">
            <Link href="/">{tb("copyright")}</Link>
            <Link href="/">{tb("privacy")}</Link>
            <Link href="/">{tb("comments")}</Link>
            <Link href="/">{tb("terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// نفس الـ SVG paths اللي كانت موجودة
const mdiPath = {
  facebook: "M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3h-1.9v7A10 10 0 0 0 22 12Z",
  linkedin: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-9 16v-7H8v7h2Zm-1-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 8v-4.5c0-2.5-1.3-3.6-3-3.6-1.4 0-2 .8-2.3 1.3h-.1V9H12v10h2v-4.5c0-1.2.2-2.4 1.8-2.4 1.5 0 1.7 1.3 1.7 2.5V19h2Z",
  x: "M3 3h3.7l5.3 6.8L18.3 3H22l-7.9 9.4L22 21h-3.8l-6-7.7L5.5 21H2l8.3-9.8L3 3Z",
  instagram: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z",
  youtube: "M10 15.5v-7l6 3.5-6 3.5ZM2 7.5c0-1.6 1.3-2.9 2.9-2.9h14.2c1.6 0 2.9 1.3 2.9 2.9v8.9c0 1.6-1.3 2.9-2.9 2.9H4.9A2.9 2.9 0 0 1 2 16.4V7.5Z",
};