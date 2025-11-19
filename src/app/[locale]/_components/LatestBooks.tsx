import Image from "next/image";
import Link from "next/link";

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
          <h2 className="mb-2 text-2xl font-bold text-primary">إصداراتنا الأخيرة</h2>
          <p className="mx-auto max-w-3xl text-sm text-gray-600">
            ابقَ على اطلاع بآخر إصداراتنا التي تقدم رؤى معمقة حول أهم القضايا في مجالنا.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books.map((b) => (
            <article key={b.id} className="group overflow-hidden rounded-md bg-white ring-1 ring-gray-200">
              <div className="relative aspect-3/4 w-full">
                <Image src={b.img} alt={b.title} fill className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 translate-y-1">
                  <div className="mx-3 -mb-1 rounded bg-primary px-4 py-3 text-white shadow-md">
                    <h3 className="mb-1 line-clamp-2 text-base font-bold">{b.title}</h3>
                    <div className="flex items-center gap-2 text-xs opacity-90">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-7 9a7 7 0 1 1 14 0v1H5v-1Z" fill="currentColor" />
                      </svg>
                      <span>{b.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="#all-books" className="rounded-md bg-primary px-6 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0d4f3a]">
            عرض الكل
          </Link>
        </div>
      </div>
    </section>
  );
}
