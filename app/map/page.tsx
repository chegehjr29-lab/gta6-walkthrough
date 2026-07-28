import React from 'react';

export default function MapPage() {
  const regions = [
    { name: "Vice City Downtown", desc: "Neon-lit skylines, corporate hubs, and high-stakes heist locations.", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" },
    { name: "Leonida Keys", desc: "Archipelago connected by sprawling highways—ideal for boat/watercraft action.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
    { name: "Grassrivers & Swamps", desc: "Murky wetlands filled with wildlife, airboats, and off-grid smuggling ops.", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80" },
    { name: "Port Gellhorn & Counties", desc: "Industrial docks, racing strips, and sprawling rural outskirts.", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center md:text-left border-b border-slate-800 pb-6">
          <span className="text-xs uppercase tracking-widest text-pink-500 font-bold">State of Leonida</span>
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 mt-1">
            Map & Territory Guide
          </h1>
          <p className="text-slate-400 mt-2 max-w-2xl">
            Explore confirmed regions across Vice City and the surrounding state of Leonida.
          </p>
        </header>

        {/* Map Hero Visual */}
        <section className="mb-12 relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 group">
          <img 
            src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80" 
            alt="Vice City Map Overview" 
            className="w-full h-80 md:h-96 object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 md:p-10 flex flex-col justify-end">
            <span className="bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full w-max uppercase tracking-wider mb-2">Interactive Overview</span>
            <h2 className="text-2xl md:text-4xl font-bold">State of Leonida Master Map</h2>
            <p className="text-slate-300 text-sm md:text-base mt-1 max-w-xl">
              Featuring Vice City, Vice Dale County, Port Gellhorn, Kelly County, and the Leonida Keys.
            </p>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regions.map((region, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all">
              <img src={region.image} alt={region.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400">{region.name}</h3>
                <p className="text-slate-400 text-sm mt-2">{region.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}