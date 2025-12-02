import { useTranslations } from "next-intl";
import { CustomPageHeader } from "../_components/home/CustomPageHeader";
import WhatWePublish from "../_components/publications/WhatWePublish";
import SelectedPublications from "../_components/publications/SelectedPublications";

export default function PublicationsPage() {
    const t = useTranslations("research.publicationsPage");

    return (
        <main>
            <CustomPageHeader
                title={t("heroTitle")}
            // Using default background or we can specify one if available
            // bgImage="/assets/images/research/hero-bg.jpg" 
            />
            <WhatWePublish />
            <SelectedPublications />
        </main>
    );
}
