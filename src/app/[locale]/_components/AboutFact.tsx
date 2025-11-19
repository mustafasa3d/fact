import Image from "next/image";

export function AboutFact() {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-0">
        <div className="mb-8 flex items-center justify-center">
          <Image
            src="/assets/images/fact-logo.svg"
            alt="FACT Center for Strategic Studies"
            width={240}
            height={120}
            priority
          />
        </div>

        <div className="mx-auto max-w-3xl text-center lg:text-right">
          <h2 className="mb-4 text-2xl font-bold text-[#0f5f46]">من نحن</h2>
          <p className="leading-8 text-gray-700">
            مركز الحقائق للدراسات الاستراتيجية (FACT) رؤية للتفكير، حلول للمستقبل.
            تأسس مطلع 2025 في لندن برئاسة الوزير الأردني الأسبق وجيه عزايزة، ويضم نخبة من الباحثين والخبراء.
            يركز على القضايا الاستراتيجية المرتبطة باللجوء، وخاصة قضية اللاجئين الفلسطينيين، والأونروا،
            كما يجري أبحاثًا معمقة حول الصراعات والأزمات الدولية، مع اهتمام خاص بالصراع العربي الإسرائيلي،
            والأبعاد القانونية والحقوقية لأزمة اللاجئين واستراتيجيات حل النزاعات وبناء السلام.
          </p>
        </div>
      </div>
    </section>
  );
}
