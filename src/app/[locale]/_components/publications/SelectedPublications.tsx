import { Container } from '@/components/shared/Container'
import React from 'react'
import { CustomPublicationCard } from '../home/CustomPublicationCard'
import { CustomBtnLink } from '@/components/shared/CustomBtnLink';
import { useTranslations } from 'next-intl';

export default function SelectedPublications() {
    const t = useTranslations("research.publicationsPage.selectedPublications");

    // Using dummy data for now, similar to LastResearch
    const items = [
        {
            id: 1,
            title: "اللاجئون الفلسطينيون 2025",
            desc: "تحليل معمّق للضغوط السياسية والمالية التي تواجه الأونروا، وتأثيرها المباشر على خدمات اللاجئين الفلسطينيين في مناطق العمليات.",
            img: "/assets/images/publications/pub-1.png",
        },
        {
            id: 2,
            title: "اللاجئون الفلسطينيون 2025",
            desc: "تحليل معمّق للضغوط السياسية والمالية التي تواجه الأونروا، وتأثيرها المباشر على خدمات اللاجئين الفلسطينيين في مناطق العمليات.",
            img: "/assets/images/publications/pub-2.jpg",
        },
        {
            id: 3,
            title: "اللاجئون الفلسطينيون 2025",
            desc: "تحليل معمّق للضغوط السياسية والمالية التي تواجه الأونروا، وتأثيرها المباشر على خدمات اللاجئين الفلسطينيين في مناطق العمليات.",
            img: "/assets/images/publications/pub-3.png",
        },
    ];

    return (
        <section className='py-12 bg-[#F5F7F6]'>
            <Container>
                <div className='text-center mb-10'>
                    <h2 className='title'>{t('title')}</h2>
                    <p className='paragraph'>{t('description')}</p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <CustomPublicationCard
                            key={item.id}
                            {...item}
                            readMoreText={t('readMore')}
                            latestBadgeText="الاحدث"
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <CustomBtnLink className='border-2 border-primary/50 bg-transparent text-primary hover:text-white' type="button">
                        استعراض جميع المنشورات
                    </CustomBtnLink>
                </div>
            </Container>
        </section>
    )
}
