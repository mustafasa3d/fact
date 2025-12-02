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
        className="inline-flex items-center gap-1 cursor-pointer rounded-full text-xs md:text-sm lg:text-lg font-medium text-white hover:text-white/70 duration-300"
      >
        {t("english")}
        <Image
          src="/assets/images/navbar/world.svg"
          className="h-5 w-5"
          alt="arrow"
          width={20}
          height={20}
          priority
        />
      </button>
    </div>
  );
}

export default LanguageSwitch;
