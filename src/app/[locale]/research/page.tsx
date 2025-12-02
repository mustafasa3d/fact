
import { CustomBtnLink } from "@/components/shared/CustomBtnLink";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CustomAboutSection } from "../_components/about/CustomAboutSection";
import { CustomPageHeader } from "../_components/home/CustomPageHeader";
import LastResearch from "../_components/research/LastResearch";
import ResearchImportance from "../_components/research/ResearchImportance";
import ExploreLatestResearch from "../_components/research/ExploreLatestResearch";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("aboutUs");

  return {
    title: t("title"),
    description: t("description"),
  };
}


export default async function AboutUsPage() {
  const t = await getTranslations("research");
  return (
    <div className="min-h-screen">
      <CustomPageHeader title={t('heroTitle')} />

      <CustomAboutSection
        title={t("about.title")}
        paragraphs={[
          t("about.paragraph1"),
        ]}
        imgSrc1="/assets/images/about/bgf.png"
      >
        <CustomBtnLink type="button">تواصل معنا</CustomBtnLink>
      </CustomAboutSection>

      <LastResearch />

      <ResearchImportance />

      <ExploreLatestResearch />
    </div>
  );
}
