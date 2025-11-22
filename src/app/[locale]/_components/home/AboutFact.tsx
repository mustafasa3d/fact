import Image from "next/image";
import HeroTab from "./HeroTab";
import { useTranslations } from "next-intl";

const activetab = "1";

export function AboutFact() {
  const t = useTranslations("home");
  return (
    <section id="about" className="relative bg-[url('/assets/images/whoweare/bg.svg')]">
      <div className="relative border-t border-white/10 bg-white text-right text-gray-900 h-0">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4 -mt-15 border-2 border-white">
          <HeroTab
            active={activetab === "1"}
            imgSrc="/assets/images/hero/s1.svg"
          >
            {t("servicesTabs.consulting")}
          </HeroTab>
          <HeroTab imgSrc="/assets/images/hero/s2.svg">
            {t("servicesTabs.latestPublications")}
          </HeroTab>
          <HeroTab imgSrc="/assets/images/hero/s3.svg">
            {t("servicesTabs.readings")}
          </HeroTab>
          <HeroTab noLine imgSrc="/assets/images/hero/s4.svg">
            {t("servicesTabs.experts")}
          </HeroTab>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pt-64 md:pt-48 pb-14 lg:px-0">
        <div className="mb-8 flex items-center justify-center">
          <Image
            className=" aspect-6/2 "
            src="/assets/images/whoweare/fact-logo.svg"
            alt="FACT Center for Strategic Studies"
            width={623}
            height={228}
            priority
          />
        </div>

        <div className="mx-auto text-center">
          <h2 className="title">من نحن</h2>
          <p className="my-4 text-2xl md:text-3xl font-bold">مركز الحقائق للدراسات الاستراتيجية (FACT)  رؤية للتفكير، حلول للمستقبل</p>
          <p className="paragraph">
          تأسس مطلع 2025 في لندن برئاسة الوزير الأردني الأسبق وجيه عزايزة، ويضم نخبة من الباحثين والخبراء. يركز على القضايا الاستراتيجية المرتبطة باللجوء والنزوح، وخاصة قضية اللاجئين الفلسطينيين والأونروا، كما يجري أبحاثًا معمقة حول الصراعات والأزمات الدولية، مع اهتمام خاص بالصراع العربي الإسرائيلي، الأبعاد القانونية والحقوقية لأزمة اللاجئين، واستراتيجيات حل النزاعات وبناء السلام.
          </p>
        </div>
      </div>
    </section>
  );
}
