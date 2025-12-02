"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useTranslations } from "next-intl";

const partners = [
  { id: 1, src: "/assets/partners/partner-1.png" },
  { id: 2, src: "/assets/partners/partner-2.png" },
  { id: 3, src: "/assets/partners/partner-3.png" },
  { id: 4, src: "/assets/partners/partner-4.png" },
];

export function TrustedPartners() {
  const t = useTranslations("home.trustedPartners");
  const ta = useTranslations("home.partnersAlt");

  return (
    <section id="partners" className="py-12">
      <div className="mx-auto max-w-6xl px-4 text-center lg:px-0 mb-10">
        <h2 className="title">{t("title")}</h2>
        <p className="paragraph">{t("description")}</p>
      </div>

      <div className="relative" dir="ltr">
        <Marquee
          pauseOnHover
          direction="right"
          autoFill
          speed={40}
          gradient
          gradientWidth={80}
          gradientColor="#ffffff"
        >
          {partners.map((p) => (
            <div key={p.id} className="mx-10 flex items-center">
              <Image
                src={p.src}
                alt={ta(String(p.id % 3 === 0 ? 3 : p.id % 3))} // 1→1, 2→2, 3→3, 4→1, 5→2, 6→3
                width={250}
                height={100}
                className="h-24 w-auto object-contain"
                priority
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}