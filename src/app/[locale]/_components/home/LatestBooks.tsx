import { CustomBtnLink } from "@/components/shared/CustomBtnLink";
import { Container } from "@/components/shared/Container";
import { BookCard } from "@/components/cards/BookCard";
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
            <BookCard key={b.id} title={b.title} author={b.author} img={b.img} />
          ))}
        </div>

        <div className="mt-18 flex justify-center">
          <CustomBtnLink href="#all-books" className="px-7 py-2 shadow-sm xl:px-9 xl:font-bold xl:text-xl">
            {t("viewAll")}
          </CustomBtnLink>
        </div>
      </Container>
    </section>
  );
}