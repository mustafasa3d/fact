import Image from "next/image";

export function VideoAndPillars() {
  return (
    <section className="bg-[#f7f7f7] py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:px-0">
        <a
          href="#"
          aria-label="تشغيل الفيديو التعريفي للمركز"
          className="group relative block overflow-hidden rounded-md bg-primary/10"
        >
          <div className="relative aspect-video w-full">
            <Image
              src="/assets/images/video-thumb.svg"
              alt="فيديو تعريفي"
              fill
              className="object-cover opacity-90 transition-all duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/30" />
            <span className="absolute left-4 top-4 rounded bg-white/20 px-2 py-1 text-xs font-medium text-white backdrop-blur-md">
              فيديو
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid place-items-center rounded-full bg-white/90 text-primary shadow-lg transition-transform duration-300 group-hover:scale-105" style={{width:64,height:64}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </a>

        <div className="relative overflow-hidden rounded-md bg-white">
          <div className="relative aspect-video w-full">
            <Image
              src="/assets/images/pillars.svg"
              alt="أعمدة رمزية للثبات والقانون"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
