import React from 'react';

export default function MissionsPage() {
  const missions = [
    {
      title: "Prologue: Vice City Run",
      character: "Lucia & Jason",
      type: "Story Mission",
      difficulty: "Starter",
      desc: "Escape the Hank's Waffles robbery and evade the local authorities across Vice Dale County.",
      payout: "$2,500"
    },
    {
      title: "Port Gellhorn Freight Heist",
      character: "Jason",
      type: "Major Heist",
      difficulty: "Hard",
      desc: "Infiltrate the industrial docks, hack cargo manifests, and hijack high-value shipping containers.",
      payout: "$150,000"
    },
    {
      title: "Ocean Drive Neon Score",
      character: "Lucia",
      type: "Stealth Heist",
      difficulty: "Medium",
      desc: "Disable security networks at a high-end Vice City jewelry club before driving off into the night.",
      payout: "$85,000"
    },
    {
      title: "Swamp Airboat Smuggle",
      character: "Jason",
      type: "Side Mission",
      difficulty: "Easy",
      desc: "Navigate through the Grassrivers wetlands to deliver contraband while evading rival gangs.",
      payout: "$12,000"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center md:text-left border-b border-slate-800 pb-6">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Storyline & Heists</span>
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 mt-1">
            Missions Walkthrough
          </h1>
          <p className="text-slate-400 mt-2 max-w-2xl">
            Complete step-by-step guides for main story quests, duo heists, and side hustles in Leonida.
          </p>
        </header>

        <div className="space-y-6">
          {missions.map((mission, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-400/50 transition-all flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
                    {mission.type}
                  </span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    Lead: <strong className="text-pink-400">{mission.character}</strong>
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white">{mission.title}</h2>
                <p className="text-slate-300 text-sm max-w-2xl">{mission.desc}</p>
              </div>

              <div className="flex md:flex-col items-start md:items-end justify-between border-t md:border-t-0 border-slate-800 pt-4 md:pt-0 min-w-[140px]">
                <div className="text-left md:text-right">
                  <span className="block text-xs text-slate-400 uppercase">Est. Payout</span>
                  <span className="text-xl font-bold text-emerald-400">{mission.payout}</span>
                </div>
                <span className="text-xs text-slate-400 md:mt-2">
                  Difficulty: <strong className="text-slate-200">{mission.difficulty}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}