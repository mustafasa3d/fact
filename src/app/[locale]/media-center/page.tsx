import { CustomBtnLink } from "@/components/shared/CustomBtnLink";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CustomAboutSection } from "../_components/about/CustomAboutSection";
import { CustomPageHeader } from "../_components/home/CustomPageHeader";
import LastResearch from "../_components/research/LastResearch";
import ResearchImportance from "../_components/research/ResearchImportance";
import ExploreLatestResearch from "../_components/research/ExploreLatestResearch";
import { Container } from "@/components/shared/Container";
import { NewsCard } from "../_components/home/NewsCard";
import EventCard from "../_components/home/EventCard";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("aboutUs");

  return {
    title: t("title"),
    description: t("description"),
  };
}

const news = [
  { id: 1, title: "title", img: "/assets/images/news/new1.jpg" },
  { id: 2, title: "title", img: "/assets/images/news/new2.jpg" },
  { id: 3, title: "title", img: "/assets/images/news/new1.jpg" },
  { id: 4, title: "title", img: "/assets/images/news/new2.jpg" },
  { id: 5, title: "title", img: "/assets/images/news/new1.jpg" },
  { id: 6, title: "title", img: "/assets/images/news/new2.jpg" },
];

export default async function AboutUsPage() {
  const t = await getTranslations("research");

  const events = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    date: "date",
    title: "title",
  }));

  return (
    <div className="min-h-screen">
      <CustomPageHeader title={"المركز الإعلامي"} />

      <CustomAboutSection
        title={"نبذة عن المركز الإعلامي"}
        paragraphs={[
          "يُعدّ المركز الإعلامي في FACT البوابة الرئيسية لنشر الأخبار، البيانات الصحفية، التغطيات، والتحديثات المرتبطة بأنشطة المركز وأبحاثه. نهدف من خلال هذا القسم إلى تعزيز التواصل مع وسائل الإعلام، الباحثين، وصنّاع القرار عبر محتوى موثوق، سريع، ودقيق يعكس رسالتنا البحثية.",
        ]}
        imgSrc1="/assets/images/about/bgf.png"
      >
        <CustomBtnLink type="button">تواصل معنا</CustomBtnLink>
      </CustomAboutSection>

      <section className="py-12">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-0 pt-10 pb-14">
            <div>
              <h2 className="title">آخر الأخبار والإعلانات</h2>
              <p className="lg:text-2xl">
                ابق على اطلاع بآخر أخبارنا التي تقدم رؤى معمّقة{" "}
              </p>
            </div>
            <div className="flex flex-row items-center gap-0 max-w-[710px]">
              {/* Search Input */}
              <input
                type="text"
                placeholder="ابحث في الاخبار و الاعلانات"
                className="w-full lg:w-[400px] h-[66px] px-4 border border-[#CBCBCB] bg-white text-right placeholder:text-[#AFAFAF] focus:outline-none focus:border-[#306E57] transition-colors"
                dir="rtl"
              />
              {/* Search Button */}
              <button
                className="w-[105px] h-[66px] bg-[#306E57] border border-[#306E57] hover:bg-[#275847] transition-colors flex items-center justify-center"
                aria-label="بحث"
              >
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 6.5C6.5 6.5 6.5 32.5 32.456 32.5M32.456 32.5L25.5 25.5M32.456 32.5L25.5 39.5"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="rotate(-45 19.5 19.5)"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r="9.5"
                    stroke="white"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </button>

              {/* Filter Button */}
              <button
                className="w-[78px] h-[66px] border-none bg-transparent hover:opacity-80 transition-opacity flex items-center justify-center"
                aria-label="فلترة"
              >
                <svg
                  width="78"
                  height="78"
                  viewBox="0 0 78 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.9375 10.4423L8.9375 67.561L69.0625 67.561L69.0625 10.4423L49.5625 32.4985L49.5625 61.0673L28.4375 61.0673L28.4375 32.4985L8.9375 10.4423Z"
                    stroke="#306E57"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((n) => (
              <div key={n.id} className="">
                <NewsCard
                  id={n.id}
                  title={n.title}
                  img={n.img}
                  readMoreText={t("readMore")}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <CustomBtnLink
              className="border-2 border-primary/50 bg-transparent text-primary hover:text-white"
              type="button"
            >
              استعراض جميع الاخبار
            </CustomBtnLink>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="mb-5 lg:mb-11">
            <h2 className="title">اهم الفعاليات</h2>
            <p className="lg:text-2xl">ابق على اطلاع بآخر فعاليتنا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {events.map((ev) => (
              <EventCard date={ev.date} title={ev.title} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="mb-5 lg:mb-11">
            <h2 className="title">مكتبة الصور والفيديو</h2>
            <p className="lg:text-2xl">
              لحظات ميدانية وأحداث بحثية من أعمال FACT.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 min-h-11 max-h-[300px]">
              <Image
                className="h-full object-cover"
                width={1000}
                height={1000}
                src="/assets/images/publications/pub-1.png"
                alt="galary"
              />
            </div>
            <div className="col-span-2 min-h-11 max-h-[300px]">
              <Image
                className="h-full object-cover"
                width={1000}
                height={1000}
                src="/assets/images/publications/pub-1.png"
                alt="galary"
              />
            </div>
            <div className="col-span-1 min-h-11 max-h-[300px]">
              <Image
                className="h-full object-cover"
                width={1000}
                height={1000}
                src="/assets/images/publications/pub-1.png"
                alt="galary"
              />
            </div>
            <div className="col-span-1 min-h-11 max-h-[300px]">
              <Image
                className="h-full object-cover"
                width={1000}
                height={1000}
                src="/assets/images/publications/pub-1.png"
                alt="galary"
              />
            </div>
            <div className="col-span-1 min-h-11 max-h-[300px]">
              <Image
                className="h-full object-cover"
                width={1000}
                height={1000}
                src="/assets/images/publications/pub-1.png"
                alt="galary"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
