import Image from "next/image";
import { useTranslations } from "next-intl";

const activetab = "1";
export function Hero() {
  const t = useTranslations("home");
  return (
    <section className="relative overflow-hidden bg-black text-white" id="hero">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero/hero-bg-placeholder.jpg"
          alt="خلفية مركز الحقيقة"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/60" />
      </div>

      <div className="relative mx-auto flex min-h-[480px] max-w-6xl flex-col justify-center px-4 pb-30 pt-24 lg:px-0">
        <div className="self-center text-center">
          <h1 className="max-w-5xl mx-auto mb-4 text-2xl font-bold leading-relaxed tracking-tight sm:text-3xl lg:text-[3.4rem]">
            {t("hero.title")}
          </h1>
          <p className="max-w-4xl mx-auto text-sm leading-7 text-gray-200 sm:text-2xl">
            {t("hero.subtitle")}
          </p>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-white text-right text-gray-900">
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
    </section>
  );
}

type HeroTabProps = {
  children: React.ReactNode;
  active?: boolean;
  imgSrc?: string;
  noLine?: boolean;
};

function HeroTab({ children, active, imgSrc, noLine }: HeroTabProps) {
  return (
    <button
      className={`flex flex-col items-center justify-center gap-3 px-4 py-5 text-sm lg:text-3xl transition-colors bg-white text-gray-900 hover:bg-gray-50 relative ${
        noLine
          ? " !after:hidden"
          : " after:content-[''] after:absolute after:min-h-[20px] after:h-[calc(100%-50px)] after:w-[2px] after:bg-gray-200 after:inline-block after:left-0 after:top-5 "
      } ${active ? "!bg-primary text-white hover:!bg-[#0d4f3a] after:!-left-2" : ""}`}
      type="button"
    >
      {imgSrc && (
        <Image
          src={imgSrc}
          alt=""
          width={106}
          height={106}
          className="h-24 w-24"
        />
      )}
      {children}
    </button>
  );
}
