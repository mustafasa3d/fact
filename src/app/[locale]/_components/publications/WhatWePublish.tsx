import { Container } from "@/components/shared/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function WhatWePublish() {
    const t = useTranslations("research.publicationsPage.whatWePublish");

    const items = [
        { id: 1, title: t("items.1.title"), desc: t("items.1.desc") },
        { id: 2, title: t("items.2.title"), desc: t("items.2.desc") },
        { id: 3, title: t("items.3.title"), desc: t("items.3.desc") },
        { id: 4, title: t("items.4.title"), desc: t("items.4.desc") },
    ];

    return (
        <section className="py-16 lg:py-24">
            <Container>
                <p className="mb-16 text-center paragraph">يقدّم مركز الحقائق للدراسات الاستراتيجية (FACT) مجموعة متنوعة من المنشورات البحثية التي تسلط الضوء على أهم القضايا المتعلقة باللجوء، الصراعات الدولية، والتحولات الجيوسياسية. تهدف منشوراتنا إلى توفير معرفة موثوقة تساعد صُنّاع القرار، الأكاديميين، والإعلام على فهم أعمق للتحديات الإقليمية والدولية.</p>
                <div className="text-center mb-12 lg:mb-16">
                    {/* <h2 className="text-3xl lg:text-[40px] font-bold text-[#1b4332] mb-4"> */}
                    <h2 className="title mb-4">
                        {t("title")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center text-center group px-2 py-6 hover:bg-[#F5F7F6] transition-colors duration-300"
                        >
                            {/* Icon Container */}
                            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[#E4EAE8] flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300">
                                <Image src="/assets/images/research/file.svg" alt={item.title} width={32} height={32} className="w-8 h-8 lg:w-12 lg:h-12 text-[#306e57]" />
                            </div>

                            {/* Text */}
                            <h3 className="text-xl lg:text-[1.75rem] font-bold text-[#1b4332] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-base lg:text-xl text-[#527a6b] leading-relaxed">
                                ملخصات سريعة تلخّص اتجاهات الأحداث وتقدّم قراءة مختصرة لأبرز التطورات.
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
