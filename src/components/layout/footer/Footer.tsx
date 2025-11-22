import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-100" id="footer">
      {/* Newsletter */}
      <div className="mx-auto max-w-6xl px-4 py-6 lg:px-0">
        <form
          className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          action="#"
        >
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="h-11 flex-1 rounded-md border border-zinc-700 bg-zinc-800/60 px-4 text-sm placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none"
          />
          <button
            type="submit"
            className="h-11 rounded-md bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-[#0d4f3a]"
          >
            اشترك
          </button>
        </form>
      </div>

      {/* Links */}
      <div className="mx-auto max-w-6xl px-4 py-10 lg:px-0">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Logo */}
          <div className="flex items-start justify-start md:justify-end">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-28">
                <Image
                  src="/assets/images/whoweare/fact-logo.svg"
                  alt="FACT"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="mb-3 text-sm font-semibold text-white">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>
                <Link href="#about" className="hover:text-white">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="#research" className="hover:text-white">
                  الأبحاث والدراسات
                </Link>
              </li>
              <li>
                <Link href="#publications" className="hover:text-white">
                  المنشورات
                </Link>
              </li>
              <li>
                <Link href="#events" className="hover:text-white">
                  من الفعاليات
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-right">
            <h4 className="mb-3 text-sm font-semibold text-white">تواصل</h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>fact@email.com</li>
              <li>+962 7000 000</li>
              <li>الأردن، عمان.</li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-right">
            <h4 className="mb-3 text-sm font-semibold text-white">تابعونا عبر</h4>
            <div className="flex flex-wrap items-center justify-start gap-3 md:justify-end">
              {[
                { name: "facebook", path: mdiPath.facebook },
                { name: "linkedin", path: mdiPath.linkedin },
                { name: "x", path: mdiPath.x },
                { name: "instagram", path: mdiPath.instagram },
                { name: "youtube", path: mdiPath.youtube },
              ].map((s) => (
                <Link
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="grid h-9 w-9 place-items-center rounded-full border border-zinc-700 text-zinc-300 transition-colors hover:border-white hover:text-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800 py-3">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-center text-xs text-zinc-400">
            <span>حقوق النشر</span>
            <span>سياسة الخصوصية</span>
            <span>سياسة التعليقات</span>
            <span>الشروط والأحكام</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const mdiPath = {
  facebook:
    "M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3h-1.9v7A10 10 0 0 0 22 12Z",
  linkedin:
    "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-9 16v-7H8v7h2Zm-1-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 8v-4.5c0-2.5-1.3-3.6-3-3.6-1.4 0-2 .8-2.3 1.3h-.1V9H12v10h2v-4.5c0-1.2.2-2.4 1.8-2.4 1.5 0 1.7 1.3 1.7 2.5V19h2Z",
  x: "M3 3h3.7l5.3 6.8L18.3 3H22l-7.9 9.4L22 21h-3.8l-6-7.7L5.5 21H2l8.3-9.8L3 3Z",
  instagram:
    "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z",
  youtube:
    "M10 15.5v-7l6 3.5-6 3.5ZM2 7.5c0-1.6 1.3-2.9 2.9-2.9h14.2c1.6 0 2.9 1.3 2.9 2.9v8.9c0 1.6-1.3 2.9-2.9 2.9H4.9A2.9 2.9 0 0 1 2 16.4V7.5Z",
};
