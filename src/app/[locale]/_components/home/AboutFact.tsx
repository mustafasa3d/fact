import Image from "next/image";
import HeroTab from "./HeroTab";
import { Container } from "@/components/shared/Container";
import { getTranslations } from "next-intl/server";

const activetab = "1";

export async function AboutFact() {
  const t = await getTranslations("home");
  return (
    <section
      id="about"
      className="relative bg-[url('/assets/images/whoweare/bg.svg')] bg-no-repeat bg-cover"
    >
      <Container>
        <div className="relative border-t border-white/10 bg-white text-gray-900 h-0">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-4 -mt-15 border-2 lg:border-3 border-white">
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
      </Container>

      <div className="pt-80! md:pt-48! mb-8 flex items-center justify-center relative">
        <Image
          className="max-md:hidden max-md:aspect-6/2 absolute right-0 w-[378px] h-[71px]"
          src="/assets/images/whoweare/Layer-fact.svg"
          alt="FACT Center for Strategic Studies"
          width={378}
          height={71}
          />
        <Image
          className="max-md:aspect-6/2"
          src="/assets/images/whoweare/fact-logo.svg"
          alt="FACT Center for Strategic Studies"
          width={623}
          height={228}
          priority
          />
        <Image
          className="max-md:hidden max-md:aspect-6/2 absolute left-0 w-[378px] h-[71px]"
          src="/assets/images/whoweare/Layer-fact.svg"
          alt="FACT Center for Strategic Studies"
          width={378}
          height={71}
        />
      </div>

      <Container className="pb-14!">
        <div className="mx-auto text-center">
          <h2 className="title">{t("aboutFact.title")}</h2>
          <p className="my-4 text-2xl md:text-3xl xl:text-[2.25rem] font-bold text-[#1B4332]">
            {t("aboutFact.subtitle")}
          </p>
          <p className="paragraph">{t("aboutFact.description")}</p>
        </div>
      </Container>
    </section>
  );
}
