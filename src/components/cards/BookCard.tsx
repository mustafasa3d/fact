import Image from "next/image";

interface BookCardProps {
  title: string;
  author: string;
  img: string;
  from?: "latestVersions" | "ourTeam";
}

export function BookCard({ title, author, img, from = "latestVersions" }: BookCardProps) {

  const Icon = from === "ourTeam" && (
    <Image
      className="h-5 w-5 lg:h-[24px] lg:w-[20px]"
      src="/assets/images/latestversions/user.svg"
      width={20}
      height={20}
      alt="Author"
    />
  )

  return (
    <article className="group overflow-hidden bg-white">
      <div className="relative aspect-square lg:aspect-3/4 w-full">
        <Image
          src={img}
          alt={title}
          width={600}
          height={700}
          className="w-full h-[calc(100%-50px)] object-cover ring-1 ring-gray-200 no-repeat"
        />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-3 -mb-1 bg-primary px-4 pt-3 pb-5 text-white shadow-md">
            <h3
              className="text-center mb-3.5 line-clamp-2 text-base md:text-2xl lg:text-[1.75rem] font-medium"
              title={title}
            >
              {title}
            </h3>
            <div className="flex items-center justify-center gap-2 text-xs opacity-90">
              {Icon}
              <span className="text-base md:text-xl">{author}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
