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

  const socialData = [
    {
      name: "facebook",
      path: "/assets/images/footer/facebook.svg",
      label: ts("facebook"),
    },
    {
      name: "linkedin",
      path: "/assets/images/footer/linkedin.svg",
      label: ts("linkedin"),
    },
    { name: "x", path: "/assets/images/footer/x.svg", label: ts("x") },
    {
      name: "instagram",
      path: "/assets/images/footer/insta.svg",
      label: ts("instagram"),
    },
    {
      name: "youtube",
      path: "/assets/images/footer/yourube.svg",
      label: ts("youtube"),
    },
    { name: "a", path: "/assets/images/footer/a.svg", label: ts("youtube") },
  ];
  return (
    <footer className="bg-[#3f3f3f] text-white" id="footer">
      {/* Newsletter */}
      <Container className="py-6 grid grid-cols-1 lg:grid-cols-2">
        {/* Logo */}
        <div className="flex items-start justify-start max-lg:mb-5">
          <div className="relative h-24 w-56 xl:h-[5.2rem] xl:w-[13.3rem]">
            <Image
              src="/assets/images/footer/footer-logo.svg"
              alt={t("logoAlt")}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <form
          className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          action="#"
        >
          <input
            type="email"
            placeholder={tn("placeholder")}
            className="min-h-12 flex-1 border border-white bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-500 focus:outline-none"
          />
          <CustomBtnLink
            type="submit"
            className="min-h-12 px-6 xl:px-[4.68rem]"
          >
            {tn("subscribe")}
          </CustomBtnLink>
        </form>
      </Container>

      {/* Links */}
      <Container className="lg:pt-3 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Quick Links */}
          <div className="col-span-2">
            <h4 className="mb-5 xl:mb-[30px] text-sm lg:text-2xl font-semibold text-white">
              {tq("title")}
            </h4>
            <ul className="space-y-2 text-sm lg:text-2xl text-zinc-300 grid md:grid-cols-2">
              <li>
                <Link href="#about" className="hover:text-white">
                  {tq("about")}
                </Link>
              </li>
              <li>
                <Link href="#research" className="hover:text-white">
                  {tq("research")}
                </Link>
              </li>
              <li>
                <Link href="#publications" className="hover:text-white">
                  {tq("publications")}
                </Link>
              </li>
              <li>
                <Link href="#events" className="hover:text-white">
                  {tq("events")}
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-white">
                  {tq("blog")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white">
                  {tq("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="mb-5 xl:mb-[30px] text-sm lg:text-2xl font-semibold text-white">
              {tc("title")}
            </h4>
            <ul className="space-y-2 text-sm lg:text-2xl text-zinc-300">
              <li>{tc("email")}</li>
              <li dir="ltr" className="w-fit">
                {tc("phone")}
              </li>
              <li>{tc("address")}</li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-2 md:col-span-1 lg:mr-auto">
            <h4 className="mb-5 xl:mb-[40px] text-sm lg:text-2xl font-semibold text-white">
              {ts("title")}
            </h4>
            <div className="flex md:max-w-[190px] flex-wrap items-center gap-7">
              {socialData.map((s) => (
                <Link
                  key={s.name}
                  href="#"
                  aria-label={s.label}
                  className="grid h-7 w-7 lg:h-11 lg:w-11 place-items-center rounded-full bg-white text-zinc-900 transition-colors hover:bg-white/90"
                >
                  <Image
                    src={s.path}
                    alt={s.label}
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-zinc-100 py-3">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 lg:gap-40 text-sm lg:text-xl text-center text-zinc-200">
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
