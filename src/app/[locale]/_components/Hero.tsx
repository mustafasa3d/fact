import Image from "next/image";
import {useTranslations} from "next-intl";

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

      <div className="relative mx-auto flex min-h-[480px] max-w-6xl flex-col justify-center px-4 pb-10 pt-24 lg:px-0">
        <div className="max-w-3xl self-center text-center">
          <h1 className="mb-4 text-2xl font-bold leading-relaxed tracking-tight sm:text-3xl lg:text-4xl">
            {t("hero.title")}
          </h1>
          <p className="text-sm leading-7 text-gray-200 sm:text-base">
            {t("hero.subtitle")}
          </p>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-white text-right text-gray-900">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-gray-200 md:grid-cols-4">
          <HeroTab accent>{t("servicesTabs.consulting")}</HeroTab>
          <HeroTab>{t("servicesTabs.latestPublications")}</HeroTab>
          <HeroTab>{t("servicesTabs.readings")}</HeroTab>
          <HeroTab>{t("servicesTabs.experts")}</HeroTab>
        </div>
      </div>
    </section>
  );
}

type HeroTabProps = {
  children: React.ReactNode;
  accent?: boolean;
};

function HeroTab({ children, accent }: HeroTabProps) {
  return (
    <button
      className={
        "flex items-center justify-center gap-2 px-4 py-5 text-sm font-semibold transition-colors " +
        (accent
          ? "bg-primary text-white hover:bg-[#0d4f3a]"
          : "bg-white text-gray-900 hover:bg-gray-50")
      }
      type="button"
    >
      {children}
    </button>
  );
}
