'use client';

import React, { useState } from 'react';

export default function MapPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const locations = [
    { id: 1, name: "Hank's Waffles", category: "Heists", region: "Vice Dale County", desc: "The famous starting diner robbery location from the initial reveal.", coords: "35% top, 40% left" },
    { id: 2, name: "Ocean Drive Club", category: "Safehouses", region: "Vice City Beach", desc: "High-end coastal retreat with garage access and custom outfit changing.", coords: "60% top, 80% left" },
    { id: 3, name: "Port Gellhorn Docks", category: "Weapons", region: "Port Gellhorn", desc: "Industrial container yard containing heavy weaponry cache drops.", coords: "75% top, 20% left" },
    { id: 4, name: "Grassrivers Airfield", category: "Easter Eggs", region: "Everglades Swamps", desc: "Hidden runway used for night smuggling runs and secluded stunt jumps.", coords: "20% top, 50% left" },
  ];

  const categories = ['All', 'Heists', 'Safehouses', 'Weapons', 'Easter Eggs'];

  const filteredLocations = selectedFilter === 'All' 
    ? locations 
    : locations.filter(loc => loc.category === selectedFilter);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-800 pb-6">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">State of Leonida</span>
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 mt-1">
            Interactive Vice City Map
          </h1>
          <p className="text-slate-400 mt-2 max-w-2xl">
            Track key story points, hidden weapon caches, getaway routes, and collectibles across the map.
          </p>
        </header>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all ${
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Simulated Map Viewer Box */}
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden p-8 text-center bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none" />
            <div className="z-10 space-y-3">
              <span className="text-5xl">🗺</span>
              <h2 className="text-xl font-bold text-slate-200">Leonida Satellite Grid</h2>
              <p className="text-xs text-slate-400 max-w-md">
                Showing locations for filter: <strong className="text-cyan-400">{selectedFilter}</strong>
              </p>
            </div>
          </div>

          {/* Location Details List */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Discovered POIs ({filteredLocations.length})
            </h3>

            <div className="space-y-3">
              {filteredLocations.map((loc) => (
                <div key={loc.id} className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-cyan-500/50 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white text-base">{loc.name}</h4>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 uppercase">
                      {loc.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">{loc.desc}</p>
                  <span className="text-[11px] text-pink-400 font-mono">📍 {loc.region}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}