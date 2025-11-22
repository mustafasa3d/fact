import Image from "next/image";
import { useTranslations } from "next-intl";

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

      <div className="relative mx-auto flex min-h-[calc(100vh-90px)] max-w-6xl flex-col justify-center px-4 pb-30 pt-24 lg:px-0">
        <div className="self-center text-center">
          <h1 className="max-w-5xl mx-auto mb-4 text-2xl font-bold leading-relaxed tracking-tight sm:text-3xl lg:text-[3.4rem]">
            {t("hero.title")}
          </h1>
          <p className="max-w-4xl mx-auto text-sm leading-7 text-gray-200 sm:text-2xl">
            {t("hero.subtitle")}
          </p>
        </div>
      </div>

      
    </section>
  );
}

