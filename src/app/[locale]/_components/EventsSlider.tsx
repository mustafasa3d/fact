"use client";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import EventCard from "./EventCard";
import Link from "next/link";
import Image from "next/image";

const events = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  date: "3 نيسان 2026",
  title: "المؤتمر الدولي حول قضايا اللاجئين والنزاعات",
}));

export function EventsSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="events" className="bg-[#f7f7f7] py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        <div className="grid grid-cols-12">
          <div className="relative col-span-12 lg:col-span-4 items-center justify-center lg:w-[21.5rem] xl:w-[22rem] rtl:ml-3 ltr:mr-3 max-lg:mb-5">
            <h2 className="title max-w-52 absolute max-lg:start-0 lg:end-0 top-1/2 -translate-y-1/2">أهم الفعاليات</h2>
            <Image className="lg:absolute start-0 aspect-square max-h-full" src={"/assets/images/lastnews/calender-big.svg"} width={200} height={100} alt="calender" />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <Swiper
              modules={[Navigation]}
              onSwiper={(s) => (swiperRef.current = s)}
              spaceBetween={16}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              className="pb-2"
            >
              {events.map((ev) => (
                <SwiperSlide key={ev.id}>
                  <EventCard date={ev.date} title={ev.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <div className="ml-1 flex items-center gap-2">
            <button
              type="button"
              aria-label="السابق"
              onClick={() => swiperRef.current?.slidePrev()}
              className="rtl:rotate-180 grid h-9 w-9 place-items-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M15 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="التالي"
              onClick={() => swiperRef.current?.slideNext()}
              className="rtl:rotate-180 grid h-9 w-9 place-items-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <Link
            href="#all-events"
            className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0d4f3a]"
          >
            عرض الكل
          </Link>
        </div>
      </div>
    </section>
  );
}
