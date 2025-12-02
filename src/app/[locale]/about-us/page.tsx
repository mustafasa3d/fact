import { Navbar } from "@/components/layout/navbar/Navbar";
import { Footer } from "@/components/layout/footer/Footer";

import { CustomAboutSection } from "../_components/about/CustomAboutSection";
import { VisionMission } from "../_components/about/VisionMission";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import OurFileds from "../_components/about/OurFileds";
import OurTeam from "../_components/about/OurTeam";
import { TrustedPartners } from "../_components/home/TrustedPartners";
import { CustomPageHeader } from "../_components/home/CustomPageHeader";
import { CustomPublicationCard } from "../_components/home/CustomPublicationCard";
import { Container } from "@/components/shared/Container";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("aboutUs");

  return {
    title: t("title"),
    description: t("description"),
  };
}

const items = [
  {
    id: 1,
    title: "text",
    desc: "text",
    img: "/assets/images/publications/pub-1.png",
  },
  {
    id: 2,
    title: "text",
    desc: "text",
    img: "/assets/images/publications/pub-2.jpg",
  },
  {
    id: 3,
    title: "text",
    desc: "text",
    img: "/assets/images/publications/pub-3.png",
  },
];

export default async function AboutUsPage() {
  const t = await getTranslations("aboutUs");
  return (
    <div className="min-h-screen">
      <CustomPageHeader title={t('heroTitle')} />
      <CustomAboutSection
        title={t("about.title")}
        paragraphs={[
          t("about.paragraph1"),
          t("about.paragraph2"),
          t("about.paragraph3"),
        ]}
        imgSrc1="/assets/images/about/bgf.png"
        imgSrc2="/assets/images/about/founder1.png"
      />
      <VisionMission />
      <OurFileds />
      <OurTeam />
      <TrustedPartners />
    </div>
  );
}

