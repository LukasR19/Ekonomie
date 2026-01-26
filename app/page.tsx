"use client";
import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  User, 
  GraduationCap, 
  Map,
  ChevronRight,
  Lightbulb,
  MousePointerClick,
  FileDown,
  Globe2,
  ArrowDown
} from 'lucide-react';

const ROADMAP = [
  { title: "Základní ekonomické koncepty", slug: "zakladni-koncepty", color: "bg-blue-500" },
  { title: "Mikroekonomie", slug: "mikroekonomie", color: "bg-indigo-500" },
  { title: "Makroekonomie", slug: "makroekonomie", color: "bg-violet-500" },
  { title: "Peníze a bankovnictví", slug: "penize-a-bankovnictvi", color: "bg-purple-500" },
  { title: "Dějiny ekonomického myšlení", slug: "dejiny-ekonomie", color: "bg-pink-500" },
  { title: "Investice a podnikání", slug: "investice-a-podnikani", color: "bg-rose-500" },
];

export default function Home() {
  return (
    // scroll-smooth zajistí plynulý posun při kliknutí na kotvu #roadmap
    <div className="min-h-screen bg-white scroll-smooth">
      
      {/* HERO SEKCE */}
      <section className="max-w-5xl mx-auto pt-24 pb-12 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
          <Lightbulb size={14} /> Vzdělávání pro 21. století
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
          Vítejte v online <br />
          <span className="text-blue-600">učebnici ekonomie</span>
        </h1>
        
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-10">
          Interaktivní průvodce světem trhů, peněz a lidského rozhodování. 
          Pochopte souvislosti, které hýbou dnešním světem.
        </p>

        {/* HLAVNÍ TLAČÍTKA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href="#roadmap" 
            className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 active:scale-95"
          >
            Studovat teď <ArrowDown size={20} />
          </a>
          <Link 
            href="/o-autorovi" 
            className="w-full sm:w-auto px-10 py-4 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
          >
            O autorovi <User size={20} />
          </Link>
        </div>

        {/* NOVÝ PRUH S MATERIÁLY A DĚNÍM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <Link href="/materialy" className="group p-5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-4 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all text-left">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FileDown size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Užitečné materiály</h4>
              <p className="text-xs text-slate-500">Soubory, tipy a pomůcky ke studiu</p>
            </div>
          </Link>

          <Link href="/aktualni-deni" className="group p-5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-4 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all text-left">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Globe2 size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Aktuální dění</h4>
              <p className="text-xs text-slate-500">Zajímavosti a články z externích webů</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ROADMAP SEKCE - přidáno ID "roadmap" */}
      <section id="roadmap" className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-slate-200"></div>
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2">
            <Map size={18} /> Vaše výuková cesta
          </h2>
          <div className="h-px flex-1 bg-slate-200"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROADMAP.map((step, idx) => (
            <Link 
              key={step.slug} 
              href={`/${step.slug}`}
              className="group relative bg-white border border-slate-200 p-8 rounded-[2rem] hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 ${step.color} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                  {idx + 1}
                </div>
                <div className="text-slate-200 group-hover:text-blue-100 transition-colors">
                  <MousePointerClick size={32} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              
              <div className="mt-6 flex items-center text-xs font-black uppercase tracking-widest text-blue-500 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                Otevřít kapitolu <ChevronRight size={14} className="ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>


    </div>
  );
}