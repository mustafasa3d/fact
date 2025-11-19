"use client";

import Link from "next/link";

const NAV_ITEMS = [
  { href: "#about", label: "من نحن" },
  { href: "#research", label: "الأبحاث والدراسات" },
  { href: "#publications", label: "المنشورات" },
  { href: "#media", label: "المركز الإعلامي" },
  { href: "#blog", label: "المدونة" },
  { href: "#memory", label: "الذاكرة المرئية" },
  { href: "#contact", label: "اتصل بنا" },
];

export function Navbar() {
  return (
    <header className="w-full border-b border-[#e5e5e5] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-0">
        <div className="flex items-center gap-3">
          <div className="h-10 w-24 bg-[#0f5f46]" aria-hidden />
          <div className="flex flex-col text-sm">
            <span className="font-semibold text-[#0f5f46]">FACT</span>
            <span className="text-[11px] text-gray-600">
              CENTER FOR STRATEGIC STUDIES
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-800 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#0f5f46]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden rounded-full border border-white/40 bg-[#0f5f46] px-4 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-[#0d4f3a] lg:inline-flex">
            English
          </button>
        </div>
      </div>
    </header>
  );
}
