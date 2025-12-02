import Image from "next/image";
import { CustomBtnLink } from "@/components/shared/CustomBtnLink";

interface NewsCardProps {
  id: number;
  title: string;
  img: string;
  readMoreText: string;
}

export function NewsCard({ id, title, img, readMoreText }: NewsCardProps) {
  return (
    <article className="group relative overflow-hidden">
      <div className="relative aspect-square w-full">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/35" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full pb-4 rtl:pr-4 rtl:pl-1 ltr:pl-4 ltr:pr-1 text-white">
            <h3
              className="line-clamp-6 text-base font-medium xl:text-xl leading-7"
              title={title}
            >
              {title}
            </h3>
            <div className="mt-3 flex">
              <CustomBtnLink
                href={`#news-${id}`}
                className="px-4 py-2 shadow-sm xl:text-xl xl:font-medium"
                iconSrc="/assets/images/latestarticle/eye.svg"
                iconAlt="Read news"
                iconWidth={24}
                iconHeight={24}
                iconPriority
              >
                {readMoreText}
              </CustomBtnLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
