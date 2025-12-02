"use client";

import { Skeleton } from "@/components/shared/Skeleton";
import { useMounted } from "@/hooks/useMounted";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Container } from "@/components/shared/Container";
import { useTranslations } from "next-intl";
import { NewsCard } from "./NewsCard";

export function NewsSection() {
  const t = useTranslations("home.newsSection");
  const tn = useTranslations("home.news");
  const isMounted = useMounted();

  const news = [
    { id: 1, title: tn("0.title"), img: "/assets/images/news/new1.jpg" },
    { id: 2, title: tn("1.title"), img: "/assets/images/news/new2.jpg" },
    { id: 3, title: tn("2.title"), img: "/assets/images/news/new1.jpg" },
    { id: 4, title: tn("3.title"), img: "/assets/images/news/new2.jpg" },
    { id: 5, title: tn("4.title"), img: "/assets/images/news/new1.jpg" },
    { id: 6, title: tn("5.title"), img: "/assets/images/news/new2.jpg" },
  ];

  return (
    <section id="news" className="py-12">
      <Container>
        <div className="mb-6 text-center lg:mb-8">
          <h2 className="title">{t("title")}</h2>
          <p className="paragraph">
            {t("description")}
          </p>
        </div>

        {
          isMounted ? (
            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3.2 },
              }}
            >
              {news.map((n) => (
                <SwiperSlide key={n.id}>
                  <NewsCard
                    id={n.id}
                    title={n.title}
                    img={n.img}
                    readMoreText={t("readMore")}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="aspect-square w-full rounded-md" />
              ))}
            </div>
          )
        }
      </Container>
    </section>
  );
}