'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [activeProtagonist, setActiveProtagonist] = useState<'lucia' | 'jason'>('lucia');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedCharacter = localStorage.getItem('vcc_protagonist') as 'lucia' | 'jason';
    if (savedCharacter) setActiveProtagonist(savedCharacter);

    const savedProgress = localStorage.getItem('vcc_progress');
    if (savedProgress) {
      try {
        setCompletedItems(JSON.parse(savedProgress));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save character preference
  const handleCharacterChange = (char: 'lucia' | 'jason') => {
    setActiveProtagonist(char);
    localStorage.setItem('vcc_protagonist', char);
  };

  // Toggle checklist item progress
  const toggleItem = (id: string) => {
    const updated = { ...completedItems, [id]: !completedItems[id] };
    setCompletedItems(updated);
    localStorage.setItem('vcc_progress', JSON.stringify(updated));
  };

  // Reset checklist progress
  const resetProgress = () => {
    setCompletedItems({});
    localStorage.removeItem('vcc_progress');
  };

  // 100% Completion Checklist Data
  const checklist = [
    { id: 'm1', title: "Complete Prologue Mission", category: "Story" },
    { id: 'm2', title: "Rob 5 Convenience Stores with Lucia & Jason", category: "Heists" },
    { id: 'm3', title: "Discover All 50 Leonida Stunt Jumps", category: "Collectibles" },
    { id: 'm4', title: "Find All 25 Vice City Packages", category: "Collectibles" },
    { id: 'm5', title: "Win the Kelly County Mud Bogging Race", category: "Side Activity" },
  ];

  const totalChecklist = checklist.length;
  const completedCount = Object.values(completedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalChecklist) * 100);

  // Interactive Cheat Codes Data
  const cheats = [
    { id: '1', title: "Max Health & Armor", code: "1-999-PAIN-KILLER", category: "Player", platform: "PS5 / Xbox" },
    { id: '2', title: "Spawn Comet Supercar", code: "1-999-COMET", category: "Vehicles", platform: "PS5 / Xbox" },
    { id: '3', title: "Lower Wanted Level", code: "1-999-LAWYERUP", category: "World", platform: "PS5 / Xbox" },
    { id: '4', title: "Give Heavy Weapons", code: "1-999-TOOLUP", category: "Weapons", platform: "PS5 / Xbox" },
    { id: '5', title: "Explosive Melee Attacks", code: "1-999-HOTHANDS", category: "Player", platform: "PS5 / Xbox" },
    { id: '6', title: "Spawn Buzzard Chopper", code: "1-999-BUZZOFF", category: "Vehicles", platform: "PS5 / Xbox" },
  ];

  // Map Locations across Leonida
  const regions = ['All', 'Vice City', 'Leonida Keys', 'Grassrivers', 'Port Gellhorn'];
  const mapPoints = [
    { title: 'Ocean Drive Strip', region: 'Vice City', type: 'High Value Heist', danger: 'Low' },
    { title: 'Keys Smuggling Marina', region: 'Leonida Keys', type: 'Vehicle Drop', danger: 'Medium' },
    { title: 'Everglades Airboat Dock', region: 'Grassrivers', type: 'Gang Safehouse', danger: 'High' },
    { title: 'Port Gellhorn Shipping Yards', region: 'Port Gellhorn', type: 'Warehouse Heist', danger: 'Extreme' },
  ];

  // Character Data
  const characterData = {
    lucia: {
      name: "Lucia Caminos",
      origin: "Leonida Penitentiary",
      specialty: "High-Stakes Heists & Tactical Combat",
      missions: ["Fresh Out (Prologue)", "Downtown Jewel Heist", "Nightclub Shakedown"]
    },
    jason: {
      name: "Jason Duval",
      origin: "The Florida Keys",
      specialty: "Vehicle Customization & Getaways",
      missions: ["Key West Run", "Dinka Bike Escape", "Brian's Boatyard Deal"]
    }
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const filteredCheats = cheats.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMapPoints = selectedRegion === 'All' 
    ? mapPoints 
    : mapPoints.filter(p => p.region === selectedRegion);

  if (!isLoaded) return null; // Avoid hydration mismatch

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans selection:bg-pink-500 selection:text-white">
      {/* Top Header Bar */}
      <header className="max-w-6xl mx-auto border-b border-slate-800 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-pink-500 animate-pulse"></span>
            <h1 className="text-3xl font-black tracking-wider bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent uppercase">
              Vice City Central
            </h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">Leonida Network v6.0 • Interactive Game Database</p>
        </div>
        
        <div className="flex gap-2">
          <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold px-4 py-2 rounded-lg text-xs shadow-lg shadow-pink-500/20">
            Progress Saved Automatically
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-10 text-center py-8 px-4 bg-gradient-to-b from-slate-900/80 to-slate-950 rounded-2xl border border-slate-800 backdrop-blur">
        <h2 className="text-3xl md:text-5xl font-black mb-3 tracking-tight">
          GRAND THEFT AUTO VI HUB
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mb-6">
          Access complete mission walkthroughs, verified cheat codes, and local state saving.
        </p>

        {/* Search Bar */}
        <div className="max-w-lg mx-auto relative">
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search cheats, codes, or categories (e.g. 'health', 'weapons')..." 
            className="w-full px-5 py-3.5 bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:border-pink-500 text-slate-100 text-sm shadow-inner placeholder:text-slate-600"
          />
        </div>
      </section>

      {/* Main Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        
        {/* Left 2 Columns: Progress, Cheats & Map */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* 100% Completion Tracker (Interactive & Saved) */}
          <section className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-cyan-400">🏆 100% Completion Progress</h3>
                <p className="text-xs text-slate-400">Click items to complete. Saved to your browser.</p>
              </div>
              <button 
                onClick={resetProgress}
                className="text-xs text-slate-500 hover:text-red-400 underline transition"
              >
                Reset
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-300">Completion Score</span>
                <span className="text-cyan-400">{progressPercent}%</span>
              </div>
              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className="bg-gradient-to-r from-pink-500 to-cyan-400 h-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-2">
              {checklist.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                    completedItems[item.id]
                      ? 'bg-slate-900/80 border-cyan-500/50 text-slate-400'
                      : 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={!!completedItems[item.id]} 
                      onChange={() => {}} // Handled by parent div onClick
                      className="h-4 w-4 rounded accent-cyan-400"
                    />
                    <span className={`text-sm ${completedItems[item.id] ? 'line-through' : 'font-medium'}`}>
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[10px] bg-slate-950 text-slate-500 px-2 py-1 rounded border border-slate-800">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Cheat Codes Panel */}
          <section className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-pink-400 flex items-center gap-2">
                ⚡ Verified Cheat Codes
              </h3>
              <span className="text-xs bg-pink-950 text-pink-300 border border-pink-800/50 px-2.5 py-1 rounded-full font-mono">
                {filteredCheats.length} Available
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredCheats.map((cheat) => (
                <div key={cheat.id} className="bg-slate-900 border border-slate-800 p-4 rounded-xl hover:border-slate-700 transition">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-slate-800 text-cyan-400 px-2 py-0.5 rounded">
                      {cheat.category}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">{cheat.platform}</span>
                  </div>
                  <h4 className="font-bold text-sm mb-3 text-slate-200">{cheat.title}</h4>
                  
                  <button 
                    onClick={() => handleCopy(cheat.code)}
                    className="w-full bg-slate-950 hover:bg-slate-800 p-2.5 rounded-lg border border-slate-800 font-mono text-center text-pink-400 font-bold tracking-wider text-xs flex justify-between items-center px-4 transition group"
                  >
                    <span>{cheat.code}</span>
                    <span className="text-[10px] text-slate-500 group-hover:text-white transition">
                      {copiedCode === cheat.code ? '✓ Copied' : 'Click to Copy'}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Region & Intel Explorer */}
          <section className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              📍 State of Leonida Map Intel
            </h3>

            {/* Region Filters */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                    selectedRegion === reg 
                      ? 'bg-cyan-500 text-slate-950' 
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>

            {/* Location Cards */}
            <div className="space-y-3">
              {filteredMapPoints.map((pt, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-sm text-slate-200">{pt.title}</h5>
                    <p className="text-xs text-slate-400">{pt.region} • <span className="text-pink-400">{pt.type}</span></p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded ${
                    pt.danger === 'Extreme' ? 'bg-red-950 text-red-400 border border-red-800' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {pt.danger} Risk
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right 1 Column: Protagonist Switcher */}
        <aside className="space-y-8">
          
          <section className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-slate-200 mb-4">Protagonist Dossier</h3>
            
            {/* Toggle Buttons */}
            <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 mb-6">
              <button
                onClick={() => handleCharacterChange('lucia')}
                className={`py-2 rounded-lg text-xs font-bold transition ${
                  activeProtagonist === 'lucia' ? 'bg-pink-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                LUCIA
              </button>
              <button
                onClick={() => handleCharacterChange('jason')}
                className={`py-2 rounded-lg text-xs font-bold transition ${
                  activeProtagonist === 'jason' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                JASON
              </button>
            </div>

            {/* Character Info */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-4">
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-mono">Character</span>
                <h4 className="text-xl font-black text-white">{characterData[activeProtagonist].name}</h4>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-mono">Background</span>
                <p className="text-xs text-slate-300">{characterData[activeProtagonist].origin}</p>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-mono">Specialty</span>
                <p className="text-xs text-pink-400 font-semibold">{characterData[activeProtagonist].specialty}</p>
              </div>

              <div className="border-t border-slate-800 pt-3">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-mono mb-2">Key Missions</span>
                <ul className="space-y-1.5">
                  {characterData[activeProtagonist].missions.map((m, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

        </aside>

      </div>

      <footer className="max-w-6xl mx-auto border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
        <p>Vice City Central • Grand Theft Auto VI Unofficial Community Hub & Database</p>
      </footer>
    </main>
  );
}