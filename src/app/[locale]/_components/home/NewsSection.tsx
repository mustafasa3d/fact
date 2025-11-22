"use client";

import Image from "next/image";
import { CustomBtnLink } from "@/components/shared/CustomBtnLink";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Container } from "@/components/shared/Container";
import { useTranslations } from "next-intl";

export function NewsSection() {
  const t = useTranslations("home.newsSection");
  const tn = useTranslations("home.news");

  const news = [
    { id: 1, title: tn("0.title"), img: "/assets/images/news/news-1.svg" },
    { id: 2, title: tn("1.title"), img: "/assets/images/news/news-2.svg" },
    { id: 3, title: tn("2.title"), img: "/assets/images/news/news-1.svg" },
    { id: 4, title: tn("3.title"), img: "/assets/images/news/news-2.svg" },
    { id: 5, title: tn("4.title"), img: "/assets/images/news/news-1.svg" },
    { id: 6, title: tn("5.title"), img: "/assets/images/news/news-2.svg" },
  ];

  return (
    <section id="news" className="bg-white py-12">
      <Container>
        <div className="mb-6 text-center lg:mb-8">
          <h2 className="title">{t("title")}</h2>
          <p className="paragraph">
            {t("description")}
          </p>
        </div>

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
              <article className="group relative overflow-hidden rounded-md">
                <div className="relative aspect-square w-full">
                  <Image
                    src={n.img}
                    alt={n.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/35" />
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full p-4 text-white">
                      <h3
                        className="line-clamp-2 text-base font-bold leading-7"
                        title={n.title}
                      >
                        {n.title}
                      </h3>
                      <div className="mt-3 flex">
                        <CustomBtnLink
                          href={`#news-${n.id}`}
                          className="px-4 py-2 shadow-sm"
                          iconSrc="/assets/images/latestarticle/eye.svg"
                          iconAlt="Read news"
                          iconWidth={23}
                          iconHeight={23}
                          iconPriority
                        >
                          {t("readMore")}
                        </CustomBtnLink>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}