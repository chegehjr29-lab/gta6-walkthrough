import React from 'react';

export default function VehiclesPage() {
  const vehicles = [
    {
      name: "Bravado Banshee",
      type: "Sports Car",
      class: "High Performance",
      desc: "An iconic Vice City staple returning with upgraded twin-turbo power and ultra-widebody options.",
      topSpeed: "185 mph",
      handling: "9.2/10"
    },
    {
      name: "Grotti Cheetah Classic",
      type: "Super Car",
      class: "Exotic",
      desc: "Sleek 80s supercar design tailored for Miami retro vibes, high-speed getaway runs, and street racing.",
      topSpeed: "192 mph",
      handling: "8.8/10"
    },
    {
      name: "Pegassi Vice Airboat",
      type: "Watercraft",
      class: "Off-Road Boat",
      desc: "Built for skimming through Grassrivers swamps and evading airboat patrols in shallow waters.",
      topSpeed: "75 mph",
      handling: "9.5/10"
    },
    {
      name: "Maibatsu Frogger",
      type: "Helicopter",
      class: "Aircraft",
      desc: "Lightweight charter helicopter perfect for fast travel between Vice City downtown and the Keys.",
      topSpeed: "140 mph",
      handling: "8.0/10"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center md:text-left border-b border-slate-800 pb-6">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-bold">Garage & Showroom</span>
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 mt-1">
            Confirmed Vehicles
          </h1>
          <p className="text-slate-400 mt-2 max-w-2xl">
            Rides, boats, aircraft, and custom builds confirmed across Vice City & Leonida.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vehicles.map((car, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-white">{car.name}</h2>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">{car.type}</p>
                </div>
                <span className="bg-purple-500/20 text-purple-400 text-xs font-bold px-3 py-1 rounded-full border border-purple-500/30">
                  {car.class}
                </span>
              </div>
              <p className="text-slate-300 text-sm mt-3">{car.desc}</p>
              <div className="mt-6 flex justify-between items-center pt-4 border-t border-slate-800 text-xs">
                <span className="text-slate-400">Top Speed: <strong className="text-amber-400">{car.topSpeed}</strong></span>
                <span className="text-slate-400">Handling: <strong className="text-purple-400">{car.handling}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}