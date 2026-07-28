import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  const categories = [
    {
      title: "Interactive Map",
      desc: "Explore Vice City, Leonida Keys, and Grassrivers swamps with marked locations.",
      href: "/map",
      color: "from-cyan-500 to-blue-600",
      badge: "UPDATED"
    },
    {
      title: "Weapons Database",
      desc: "Detailed stats, damage ratings, and locations for pistols, rifles, and heavy gear.",
      href: "/weapons",
      color: "from-pink-500 to-rose-600",
      badge: "STATS"
    },
    {
      title: "Vehicle Garage",
      desc: "Comprehensive lineup of cars, boats, aircraft, and custom modification specs.",
      href: "/vehicles",
      color: "from-purple-500 to-indigo-600",
      badge: "SHOWROOM"
    },
    {
      title: "Missions & Heists",
      desc: "Step-by-step walkthroughs for Lucia & Jason's story quests and side hustles.",
      href: "/missions",
      color: "from-amber-400 to-orange-500",
      badge: "WALKTHROUGH"
    }
  ];

  const newsItems = [
    {
      date: "JULY 2026",
      title: "Leonida State Highway Police Mechanics Confirmed",
      desc: "Advanced pursuit AI and pit maneuver dynamics detailed in latest engine breakdowns."
    },
    {
      date: "JULY 2026",
      title: "Dynamic Weather & Hurricane Mechanics",
      desc: "How Vice City's tropical storm systems dynamically alter vehicle handling and visibility."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-pink-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 px-6 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-pink-500/10 text-pink-400 border border-pink-500/20">
            The Ultimate Leonida Companion
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight">
            WELCOME TO <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400">
              VICE CITY HUB
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-normal">
            Your definitive source for guides, interactive maps, weapon arsenals, and storyline walkthroughs across GTA VI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              href="/missions" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90 transition-all shadow-lg shadow-pink-500/25"
            >
              Start Walkthrough
            </Link>
            <Link 
              href="/map" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-slate-900 border border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition-all"
            >
              Explore Map
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-100 flex items-center space-x-3">
          <span>Explore Database</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              href={cat.href}
              className="group relative bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-8 transition-all hover:-translate-y-1 overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-[10px] font-black px-3 py-1 rounded-full bg-gradient-to-r ${cat.color} text-white uppercase tracking-wider`}>
                  {cat.badge}
                </span>
                <span className="text-slate-500 group-hover:text-white transition-colors font-mono text-lg">
                  →
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors mb-2">
                {cat.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {cat.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="border-t border-slate-800 bg-slate-900/30 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Latest Field Intel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{item.date}</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}