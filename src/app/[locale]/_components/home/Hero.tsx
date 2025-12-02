import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { getTranslations } from "next-intl/server";

export async function Hero() {
  const t = await getTranslations("home");
  return (
    <section className="relative overflow-hidden text-white bg-linear-to-b from-white to-black" id="hero">
      <Container>
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero/hero-bg-placeholder.jpg"
            // src="/assets/images/hero/hero-bg-placeholder.png"
            alt="خلفية مركز الحقيقة"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/60" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-90px)] flex-col justify-center px-4 pb-30 pt-24 lg:px-0">
          <div className="self-center text-center">
            <h1 className="max-w-5xl xl:max-w-6xl mx-auto mb-4 text-2xl font-bold rtl:leading-relaxed tracking-tight sm:text-3xl lg:text-[3rem] xl:text-[3.5rem]">
              {t("hero.title")}
            </h1>
            <p className="max-w-4xl xl:max-w-5xl mx-auto text-sm text-gray-200 sm:text-2xl">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
