import Image from "next/image";
import { CustomBtnLink } from "@/components/shared/CustomBtnLink";
import { cn } from "@/lib/utils";

interface CustomPublicationCardProps {
  id: number;
  title: string;
  desc: string;
  img: string;
  latestBadgeText: string;
  readMoreText: string;
  iconSrc?: string;
  noLabel?: boolean;
}

export function CustomPublicationCard({
  id,
  title,
  desc,
  img,
  latestBadgeText,
  readMoreText,
  iconSrc,
  noLabel,
}: CustomPublicationCardProps) {
  return (
    <article className="group overflow-hidden transition">
      <div className="relative aspect-16/10 w-full max-h-[317px]">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover group:"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 duration-200" />
        {!noLabel && <span className="absolute right-0 top-7.5 bg-[#B23A48] px-3 py-2 font-medium text-white">
          {latestBadgeText}
        </span>}
        {iconSrc && (
          <div className="rounded-full bg-[#E4EAE8] absolute translate-y-1/2 bottom-0 start-5 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center">
            <Image
              src={iconSrc}
              alt="Icon"
              width={60}
              height={60}
              className="w-6 h-6 lg:w-14 lg:h-14"
            />
          </div>
        )}
      </div>
      <div className={cn("py-3", iconSrc && "pt-16 bg-white px-4 lg:px-8 pb-7")}>
        <h3
          className={cn("mb-4 line-clamp-2 text-lg md:text-2xl xl:text-3xl font-bold text-primary", iconSrc && "xl:text-4xl")}
          title={title}
        >
          {title}
        </h3>
        <p
          className={cn("mb-4 line-clamp-3 text-sm md:text-base xl:text-[1.17rem] font-medium text-[#1B4332]", iconSrc && "xl:font-normal xl:text-2xl")}
          title={desc}
        >
          {desc}
        </p>
        <div className="flex items-center">
          <div />
          <CustomBtnLink
            href={`#pub-${id}`}
            className="px-4 py-2 shadow-sm xl:font-bold xl:text-xl"
            iconSrc="/assets/images/latestarticle/eye.svg"
            iconAlt="View publication"
            iconWidth={24}
            iconHeight={24}
            iconPriority
          >
            {readMoreText}
          </CustomBtnLink>
        </div>
      </div>
    </article>
  );
}
