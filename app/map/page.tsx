'use client';

import React, { useState } from 'react';

export default function MapPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activePin, setActivePin] = useState<any>(null);

  const locations = [
    { 
      id: 1, 
      name: "Hank's Waffles", 
      category: "Heists", 
      region: "Vice Dale County", 
      desc: "The famous starting diner robbery location from the initial reveal trailer.", 
      top: '38%', 
      left: '42%' 
    },
    { 
      id: 2, 
      name: "Ocean Drive Club", 
      category: "Safehouses", 
      region: "Vice City Beach", 
      desc: "High-end coastal retreat with garage access and custom outfit changing.", 
      top: '58%', 
      left: '78%' 
    },
    { 
      id: 3, 
      name: "Port Gellhorn Docks", 
      category: "Weapons", 
      region: "Port Gellhorn", 
      desc: "Industrial container yard containing heavy weaponry cache drops.", 
      top: '72%', 
      left: '25%' 
    },
    { 
      id: 4, 
      name: "Grassrivers Airfield", 
      category: "Easter Eggs", 
      region: "Everglades Swamps", 
      desc: "Hidden runway used for night smuggling runs and secluded stunt jumps.", 
      top: '28%', 
      left: '52%' 
    },
  ];

  const categories = ['All', 'Heists', 'Safehouses', 'Weapons', 'Easter Eggs'];

  const filteredLocations = selectedFilter === 'All' 
    ? locations 
    : locations.filter(loc => loc.category === selectedFilter);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-4">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">State of Leonida</span>
          <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500">
            Interactive Vice City Map
          </h1>
        </header>

        {/* Filter Controls */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedFilter === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Map Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Visual Interactive Map Image Container */}
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl min-h-[420px] relative overflow-hidden group">
            
            {/* Background Map Graphic (Vice City Grid Styling) */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.4), rgba(2, 6, 23, 0.9)), url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80')`
              }}
            />

            {/* Radar Lines Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b215_1px,transparent_1px),linear-gradient(to_bottom,#0891b215_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Interactive Location Pins */}
            {filteredLocations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActivePin(loc)}
                style={{ top: loc.top, left: loc.left }}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group/pin focus:outline-none"
              >
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-pink-500 border-2 border-white shadow-lg shadow-pink-500/50 items-center justify-center text-[9px] font-black">
                    📍
                  </span>
                </span>
                
                {/* Hover Label */}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-6 hidden group-hover/pin:block bg-slate-950/90 text-cyan-300 text-[10px] font-bold px-2 py-1 rounded border border-cyan-500/40 whitespace-nowrap z-30 shadow-md">
                  {loc.name}
                </span>
              </button>
            ))}

            {/* Map Overlay Badge */}
            <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] text-slate-300 flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SATELLITE FEED LIVE</span>
            </div>
          </div>

          {/* Location Details List */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Discovered POIs ({filteredLocations.length})
            </h3>

            <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
              {filteredLocations.map((loc) => (
                <div 
                  key={loc.id} 
                  onClick={() => setActivePin(loc)}
                  className={`border rounded-xl p-4 transition-all cursor-pointer ${
                    activePin?.id === loc.id 
                      ? 'bg-slate-900 border-cyan-400 shadow-md shadow-cyan-500/10' 
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1.5">
                    <h4 className="font-bold text-white text-sm">{loc.name}</h4>
                    <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 uppercase">
                      {loc.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2 leading-relaxed">{loc.desc}</p>
                  <span className="text-[10px] text-pink-400 font-mono">📍 {loc.region}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}