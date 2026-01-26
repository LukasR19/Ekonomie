"use client";
import React from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Layers, 
  Zap, 
  TrendingUp, 
  FileText, 
  Award, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

// Seznam podkapitol pro snadnou správu
const SUBCHAPTERS = [
  {
    title: "Úvod do ekonomie",
    slug: "uvod-ekonomie",
    desc: "Co ekonomie vlastně zkoumá a proč je důležitá pro náš každodenní život?",
    icon: <BookOpen className="text-blue-500" />,
    time: "5 min"
  },
  {
    title: "Statek, vzácnost, užitek",
    slug: "statek-vzacnost-uzitek-hodnota",
    desc: "Proč nemůžeme mít všechno a jak určujeme hodnotu věcí kolem nás?",
    icon: <Layers className="text-indigo-500" />,
    time: "10 min"
  },
  {
    title: "Výrobní faktory",
    slug: "vyrobni-faktory",
    desc: "Půda, práce, kapitál a technologie – základní stavební kameny bohatství.",
    icon: <Zap className="text-amber-500" />,
    time: "7 min"
  },
  {
    title: "Ekonomické systémy",
    slug: "ekonomicke-systemy",
    desc: "Zvyková, příkazová a tržní ekonomika. Jak různé společnosti řeší své potřeby?",
    icon: <TrendingUp className="text-green-500" />,
    time: "8 min"
  },
  {
    title: "Hranice produkčních možností",
    slug: "hranice-produkcnich-moznosti",
    desc: "Vizualizace efektivity a nákladů obětované příležitosti.",
    icon: <FileText className="text-red-500" />,
    time: "12 min"
  },
  {
    title: "Závěrečný test kapitoly",
    slug: "kviz",
    desc: "Otestujte své znalosti a získejte certifikát o absolvování první kapitoly.",
    icon: <Award className="text-purple-500" />,
    time: "15 min"
  }
];

export default function ZakladniKonceptyHub() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* HERO SEKCE */}
      <div className="mb-16 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Kapitola 1
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
          Základní ekonomické <br />
          <span className="text-blue-600">koncepty</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
          Pochopte základy, na kterých stojí celý svět financí a obchodu. Naučíme se, 
          jak lidé dělají rozhodnutí a jak efektivně nakládat s tím, co máme k dispozici.
        </p>
      </div>

      {/* GRID PODKAPITOL */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SUBCHAPTERS.map((sub, idx) => (
          <Link 
            key={sub.slug} 
            href={`/zakladni-koncepty/${sub.slug}`}
            className="group relative flex flex-col bg-white border border-slate-200 rounded-[2rem] p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Číslo kapitoly v pozadí */}
            <span className="absolute top-6 right-8 text-6xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              0{idx + 1}
            </span>

            {/* Ikona */}
            <div className="mb-6 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              {React.cloneElement(sub.icon as React.ReactElement, {})}
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {sub.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {sub.desc}
              </p>
            </div>

            {/* Footer karty */}
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Doba studia: {sub.time}
              </span>
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <ChevronRight size={18} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* SPODNÍ MOTIVAČNÍ PANEL */}
      <div className="mt-20 p-10 bg-slate-900 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Jste připraveni začít?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Doporučujeme postupovat popořadě. Každá podkapitola staví na znalostech té předchozí.
          </p>
          <Link 
            href="/zakladni-koncepty/uvod-ekonomie"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-lg active:scale-95"
          >
            Spustit první lekci <ArrowRight size={20} />
          </Link>
        </div>
        {/* Dekorativní prvek v pozadí */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}