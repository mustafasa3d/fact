import { Container } from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";

export function VideoAndPillars() {
  return (
    <section className="py-8">
      <Container className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Link
          href="#"
          aria-label="تشغيل الفيديو التعريفي للمركز"
          className="md:col-span-1 group relative block overflow-hidden rounded-md bg-primary/10"
        >
          <div className="relative w-full h-full min-h-[210px]">
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
              <div className="grid place-items-center rounded-full bg-white/90 text-primary shadow-lg transition-transform duration-300 group-hover:scale-105" style={{ width: 64, height: 64 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </Link>

        <div className="md:col-span-2 relative overflow-hidden rounded-md bg-white">
          <div className="relative w-full aspect-7/3">
            <Image
              src="/assets/images/whoweare/pillars.png"
              alt="أعمدة رمزية للثبات والقانون"
              fill
              className="object-cover w-full"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
