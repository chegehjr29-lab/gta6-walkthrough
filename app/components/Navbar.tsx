import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400">
            VICE CITY HUB
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 text-sm font-semibold">
          <Link href="/" className="text-slate-300 hover:text-pink-400 transition-colors">
            Home
          </Link>
          <Link href="/map" className="text-slate-300 hover:text-cyan-400 transition-colors">
            Map
          </Link>
          <Link href="/weapons" className="text-slate-300 hover:text-pink-400 transition-colors">
            Weapons
          </Link>
          <Link href="/vehicles" className="text-slate-300 hover:text-purple-400 transition-colors">
            Vehicles
          </Link>
          <Link href="/missions" className="text-slate-300 hover:text-amber-400 transition-colors">
            Missions
          </Link>
        </div>

      </div>
    </nav>
  );
}