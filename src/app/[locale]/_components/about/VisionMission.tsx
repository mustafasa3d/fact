import { Container } from "@/components/shared/Container";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

// Target Icon Component
function TargetIcon() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-6"
    >
      <circle cx="50" cy="50" r="45" stroke="#306E57" strokeWidth="3" fill="none" />
      <circle cx="50" cy="50" r="32" stroke="#306E57" strokeWidth="3" fill="none" />
      <circle cx="50" cy="50" r="19" stroke="#306E57" strokeWidth="3" fill="none" />
      <circle cx="50" cy="50" r="8" fill="#306E57" />
      <line x1="50" y1="5" x2="50" y2="20" stroke="#306E57" strokeWidth="3" />
      <line x1="50" y1="80" x2="50" y2="95" stroke="#306E57" strokeWidth="3" />
      <line x1="5" y1="50" x2="20" y2="50" stroke="#306E57" strokeWidth="3" />
      <line x1="80" y1="50" x2="95" y2="50" stroke="#306E57" strokeWidth="3" />
      <path
        d="M 85 15 L 50 50"
        stroke="#306E57"
        strokeWidth="3"
        fill="none"
      />
      <polygon points="85,5 95,15 85,25" fill="#306E57" />
    </svg>
  );
}

// Bulb Icon Component
function BulbIcon() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-6"
    >
      <circle cx="50" cy="35" r="20" stroke="#306E57" strokeWidth="3" fill="none" />
      <path
        d="M 35 55 Q 35 65, 40 70 L 60 70 Q 65 65, 65 55"
        stroke="#306E57"
        strokeWidth="3"
        fill="none"
      />
      <rect x="42" y="70" width="16" height="8" fill="#306E57" />
      <line x1="42" y1="78" x2="58" y2="78" stroke="#306E57" strokeWidth="4" />
      <line x1="30" y1="20" x2="20" y2="10" stroke="#306E57" strokeWidth="3" />
      <line x1="70" y1="20" x2="80" y2="10" stroke="#306E57" strokeWidth="3" />
      <line x1="20" y1="35" x2="10" y2="35" stroke="#306E57" strokeWidth="3" />
      <line x1="80" y1="35" x2="90" y2="35" stroke="#306E57" strokeWidth="3" />
      <line x1="25" y1="50" x2="15" y2="55" stroke="#306E57" strokeWidth="3" />
      <line x1="75" y1="50" x2="85" y2="55" stroke="#306E57" strokeWidth="3" />
    </svg>
  );
}

export async function VisionMission() {
  const tVision = await getTranslations("aboutUs.vision");
  const tMission = await getTranslations("aboutUs.mission");

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Mission Section */}
          <div className="text-center flex flex-col items-center">
            <Image className="mb-6" src="/assets/images/about/idea.svg" alt="idea" width={100} height={100} />
            <h2 className="text-3xl lg:text-[36px] font-bold text-[#1b4332] mb-6 leading-normal">
              {tMission("title")}
            </h2>
            <p className="text-lg lg:text-[24px] lg:leading-[1.4] text-[#6a6a6a] max-w-[499px] mx-auto">
              {tMission("description")}
            </p>
          </div>

          {/* Vision Section */}
          <div className="text-center flex flex-col items-center relative after:content-[''] after:hidden lg:after:block after:absolute after:top-1/2 ltr:after:left-[-10px] rtl:after:right-[-10px] after:w-[2px] after:h-[100px] after:bg-gray-200">
            <Image className="mb-6" src="/assets/images/about/vision.svg" alt="idea" width={100} height={100} />
            <h2 className="text-3xl lg:text-[36px] font-bold text-[#1b4332] mb-6 leading-normal">
              {tVision("title")}
            </h2>
            <p className="text-lg lg:text-[24px] lg:leading-[1.4] text-[#6a6a6a] max-w-[499px] mx-auto">
              {tVision("description")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
