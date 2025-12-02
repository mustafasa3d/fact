import { Container } from "@/components/shared/Container";
import { getTranslations } from "next-intl/server";

export async function CustomPageHeader({imgSrc = '/assets/images/hero/hero-bg-placeholder.jpg', title}: {imgSrc?: string, title: string}) {
  const t = await getTranslations("aboutUs");

  return (
    <section
      className="relative h-[407px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${imgSrc}')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <Container>
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white">
            {title}
          </h1>
        </div>
      </Container>
    </section>
  );
}
