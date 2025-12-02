import { BookCard } from "@/components/cards/BookCard";
import { Container } from "@/components/shared/Container"
import { getTranslations } from "next-intl/server";

async function OurTeam() {
    const t = await getTranslations("home.latestBooks");
    const tb = await getTranslations("home.books"); // للكتب

    const books = [
        {
            id: 1,
            title: "محمد أحمد صيام",
            author: "استاذ دكتور",
            img: "/assets/images/books/person.svg",
        },
        {
            id: 2,
            title: "محمد أحمد صيام",
            author: "استاذ دكتور",
            img: "/assets/images/books/person.svg",
        },
        {
            id: 3,
            title: "محمد أحمد صيام",
            author: "استاذ دكتور",
            img: "/assets/images/books/person.svg",
        },
    ];

    return (
        <section className="py-8 lg:py-12 text-center">
            <Container>
                <h2 className="title">فريقنا</h2>
                <p className="paragraph mb-10 max-w-[1070px] mx-auto text-[#6A6A6A] lg:text-[24px]">يضم المركز نخبة من الباحثين، الأكاديميين، وخبراء السياسات العامة من مختلف الدول، يعملون بروح مشتركة لتحقيق فهم أعمق للتحديات العالمية المعاصرة، مع التزام بالموضوعية والاستقلالية.</p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {books.map((b) => (
                        <BookCard key={b.id} from="ourTeam" title={b.title} author={b.author} img={b.img} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default OurTeam