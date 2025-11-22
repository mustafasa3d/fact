import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

function LanguageSwitch({className}: {className?: string}) {
  const t = useTranslations("nav");

  const locale = useLocale();

  const toggleLanguage = () => {
    const newLang = locale === "en" ? "ar" : "en";

    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const pathWithoutLang = url.pathname.replace(/^\/(en|ar)/, "");
    const newPath = `/${newLang}${pathWithoutLang}${url.search}`;

    window.location.href = newPath;
  };

  return (
    <div className={cn("flex items-center gap-5", className)}>
      <button
        onClick={toggleLanguage}
        className="inline-flex items-center gap-1 cursor-pointer rounded-full text-xs font-medium text-white shadow-sm hover:bg-[#0d4f3a]"
      >
        {t("english")}
        <Image
          src="/assets/images/navbar/world.svg"
          className="h-4 w-4"
          alt="arrow"
          width={16}
          height={16}
          priority
        />
      </button>
    </div>
  );
}

export default LanguageSwitch;
