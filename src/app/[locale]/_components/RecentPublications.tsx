import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    title: "اللاجئون الفلسطينيون 2025",
    desc:
      "تقرير يستعرض أبرز التحديات الإنسانية التي يواجهها اللاجئون الفلسطينيون، ويقترح حلولاً عملية تحقق الاستقرار والكرامة الإنسانية.",
    img: "/assets/images/publications/pub-1.svg",
  },
  {
    id: 2,
    title: "اللاجئون الفلسطينيون 2025",
    desc:
      "تقرير يستعرض أبرز التحديات الإنسانية التي يواجهها اللاجئون الفلسطينيون، ويقترح حلولاً عملية تحقق الاستقرار والكرامة الإنسانية.",
    img: "/assets/images/publications/pub-2.svg",
  },
  {
    id: 3,
    title: "اللاجئون الفلسطينيون 2025",
    desc:
      "تقرير يستعرض أبرز التحديات الإنسانية التي يواجهها اللاجئون الفلسطينيون، ويقترح حلولاً عملية تحقق الاستقرار والكرامة الإنسانية.",
    img: "/assets/images/publications/pub-3.svg",
  },
];

export function RecentPublications() {
  return (
    <section id="publications" className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        <div className="mb-8 text-center lg:mb-10">
          {/* <h2 className="mb-2 text-2xl font-bold text-primary">منشورات حديثة</h2> */}
          <h2 className="title">منشورات حديثة</h2>
          <p className="paragraph mx-auto max-w-[53rem]">
            اكتشف أحدث إصداراتنا التي تجمع بين التحليل العميق والرؤى الاستراتيجية حول القضايا الإقليمية والدولية
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, idx) => (
            <article
              key={p.id}
              className="group overflow-hidden bg-white shadow-sm ring-1 ring-gray-200 transition hover:shadow-md"
            >
              <div className="relative aspect-16/10 w-full">
                <Image src={p.img} alt={p.title} fill className="object-cover" />
                <span className="absolute right-3 top-3 rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white">
                  الأحدث
                </span>
              </div>
              <div className="p-4 text-right">
                <h3 className="mb-4 line-clamp-2 text-lg md:text-2xl font-extrabold text-primary" title={p.title}>
                  {p.title}
                </h3>
                <p className="mb-4 line-clamp-3 text-sm md:text-base text-gray-700" title={p.desc}>{p.desc}</p>
                <div className="flex items-center justify-between">
                  <div />
                  <Link
                    href={`#pub-${p.id}`}
                    className="inline-flex items-center gap-2 bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0d4f3a]"
                  >
                    قراءة المزيد
                    <Image src={'/asset/'}
                      src="/assets/images/latestarticle/eye.svg"
                      alt="FACT Center for Strategic Studies"
                      width={23}
                      height={23}
                      priority 
                      />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
