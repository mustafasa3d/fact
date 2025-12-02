import { Container } from "@/components/shared/Container";
import { getTranslations } from "next-intl/server";
import { CustomPublicationCard } from "./CustomPublicationCard";

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
          <p className="paragraph mx-auto max-w-212">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <CustomPublicationCard
              key={p.id}
              id={p.id}
              title={p.title}
              desc={p.desc}
              img={p.img}
              latestBadgeText={t("latestBadge")}
              readMoreText={t("readMore")}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
