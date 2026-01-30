"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Přidáno pro detekci aktivní stránky
import { ChevronDown, ChevronRight, Circle } from 'lucide-react';

// Tvá definice struktury (zachována beze změny)
const CHAPTERS = [
  {
    title: "Základní ekonomické koncepty",
    slug: "zakladni-koncepty",
    subchapters: [
      { title: "Úvod do ekonomie", slug: "uvod-ekonomie" },
      { title: "Metodologie a ekonomické modely", slug: "metodologie" },
      { title: "Statek, vzácnost, užitek hodnota", slug: "statek-vzacnost-uzitek-hodnota" },
      { title: "Výrobní faktory", slug: "vyrobni-faktory" },
      { title: "Hranice produkčních možnosti a náklady obětované příležitosti", slug: "hranice-produkcnich-moznosti" },
      { title: "Komparativní a absolutní výhoda", slug: "vyhody" },
      { title: "Nabídka, poptávka a tržní rovnováha", slug: "nabidka-poptavka" },
    ]
  },
  {
    title: "Mikroekonomie",
    slug: "mikroekonomie",
    subchapters: [
      { title: "", slug: "" },
      { title: "", slug: "" }
    ]
  },
  {
    title: "Makroekonomie",
    slug: "makroekonomie",
    subchapters: [
      { title: "", slug: "" },
      { title: "", slug: "" }
    ]
  },
  { title: "Peníze a bankovnictví", slug: "penize-a-bankovnictvi", subchapters: [] },
  { title: "Dějiny ekonomického myšlení", slug: "dejiny-ekonomie", subchapters: [] },
  { title: "Investice a podnikání", slug: "investice-a-podnikani", subchapters: [] },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Efekt: Pokud uživatel přijde přímo na podstránku, automaticky otevřeme sekci v menu
  useEffect(() => {
    const activeChapter = CHAPTERS.find(c => pathname.startsWith(`/${c.slug}`));
    if (activeChapter) {
      setOpenSection(activeChapter.slug);
    }
  }, [pathname]);

  return (
    // Změna: fixed pozice, top-16 (pod navbarem), světlé pozadí bg-slate-50
    <aside className="fixed left-0 top-16 bottom-0 w-72 bg-slate-50 border-r border-slate-200 flex flex-col overflow-y-auto pb-10 z-40 scrollbar-thin scrollbar-thumb-slate-200">
      
      {/* Logo odstraněno, přidáno horní odsazení */}
      <div className="p-4 pt-6 space-y-1">
        <h3 className="px-3 text-xs font-black uppercase text-slate-400 tracking-widest mb-4">
          Obsah učebnice
        </h3>

        {CHAPTERS.map((chapter) => {
          // Zjistíme, jestli jsme v této kapitole (pro zvýraznění)
          const isActive = pathname.startsWith(`/${chapter.slug}`);

          return (
            <div key={chapter.slug} className="space-y-1">
              {/* Hlavní kapitola */}
              <div className="flex items-center group">
                <Link 
                  href={`/${chapter.slug}`}
                  className={`flex-1 px-3 py-2 text-sm font-bold rounded-lg transition-all ${
                    isActive 
                      ? 'bg-white text-blue-600 shadow-sm border border-slate-200' // Aktivní styl (světlý)
                      : 'text-slate-600 hover:bg-slate-200/50 hover:text-slate-900' // Neaktivní styl
                  }`}
                >
                  {chapter.title}
                </Link>
                
                {chapter.subchapters.length > 0 && (
                  <button 
                    onClick={() => setOpenSection(openSection === chapter.slug ? null : chapter.slug)}
                    className="p-1.5 ml-1 rounded-md text-slate-400 hover:text-blue-600 hover:bg-slate-200/50 transition-colors"
                  >
                    {openSection === chapter.slug ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </button>
                )}
              </div>

              {/* Podkapitoly */}
              {(openSection === chapter.slug) && chapter.subchapters.length > 0 && (
                <div className="ml-4 pl-3 border-l-2 border-slate-200 space-y-1 mt-1 mb-3">
                  {chapter.subchapters.map((sub) => {
                    const isSubActive = pathname.includes(sub.slug);
                    return (
                      <Link
                        key={sub.slug}
                        href={`/${chapter.slug}/${sub.slug}`}
                        className={`flex items-start px-3 py-1.5 text-xs transition-colors group rounded-md ${
                          isSubActive ? 'text-blue-600 font-bold bg-blue-50/50' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                        }`}
                      >
                        {/* Puntík nahrazen ikonkou Circle pro čistší vzhled, nebo můžeš vrátit textový puntík */}
                        <Circle size={6} className={`mr-2 mt-1 shrink-0 ${isSubActive ? 'fill-blue-600 text-blue-600' : 'text-slate-300'}`} />
                        <span className="leading-relaxed">
                            {sub.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}