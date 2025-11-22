import Image from "next/image";
import { CustomBtnLink } from "@/components/shared/CustomBtnLink";
import { Container } from "@/components/shared/Container";
import { getTranslations } from "next-intl/server";

export async function RecentPublications() {
  const t = await getTranslations("home.recentPublications");
  const tp = await getTranslations("home.publications");

  const items = [
    {
      id: 1,
      title: tp("0.title"),
      desc: tp("0.desc"),
      img: "/assets/images/publications/pub-1.png",
    },
    {
      id: 2,
      title: tp("1.title"),
      desc: tp("1.desc"),
      img: "/assets/images/publications/pub-2.jpg",
    },
    {
      id: 3,
      title: tp("2.title"),
      desc: tp("2.desc"),
      img: "/assets/images/publications/pub-3.png",
    },
  ];

  return (
    <section id="publications" className="py-12">
      <Container>
        <div className="mb-8 text-center lg:mb-10">
          <h2 className="title">{t("title")}</h2>
          <p className="paragraph mx-auto max-w-[53rem]">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden transition hover:shadow-md"
            >
              <div className="relative aspect-16/10 w-full">
                <Image src={p.img} alt={p.title} fill className="object-cover" />
                <span className="absolute right-0 top-3 bg-red-600 px-2 py-1 text-xs font-semibold text-white">
                  {t("latestBadge")}
                </span>
              </div>
              <div className="py-3">
                <h3
                  className="mb-4 line-clamp-2 text-lg md:text-2xl font-extrabold text-primary"
                  title={p.title}
                >
                  {p.title}
                </h3>
                <p
                  className="mb-4 line-clamp-3 text-sm md:text-base text-gray-700"
                  title={p.desc}
                >
                  {p.desc}
                </p>
                <div className="flex items-center">
                  <div />
                  <CustomBtnLink
                    href={`#pub-${p.id}`}
                    className="px-4 py-2 shadow-sm"
                    iconSrc="/assets/images/latestarticle/eye.svg"
                    iconAlt="View publication"
                    iconWidth={23}
                    iconHeight={23}
                    iconPriority
                  >
                    {t("readMore")}
                  </CustomBtnLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}