import React from 'react';

export default function WeaponsPage() {
  const weapons = [
    {
      name: "Girardi ES9 Pistol",
      type: "Handgun",
      category: "Sidearm",
      desc: "Jason's signature sidearm. Custom high-precision hand-engraved tactical pistol.",
      image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80",
      stats: { damage: 65, fireRate: 70, accuracy: 85 }
    },
    {
      name: "Klose K17 Pistol",
      type: "Handgun",
      category: "Sidearm",
      desc: "Lucia's signature 9mm pistol. Designed for high mobility and close-quarters shootouts.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=600&q=80",
      stats: { damage: 60, fireRate: 80, accuracy: 80 }
    },
    {
      name: "Duke Arms Carbine",
      type: "Assault Rifle",
      category: "Primary",
      desc: "AR-15 platform rifle spotted during high-stakes robberies and police shootouts.",
      image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80",
      stats: { damage: 82, fireRate: 75, accuracy: 88 }
    },
    {
      name: "Tactical MP5 SMG",
      type: "Submachine Gun",
      category: "Compact",
      desc: "Fitted with red dot sights. Extremely rapid fire rate for drive-bys and tight spaces.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=600&q=80",
      stats: { damage: 55, fireRate: 95, accuracy: 72 }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center md:text-left border-b border-slate-800 pb-6">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Armory & Equipment</span>
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 mt-1">
            Confirmed Weapons Arsenal
          </h1>
          <p className="text-slate-400 mt-2 max-w-2xl">
            Detailed stats and customization breakdowns for firearms confirmed across Leonida.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {weapons.map((gun, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-pink-500/50 transition-all flex flex-col">
              <div className="relative h-48 bg-slate-950 overflow-hidden">
                <img src={gun.image} alt={gun.name} className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 right-3 bg-slate-900/90 text-pink-400 text-xs font-bold px-3 py-1 rounded-full border border-pink-500/30">
                  {gun.category}
                </span>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">{gun.name}</h2>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">{gun.type}</p>
                  <p className="text-slate-300 text-sm mt-3">{gun.desc}</p>
                </div>

                <div className="mt-6 space-y-3 pt-4 border-t border-slate-800">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Damage</span>
                      <span className="text-pink-400 font-bold">{gun.stats.damage}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-pink-500" style={{ width: `${gun.stats.damage}%` }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Fire Rate</span>
                      <span className="text-cyan-400 font-bold">{gun.stats.fireRate}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400" style={{ width: `${gun.stats.fireRate}%` }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Accuracy</span>
                      <span className="text-purple-400 font-bold">{gun.stats.accuracy}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500" style={{ width: `${gun.stats.accuracy}%` }}></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}