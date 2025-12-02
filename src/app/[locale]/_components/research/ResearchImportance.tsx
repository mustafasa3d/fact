import { Container } from "@/components/shared/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";


export default function ResearchImportance() {
    const t = useTranslations("research.researchImportance");

    const items = [
        { id: 1, text: t("items.1") },
        { id: 2, text: t("items.2") },
        { id: 3, text: t("items.3") },
        { id: 4, text: t("items.1") },
        { id: 5, text: t("items.2") },
    ];

    return (
        <section className="py-16 lg:py-24 bg-white">
            <Container>
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl lg:text-[40px] font-bold text-[#1b4332] mb-4">
                        {t("title")}
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-x-8 lg:gap-x-20 gap-y-8 lg:gap-y-20">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Icon Container */}
                            <div className="w-24 h-24 rounded-full bg-[#E4EAE8] flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300">
                                <Image src="/assets/images/research/database.svg" alt="Database" width={40} height={40} className="w-10 h-10 text-[#306e57]" />
                            </div>

                            {/* Text */}
                            <p className="text-lg lg:text-2xl font-medium text-[#306e57] leading-relaxed max-w-[262px]">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}