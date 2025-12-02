import { Container } from "@/components/shared/Container";
import { CustomPageHeader } from "../_components/home/CustomPageHeader";
import type { Metadata } from "next";
import Image from "next/image";
import FieldCard from "../_components/about/FieldCard";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "الذاكرة المرورية",
    description: "تعرف على الذاكرة المرورية وأهميتها",
  };
}

export default async function TrafficMemoryPage() {
  const fieldsData: FieldData[] = [
    {
      number: 1,
      title: ["قضايا اللجوء", "والنزوح"],
      description: [
        "تتبع أنماط النزوح الجماعي داخل الدول ",
        "وخارجها، وتوثيق التحولات التي تطرأ على",
        "مسارات اللجوء.",
      ],
    },
    {
      number: 2,
      title: ["الصراع العربي", "الإسرائيلي"],
      description: [
        "تحليل نقاط العبور والمعابر الرئيسية، وتأثير ",
        "سياسات الحدود والهجرة على التدفقات",
        "البشرية",
      ],
    },
    {
      number: 3,
      title: ["الصراعات والأزمات", "الدولية"],
      description: [
        "رصد فرص العودة الطوعية، التحديات القانونية، وبرامج إعادة التوطين الدولية.",
      ],
    },
    {
      number: 4,
      title: ["الصراعات والأزمات", "الدولية"],
      description: [
        "دراسة حركة العمالة والمهاجرين لأسباب اقتصادية، خاصة من الدول التي تشهد ضغوطًا اقتصادية أو سياسية.",
      ],
    },
    {
      number: 5,
      title: ["الصراعات والأزمات", "الدولية"],
      description: [
        "تحديثات مستمرة للبيانات، مع تقارير شهرية وفصلية توضّح أبرز التطورات.",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <CustomPageHeader title="الذاكرة المرورية" />

      {/* Main Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="mx-auto">
            {/* Title */}
            <h2 className="title">ما هي الذاكرة المرورية؟</h2>

            {/* First Paragraph */}
            <div className="prose prose-lg mb-8">
              <p className="paragraph">
                الذاكرة المرورية هي قاعدة معلومات تحليلية يعمل مركز FACT على
                بنائها ورصدها بشكل مستمر بهدف توثيق وتتبع{" "}
                <span className="font-semibold">
                  مسارات حركة الأشخاص، النزوح، اللجوء، والتنقلات الجماعية
                </span>{" "}
                عبر المناطق والدول، خاصة في البيئات التي تشهد أزمات إنسانية أو
                صراعات.
              </p>
            </div>

            {/* Image */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-8 overflow-hidden">
              <Image
                src="/assets/images/hero/hero-bg-placeholder.jpg"
                alt="الذاكرة المرورية"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Second Paragraph */}
            <div className="prose prose-lg">
              <p className="paragraph">
                تساعد هذه الذاكرة على فهم الاتجاهات الرئيسية في تحركات السكان،
                تقييم المخاطر، ورسم صورة دقيقة للتغيرات الميدانية التي تؤثر على
                الأمن والاستقرار.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <h2 className="title">ماذا تشمل الذاكرة المرورية؟</h2>
          <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-x-28">
            {fieldsData.map((field, index) => (
              <FieldCard key={index} data={field} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
