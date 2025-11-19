import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white" id="hero">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero-bg-placeholder.svg"
          alt="خلفية مركز الحقيقة"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/60" />
      </div>

      <div className="relative mx-auto flex min-h-[480px] max-w-6xl flex-col justify-center px-4 pb-10 pt-24 lg:px-0">
        <div className="max-w-3xl self-center text-center lg:self-end lg:text-right">
          <h1 className="mb-4 text-2xl font-bold leading-relaxed tracking-tight sm:text-3xl lg:text-4xl">
            مركز الحقيقة للدراسات الاستراتيجية (FACT)
            <br /> حيث تُصنع الرؤى وتتشكل القرارات
          </h1>
          <p className="text-sm leading-7 text-gray-200 sm:text-base">
            ينطلق المركز كمؤسسة بحثية مستقلة متخصصة في الدراسات الاستراتيجية
            المعمقة حول القضايا الجيوسياسية والأزمات الدولية، مع تركيز خاص على
            قضية اللاجئين الفلسطينيين، والأونروا، وحل النزاعات.
          </p>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-white text-right text-gray-900">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-gray-200 md:grid-cols-4">
          <HeroTab accent>{"خدمات استشارية"}</HeroTab>
          <HeroTab>{"أحدث الإصدارات"}</HeroTab>
          <HeroTab>{"القراءات"}</HeroTab>
          <HeroTab>{"خبراؤنا"}</HeroTab>
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
          ? "bg-[#0f5f46] text-white hover:bg-[#0d4f3a]"
          : "bg-white text-gray-900 hover:bg-gray-50")
      }
      type="button"
    >
      {children}
    </button>
  );
}
