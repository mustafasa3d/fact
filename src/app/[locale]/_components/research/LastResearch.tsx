import { Container } from '@/components/shared/Container'
import React from 'react'
import { CustomPublicationCard } from '../home/CustomPublicationCard'
import { CustomBtnLink } from '@/components/shared/CustomBtnLink';

function LastResearch() {

    const items = [
        {
            id: 1,
            title: "مستقبل الأونروا بين الضغوط الدولية واحتياجات اللاجئين",
            desc: "تحليل معمّق للضغوط السياسية والمالية التي تواجه الأونروا، وتأثيرها المباشر على خدمات اللاجئين الفلسطينيين في مناطق العمليات.",
            img: "/assets/images/publications/pub-1.png",
        },
        {
            id: 2,
            title: "مستقبل الأونروا بين الضغوط الدولية واحتياجات اللاجئين",
            desc: "تحليل معمّق للضغوط السياسية والمالية التي تواجه الأونروا، وتأثيرها المباشر على خدمات اللاجئين الفلسطينيين في مناطق العمليات.",
            img: "/assets/images/publications/pub-2.jpg",
        },
        {
            id: 3,
            title: "مستقبل الأونروا بين الضغوط الدولية واحتياجات اللاجئين",
            desc: "تحليل معمّق للضغوط السياسية والمالية التي تواجه الأونروا، وتأثيرها المباشر على خدمات اللاجئين الفلسطينيين في مناطق العمليات.",
            img: "/assets/images/publications/pub-3.png",
        },
    ];

    return (
        <section className='py-8 lg:py-12'>
            <Container>
                <div className='text-center mb-10'>
                    <h2 className='title'>اخر الأبحاث والدراسات</h2>
                    <p className='paragraph'>تحليلات معمّقة ورؤى استراتيجية مبنية على الأدلة.</p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:gap-14 md:grid-cols-2">
                    {items.map((item) => (
                        <CustomPublicationCard key={item.id} {...item} readMoreText={"قراءة المزيد"} latestBadgeText={"الاحدث"} iconSrc="/assets/images/research/file.svg" noLabel />
                    ))}
                </div>

                <div className="flex justify-center">
                    <CustomBtnLink className='mt-7 border-2 border-primary/50 bg-transparent text-primary hover:text-white' type="button">المزيد</CustomBtnLink>
                </div>
            </Container>
        </section>
    )
}

export default LastResearch