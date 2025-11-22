import { usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

function LanguageSwitch() {
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
    <button className="flex items-center gap-5" onClick={toggleLanguage}>
      <Image
        src="/assets/images/navbar/search.svg"
        className="h-4 w-4"
        alt="search"
        width={16}
        height={16}
        priority
      />

      <div
        className="hidden lg:inline-flex items-center gap-1 rounded-full text-xs font-medium text-white shadow-sm hover:bg-[#0d4f3a]"
      >
        <span>{locale}</span>
        {t("english")}
        <Image
          src="/assets/images/navbar/world.svg"
          className="h-4 w-4"
          alt="arrow"
          width={16}
          height={16}
          priority
        />
      </div>
    </button>
  );
}

export default LanguageSwitch;
