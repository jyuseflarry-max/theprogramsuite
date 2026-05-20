"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  q: string;
  a: string;
};

function FaqRow({ q, a }: FaqItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black/10">
      <button
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={() => {
          setOpen((value) => !value);
        }}
        type="button"
      >
        <span className="text-base font-black text-[#172033]">{q}</span>
        <ChevronDown
          aria-hidden="true"
          className={`size-5 shrink-0 text-[#b28a2e] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open ? <p className="pb-5 text-sm leading-7 text-[#667085]">{a}</p> : null}
    </div>
  );
}

export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <section className="border-t border-black/10 bg-[#fbfaf7] py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-center text-sm font-black uppercase tracking-[0.18em] text-[#b28a2e]">FAQ</p>
        <h2 className="mt-3 text-center text-4xl font-black tracking-tight">Inventory pricing questions</h2>
        <div className="mt-10">
          {items.map((item) => (
            <FaqRow key={item.q} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
