"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const news = [
  {
    id: 1,
    title:
      "يكثّف العلماء جهودهم لجمع البيانات وتحليلها بهدف فهم التغيرات البيئية والمناخية",
    img: "/assets/images/news/news-1.svg",
  },
  {
    id: 2,
    title:
      "يكثّف العلماء جهودهم لجمع البيانات وتحليلها بهدف فهم التغيرات البيئية والمناخية",
    img: "/assets/images/news/news-2.svg",
  },
  {
    id: 3,
    title:
      "يكثّف العلماء جهودهم لجمع البيانات وتحليلها بهدف فهم التغيرات البيئية والمناخية",
    img: "/assets/images/news/news-1.svg",
  },
  {
    id: 4,
    title:
      "يكثّف العلماء جهودهم لجمع البيانات وتحليلها بهدف فهم التغيرات البيئية والمناخية",
    img: "/assets/images/news/news-2.svg",
  },
  {
    id: 5,
    title:
      "يكثّف العلماء جهودهم لجمع البيانات وتحليلها بهدف فهم التغيرات البيئية والمناخية",
    img: "/assets/images/news/news-1.svg",
  },
  {
    id: 6,
    title:
      "يكثّف العلماء جهودهم لجمع البيانات وتحليلها بهدف فهم التغيرات البيئية والمناخية",
    img: "/assets/images/news/news-2.svg",
  },
];

export function NewsSection() {
  return (
    <section id="news" className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        <div className="mb-6 text-center lg:mb-8">
          <h2 className="title">آخر الأخبار والإعلانات</h2>
          <p className="paragraph">
            ابقَ على اطلاع بآخر أخبارنا التي تقدم رؤى معمقة حول أهم القضايا في
            مجالاتنا.
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          // navigation
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
                      <h3 className="line-clamp-2 text-base font-bold leading-7" title={n.title}>
                        {n.title}
                      </h3>
                      <div className="mt-3 flex">
                        <Link
                          href={`#news-${n.id}`}
                          className="inline-flex items-center gap-2 bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0d4f3a]"
                        >
                          قراءة المزيد
                          <Image
                            src="/assets/images/latestarticle/eye.svg"
                            alt="FACT Center for Strategic Studies"
                            width={23}
                            height={23}
                            priority
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
