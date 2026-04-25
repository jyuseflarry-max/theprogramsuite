"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem { q: string; a: string }

function FaqRow({ q, a }: FaqItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-white font-semibold text-base">{q}</span>
        <ChevronDown
          size={18}
          className={`text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && <p className="pb-5 text-gray-400 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <section className="py-28 border-b border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl sm:text-4xl font-black mb-12 text-center">Questions.</h2>
        {items.map((item) => (
          <FaqRow key={item.q} {...item} />
        ))}
      </div>
    </section>
  );
}
