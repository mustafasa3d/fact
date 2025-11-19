"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const partners = [
  { id: 1, src: "/assets/partners/partner-1.svg", alt: "UNRWA" },
  { id: 2, src: "/assets/partners/partner-2.svg", alt: "HRC" },
  { id: 3, src: "/assets/partners/partner-3.svg", alt: "WikiPalestine" },
  { id: 4, src: "/assets/partners/partner-1.svg", alt: "UNRWA" },
  { id: 5, src: "/assets/partners/partner-2.svg", alt: "HRC" },
  { id: 6, src: "/assets/partners/partner-3.svg", alt: "WikiPalestine" },
];

export function TrustedPartners() {
  return (
    <section id="partners" className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 text-center lg:px-0">
        <h2 className="mb-2 text-2xl font-bold text-[#0f5f46]">شركاؤنا الموثوقون</h2>
        <p className="mx-auto mb-6 max-w-3xl text-sm text-gray-600">
          تعاونًا مع شركاء استراتيجيين لتحقيق نتائج تواكب أعلى المعايير.
        </p>
      </div>
      <div className="relative">
        <Marquee
          pauseOnHover
          direction="right"
          autoFill
          speed={40}
          gradient
          gradientWidth={80}
          gradientColor={[255, 255, 255]}
        >
          {partners.map((p) => (
            <div key={p.id} className="mx-10 flex items-center">
              <Image
                src={p.src}
                alt={p.alt}
                width={180}
                height={64}
                className="h-16 w-auto object-contain"
                priority
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
