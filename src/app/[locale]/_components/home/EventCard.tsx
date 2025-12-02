import Image from "next/image";

type EventCardProps = {
  date: string;
  title: string;
};

export default function EventCard({ date, title }: EventCardProps) {
  return (
    <article className="rounded-md bg-primary px-4 py-10 text-white shadow-sm text-xl lg:text-[1.7rem] w-full">
      <div className="mb-4 flex items-center gap-2 xl:text-3xl">
        <Image
          src="/assets/images/event/date.svg"
          alt="event-card-calendar"
          width={35}
          height={35}
          className="object-contain"
        />
        <span>{date}</span>
      </div>
      <h3 className="line-clamp-3 xl:text-[1.8125rem]" title={title}>{title}</h3>
    </article>
  );
}
