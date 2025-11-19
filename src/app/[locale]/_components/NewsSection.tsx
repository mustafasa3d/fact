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
    title: "يكثّف العلماء جهودهم لجمع البيانات وتحليلها بهدف فهم التغيرات البيئية والمناخية",
    img: "/assets/images/news/news-1.svg",
  },
  {
    id: 2,
    title: "يكثّف العلماء جهودهم لجمع البيانات وتحليلها بهدف فهم التغيرات البيئية والمناخية",
    img: "/assets/images/news/news-2.svg",
  },
  {
    id: 3,
    title: "يكثّف العلماء جهودهم لجمع البيانات وتحليلها بهدف فهم التغيرات البيئية والمناخية",
    img: "/assets/images/news/news-1.svg",
  },
  {
    id: 4,
    title: "يكثّف العلماء جهودهم لجمع البيانات وتحليلها بهدف فهم التغيرات البيئية والمناخية",
    img: "/assets/images/news/news-2.svg",
  },
  {
    id: 5,
    title: "يكثّف العلماء جهودهم لجمع البيانات وتحليلها بهدف فهم التغيرات البيئية والمناخية",
    img: "/assets/images/news/news-1.svg",
  },
  {
    id: 6,
    title: "يكثّف العلماء جهودهم لجمع البيانات وتحليلها بهدف فهم التغيرات البيئية والمناخية",
    img: "/assets/images/news/news-2.svg",
  },
];

export function NewsSection() {
  return (
    <section id="news" className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        <div className="mb-6 text-center lg:mb-8">
          <h2 className="mb-2 text-2xl font-bold text-[#0f5f46]">آخر الأخبار والإعلانات</h2>
          <p className="mx-auto max-w-3xl text-sm text-gray-600">
            ابقَ على اطلاع بآخر أخبارنا التي تقدم رؤى معمقة حول أهم القضايا في مجالاتنا.
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {news.map((n) => (
            <SwiperSlide key={n.id}>
              <article className="group relative overflow-hidden rounded-md">
                <div className="relative aspect-4/3 w-full">
                  <Image src={n.img} alt={n.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/35" />
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full p-4 text-right text-white">
                      <h3 className="line-clamp-2 text-base font-bold leading-7">
                        {n.title}
                      </h3>
                      <div className="mt-3 flex justify-end">
                        <Link
                          href={`#news-${n.id}`}
                          className="inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#0f5f46] shadow-sm backdrop-blur hover:bg-white"
                        >
                          قراءة المزيد
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
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
