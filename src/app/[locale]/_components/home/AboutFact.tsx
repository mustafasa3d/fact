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
      className="relative bg-[url('/assets/images/whoweare/bg.svg')]"
    >
      <div className="relative border-t border-white/10 bg-white text-gray-900 h-0">
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

      <Container className="pt-64! md:pt-48! pb-14!">
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
          <h2 className="title">{t("aboutFact.title")}</h2>
          <p className="my-4 text-2xl md:text-3xl font-bold">
            {t("aboutFact.subtitle")}
          </p>
          <p className="paragraph">{t("aboutFact.description")}</p>
        </div>
      </Container>
    </section>
  );
}
