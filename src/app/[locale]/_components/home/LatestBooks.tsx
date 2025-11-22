import Image from "next/image";
import { CustomBtnLink } from "@/components/shared/CustomBtnLink";

const books = [
  {
    id: 1,
    title: "تعليم الفلسطينيين بين الاحتلال والمقاومة",
    author: "محمد أحمد صيام",
    img: "/assets/images/books/book-1.svg",
  },
  {
    id: 2,
    title: "تعليم الفلسطينيين بين الاحتلال والمقاومة",
    author: "محمد أحمد صيام",
    img: "/assets/images/books/book-2.svg",
  },
  {
    id: 3,
    title: "تعليم الفلسطينيين بين الاحتلال والمقاومة",
    author: "محمد أحمد صيام",
    img: "/assets/images/books/book-3.svg",
  },
];

export function LatestBooks() {
  return (
    <section id="latest-books" className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        <div className="mb-8 text-center lg:mb-10">
          <h2 className="title">إصداراتنا الأخيرة</h2>
          <p className="paragraph mx-auto">
            ابقَ على اطلاع بآخر إصداراتنا التي تقدم رؤى معمقة حول أهم القضايا في مجالنا.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books.map((b) => (
            <article key={b.id} className="group overflow-hidden rounded-md bg-white">
              <div className="relative aspect-square lg:aspect-3/4 w-full">
                <Image src={b.img} alt={b.title} width={600} height={700} className="w-full h-[calc(100%-50px)] object-cover ring-1 ring-gray-200" />
                <div className="absolute inset-x-0 bottom-0">
                  <div className="mx-3 -mb-1 rounded bg-primary px-4 py-3 text-white shadow-md">
                    <h3 className="text-center mb-3.5 line-clamp-2 text-base md:text-2xl font-bold" title={b.title}>{b.title}</h3>
                    <div className="flex items-center justify-center gap-2 text-xs opacity-90">
                      <span className="text-base md:text-xl">{b.author}</span>
                      <Image src={"/assets/images/latestversions/user.svg"} width={20} height={22} alt="user" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <CustomBtnLink href="#all-books" className="px-6 py-2 shadow-sm">
            عرض الكل
          </CustomBtnLink>
        </div>
      </div>
    </section>
  );
}
