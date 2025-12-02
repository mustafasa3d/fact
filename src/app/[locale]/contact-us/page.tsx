import { Container } from "@/components/shared/Container";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactForm from "../_components/contact/ContactForm";
import { CustomPageHeader } from "../_components/home/CustomPageHeader";

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
      <CustomPageHeader title={"تواصل معنا"} />

      <section className="py-12">
        <Container>
          <div className="flex flex-col gap-2 pt-10 pb-14">
            <h2 className="title">نودّ سماعكم</h2>
            <p className="paragraph">
              يسعدنا في مركز الحقائق للدراسات الاستراتيجية (FACT) استقبال
              استفساراتكم، طلبات التعاون، المقابلات الإعلامية، أو الحصول على
              معلومات إضافية حول الأبحاث والدراسات التي نقدمها. فريقنا جاهز للرد
              وتوفير الدعم اللازم في أسرع وقت.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Email Card */}
            <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-[#306E57] rounded-full flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M3 7L12 13L21 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-xl text-gray-700 font-medium">
                fact@email.com
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-[#306E57] rounded-full flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="white"
                  />
                  <circle
                    cx="12"
                    cy="9"
                    r="2.5"
                    stroke="#306E57"
                    strokeWidth="2"
                    fill="#306E57"
                  />
                </svg>
              </div>
              <p className="text-xl text-gray-700 font-medium">الأردن ، عمان</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-[#306E57] rounded-full flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 16.92V19.92C22 20.4696 21.5523 20.9173 21.0027 20.9201C18.4537 20.9452 15.9419 20.2419 13.7293 18.8795C11.6751 17.6276 9.95987 15.9124 8.70801 13.8582C7.3425 11.6396 6.63874 9.12015 6.66401 6.56403C6.66679 6.01463 7.11454 5.56688 7.66394 5.56688H10.6639C10.9296 5.56688 11.1683 5.74093 11.2609 6.00043C11.6189 7.01772 12.1313 7.9796 12.7839 8.85857C12.9461 9.08901 12.8977 9.40265 12.6778 9.57526L11.1878 10.7353C12.3723 12.8785 14.0454 14.5516 16.1886 15.7361L17.3486 14.2461C17.5212 14.0262 17.8349 13.9778 18.0653 14.14C18.9443 14.7926 19.9061 15.305 20.9234 15.663C21.1829 15.7556 21.357 15.9943 21.357 16.26L22 16.92Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
