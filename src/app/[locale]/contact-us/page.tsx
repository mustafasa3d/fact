import { Container } from "@/components/shared/Container";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactForm from "../_components/contact/ContactForm";
import { CustomPageHeader } from "../_components/home/CustomPageHeader";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("aboutUs");

  return {
    title: t("title"),
    description: t("description"),
  };
}

const news = [
  { id: 1, title: "title", img: "/assets/images/news/new1.jpg" },
  { id: 2, title: "title", img: "/assets/images/news/new2.jpg" },
  { id: 3, title: "title", img: "/assets/images/news/new1.jpg" },
  { id: 4, title: "title", img: "/assets/images/news/new2.jpg" },
  { id: 5, title: "title", img: "/assets/images/news/new1.jpg" },
  { id: 6, title: "title", img: "/assets/images/news/new2.jpg" },
];

export default async function AboutUsPage() {
  const t = await getTranslations("research");

  const events = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    date: "date",
    title: "title",
  }));

  return (
    <div className="min-h-screen">
      <div
        className="relative pt-10 flex items-center bg-white"
      >
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-white/50" /> */}

        <Container>
          {/* Content */}
          <div className="relative flex flex-col md:flex-row items-center justify-between z-10">
            <h1 className="title flex-1 text-4xl md:text-5xl lg:text-[3.5rem] font-bold">
              تواصل معنا
            </h1>
            <div className="flex-1 relative">
              <Image className="w-full h-full object-contain" src="/assets/images/contact/flagf.svg" alt="phone" width={70} height={70} />
              <Image className="absolute top-0 right-0 w-full h-full object-contain" src="/assets/images/contact/phone2.svg" alt="phone" width={70} height={70} />
            </div>
          </div>
        </Container>
      </div>

      <section className="py-8 lg:py-12">
        <Container>
          <div className="flex flex-col gap-2 pt-10 pb-14">
            <h2 className="title text-[#676767]">نودّ سماعكم</h2>
            <p className="paragraph">
              يسعدنا في مركز الحقائق للدراسات الاستراتيجية (FACT) استقبال
              استفساراتكم، طلبات التعاون، المقابلات الإعلامية، أو الحصول على
              معلومات إضافية حول الأبحاث والدراسات التي نقدمها. فريقنا جاهز للرد
              وتوفير الدعم اللازم في أسرع وقت.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-8 lg:py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto lg:gap-10 px-10">
            {/* Email Card */}
            <div className="bg-white shadow-sm p-8 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  className="w-10 h-10 lg:w-[70px] lg:h-[70px]"
                  src="/assets/images/contact/email.svg"
                  alt="Email"
                  width={70}
                  height={70}
                />
              </div>
              <p className="text-xl text-gray-700 font-medium">
                fact@email.com
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-white shadow-sm p-8 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  className="w-10 h-10 lg:w-[70px] lg:h-[70px]"
                  src="/assets/images/contact/location.svg"
                  alt="Email"
                  width={70}
                  height={70}
                />
              </div>
              <p className="text-xl text-gray-700 font-medium">الأردن ، عمان</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white shadow-sm p-8 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  className="w-10 h-10 lg:w-[70px] lg:h-[70px]"
                  src="/assets/images/contact/phone.svg"
                  alt="Email"
                  width={70}
                  height={70}
                />
              </div>
              <p className="text-xl text-gray-700 font-medium">920021500</p>
            </div>
          </div>

          <ContactForm />

          {/* Map Section */}
          <div className="mt-16">
            <div className="max-w-4xl mx-auto h-[500px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0891287663496!2d55.27493607605467!3d25.09727363545868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b8b4e4e4e4b%3A0x4e4e4e4e4e4e4e4e!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
