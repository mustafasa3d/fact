import Image from "next/image";
import { CustomBtnLink } from "@/components/shared/CustomBtnLink";
import { Container } from "@/components/shared/Container";
import { getTranslations } from "next-intl/server";

export async function LatestBooks() {
  const t = await getTranslations("home.latestBooks");
  const tb = await getTranslations("home.books"); // للكتب

  const books = [
    {
      id: 1,
      title: tb("0.title"),
      author: tb("0.author"),
      img: "/assets/images/books/book.svg",
    },
    {
      id: 2,
      title: tb("1.title"),
      author: tb("1.author"),
      img: "/assets/images/books/book.svg",
    },
    {
      id: 3,
      title: tb("2.title"),
      author: tb("2.author"),
      img: "/assets/images/books/book.svg",
    },
  ];

  return (
    <section id="latest-books" className="bg-white py-12">
      <Container>
        <div className="mb-8 text-center lg:mb-10">
          <h2 className="title">{t("title")}</h2>
          <p className="paragraph mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books.map((b) => (
            <article
              key={b.id}
              className="group overflow-hidden rounded-md bg-white"
            >
              <div className="relative aspect-square lg:aspect-3/4 w-full">
                <Image
                  src={b.img}
                  alt={b.title}
                  width={600}
                  height={700}
                  className="w-full h-[calc(100%-50px)] object-cover ring-1 ring-gray-200 no-repeat"
                />
                <div className="absolute inset-x-0 bottom-0">
                  <div className="mx-3 -mb-1 rounded bg-primary px-4 py-3 text-white shadow-md">
                    <h3
                      className="text-center mb-3.5 line-clamp-2 text-base md:text-2xl font-bold"
                      title={b.title}
                    >
                      {b.title}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-xs opacity-90">
                      <span className="text-base md:text-xl">{b.author}</span>
                      <Image
                        src="/assets/images/latestversions/user.svg"
                        width={20}
                        height={22}
                        alt="Author"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <CustomBtnLink href="#all-books" className="px-6 py-2 shadow-sm">
            {t("viewAll")}
          </CustomBtnLink>
        </div>
      </Container>
    </section>
  );
}