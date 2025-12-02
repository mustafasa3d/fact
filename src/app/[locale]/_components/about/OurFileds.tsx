import { Container } from "@/components/shared/Container";
import FieldCard from "./FieldCard";

interface FieldData {
    number: number;
    title: string[];
    description: string[];
}

const fieldsData: FieldData[] = [
    {
        number: 1,
        title: ["قضايا اللجوء", "والنزوح"],
        description: [
            "دراسة أوضاع اللاجئين الفلسطينيين",
            "تقييم دور الأونروا وتحدياتها",
            "تحليل السياسات الدولية تجاه اللجوء والهجرة",
        ],
    },
    {
        number: 2,
        title: ["الصراع العربي", "الإسرائيلي"],
        description: [
            "تأثيراته الإقليمية والدولية",
            "المسارات القانونية والحقوقية",
            "التغيرات الجيوسياسية في المنطقة",
        ],
    },
    {
        number: 3,
        title: ["الصراعات والأزمات", "الدولية"],
        description: [
            "تحليل جذور النزاعات",
            "تقييم استراتيجيات بناء السلام",
            "تقديم حلول وسياسات قائمة على الأدلة",
        ],
    },
];


export default function OurFileds() {
    return (
        <section className="py-8 lg:py-12 lg:pt-24">
            <Container>
                <h2 className="title text-center mb-5">
                    مجالات اهتمامنا
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {fieldsData.map((field, index) => (
                        <FieldCard key={index} data={field} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
