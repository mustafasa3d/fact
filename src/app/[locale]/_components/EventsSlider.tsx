"use client";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#0f5f46]">أهم الفعاليات</h2>
        </div>

        <Swiper
          modules={[Navigation]}
          onSwiper={(s) => (swiperRef.current = s)}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-2"
        >
          {events.map((ev) => (
            <SwiperSlide key={ev.id}>
              <EventCard date={ev.date} title={ev.title} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 flex items-center gap-3">
          <a
            href="#all-events"
            className="rounded-md bg-[#0f5f46] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0d4f3a]"
          >
            عرض الكل
          </a>
          <div className="ml-1 flex items-center gap-2">
            <button
              type="button"
              aria-label="السابق"
              onClick={() => swiperRef.current?.slidePrev()}
              className="grid h-9 w-9 place-items-center rounded-full border border-[#0f5f46] text-[#0f5f46] transition-colors hover:bg-[#0f5f46] hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="التالي"
              onClick={() => swiperRef.current?.slideNext()}
              className="grid h-9 w-9 place-items-center rounded-full border border-[#0f5f46] text-[#0f5f46] transition-colors hover:bg-[#0f5f46] hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

type EventCardProps = {
  date: string;
  title: string;
};

function EventCard({ date, title }: EventCardProps) {
  return (
    <article className="rounded-md bg-[#0f5f46] p-5 text-white shadow-sm">
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M7 2v3M17 2v3M3 8h18M5 12h14M5 16h14M4 5h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{date}</span>
      </div>
      <h3 className="text-base font-bold leading-7">{title}</h3>
    </article>
  );
}
