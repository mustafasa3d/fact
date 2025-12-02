import { Container } from "@/components/shared/Container";
import { CustomBtnLink } from "@/components/shared/CustomBtnLink";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ExploreLatestResearch() {
    const t = useTranslations("research.exploreResearch");

    return (
        <section className="relative pb-0 bg-white">
            {/* Background Split */}
            <div className="absolute z-0 h-[200px] bg-[#306e57] w-full bottom-0" />
            <Container className="relative z-10">
                <CustomBtnLink href="/contact" className="absolute bottom-24 right-0 bg-white text-[#306e57] hover:bg-gray-100 border-none shadow-lg ">
                    {t("button")}
                </CustomBtnLink>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Text Content - Right (Desktop) / Top (Mobile) */}
                    <div className="lg:col-span-5 order-1 lg:order-1 text-center lg:text-start mb-8 lg:mb-24">
                        <h2 className="text-3xl lg:text-[36px] font-bold text-[#1b4332] mb-4 leading-tight">
                            {t("title")}
                        </h2>
                        <p className="text-lg lg:text-2xl text-gray-600 mb-0 max-w-md lg:max-w-[450px] mx-auto lg:mx-0 line-clamp-6" title={t("description")}>
                            {t("description")}
                        </p>
                    </div>

                    {/* Image - Center */}
                    <div className="lg:col-span-7 order-2 lg:order-2 flex justify-center relative">
                        <div className="relative w-full max-w-full aspect-719/526">
                            {/* Placeholder Image - Replace with actual book/plant image */}
                            <Image
                                src="/assets/images/research/plant.svg"
                                alt="Research"
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}