"use client";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import EventCard from "./EventCard";
import { CustomBtnLink } from "@/components/shared/CustomBtnLink";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { useTranslations } from "next-intl";

export function EventsSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const t = useTranslations("home.eventsSlider");
  const te = useTranslations("home.events");

  const events = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    date: te(`${i}.date`),
    title: te(`${i}.title`),
  }));

  return (
    <section id="events" className="py-12">
      <Container>
        <div className="grid grid-cols-12">
          <div className="relative col-span-12 lg:col-span-4 items-center justify-center lg:w-[21.5rem] xl:w-[22rem] rtl:ml-3 ltr:mr-3 max-lg:mb-5">
            <h2 className="title max-w-52 absolute max-lg:start-0 lg:end-0 top-1/2 -translate-y-1/2">
              {t("title")}
            </h2>
            <Image
              className="lg:absolute start-0 aspect-square max-h-full"
              src="/assets/images/lastnews/calender-big.svg"
              width={200}
              height={100}
              alt="Calendar"
            />
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
              aria-label={t("prevButton")}
              onClick={() => swiperRef.current?.slidePrev()}
              className="rtl:rotate-180 grid h-9 w-9 place-items-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label={t("nextButton")}
              onClick={() => swiperRef.current?.slideNext()}
              className="rtl:rotate-180 grid h-9 w-9 place-items-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <CustomBtnLink Com={Link} href="#all-events" className="rounded-md px-5 py-2 shadow-sm">
            {t("viewAll")}
          </CustomBtnLink>
        </div>
      </Container>
    </section>
  );
}