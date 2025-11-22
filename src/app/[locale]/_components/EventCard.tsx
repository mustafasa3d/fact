type EventCardProps = {
  date: string;
  title: string;
};

export default function EventCard({ date, title }: EventCardProps) {
  return (
    <article className="rounded-md bg-primary px-4 py-10 text-white shadow-sm text-xl lg:text-[1.7rem] w-full">
      <div className="mb-4 flex items-center gap-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M7 2v3M17 2v3M3 8h18M5 12h14M5 16h14M4 5h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{date}</span>
      </div>
      <h3 className="line-clamp-3" title={title}>{title}</h3>
    </article>
  );
}
