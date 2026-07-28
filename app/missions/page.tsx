'use client';

import React, { useState, useEffect, useMemo } from 'react';
import missionsData from '../../data/missions.json';

interface Mission {
  id: string;
  title: string;
  protagonist: string;
  region: string;
  difficulty: string;
  reward: string;
  summary: string;
  tasks: string[];
}

export default function MissionsPage() {
  const [search, setSearch] = useState('');
  const [filterProtagonist, setFilterProtagonist] = useState('All');
  const [completedMissions, setCompletedMissions] = useState<Record<string, boolean>>({});
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});

  // Load saved progress from localStorage on start
  useEffect(() => {
    const savedMissions = localStorage.getItem('gta6_completed_missions');
    const savedTasks = localStorage.getItem('gta6_completed_tasks');
    if (savedMissions) setCompletedMissions(JSON.parse(savedMissions));
    if (savedTasks) setCompletedTasks(JSON.parse(savedTasks));
  }, []);

  // Toggle mission completion & persist to storage
  const toggleMission = (id: string) => {
    const updated = { ...completedMissions, [id]: !completedMissions[id] };
    setCompletedMissions(updated);
    localStorage.setItem('gta6_completed_missions', JSON.stringify(updated));
  };

  // Toggle sub-task completion & persist to storage
  const toggleTask = (taskId: string) => {
    const updated = { ...completedTasks, [taskId]: !completedTasks[taskId] };
    setCompletedTasks(updated);
    localStorage.setItem('gta6_completed_tasks', JSON.stringify(updated));
  };

  // Dynamic search and filter logic
  const filteredMissions = useMemo(() => {
    return (missionsData as Mission[]).filter((m) => {
      const matchesSearch = m.title.toLowerCase().includes(search.toLowerCase()) ||
                            m.region.toLowerCase().includes(search.toLowerCase());
      const matchesProtagonist = filterProtagonist === 'All' || m.protagonist === filterProtagonist;
      return matchesSearch && matchesProtagonist;
    });
  }, [search, filterProtagonist]);

  // Compute progress percentage dynamically
  const totalMissions = missionsData.length;
  const completedCount = Object.values(completedMissions).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalMissions) * 100) || 0;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Progress Header */}
        <header className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-pink-500 uppercase tracking-widest">Walkthrough Engine</span>
              <h1 className="text-3xl font-black text-white">Mission Progress Tracker</h1>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-cyan-400">{progressPercent}%</span>
              <p className="text-xs text-slate-400">{completedCount} of {totalMissions} Completed</p>
            </div>
          </div>

          <div className="w-full bg-slate-950 rounded-full h-3 overflow-hidden border border-slate-800">
            <div 
              className="bg-gradient-to-r from-pink-500 to-cyan-400 h-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </header>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-900/50 p-4 border border-slate-800 rounded-xl">
          <input
            type="text"
            placeholder="Search mission title or region..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-72 bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
          />

          <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto">
            {['All', 'Lucia', 'Jason', 'Both'].map((p) => (
              <button
                key={p}
                onClick={() => setFilterProtagonist(p)}
                className={`px-3 py-1.5 rounded-lg text-xs font-extrabold uppercase transition-all ${
                  filterProtagonist === p
                    ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/20'
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Mission Cards List */}
        <div className="space-y-6">
          {filteredMissions.map((m) => {
            const isCompleted = !!completedMissions[m.id];

            return (
              <div 
                key={m.id}
                className={`border rounded-2xl p-6 transition-all ${
                  isCompleted 
                    ? 'bg-slate-900/40 border-emerald-500/30 opacity-75' 
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {m.protagonist}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {m.difficulty}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">📍 {m.region}</span>
                    </div>
                    <h2 className="text-xl font-bold text-white">{m.title}</h2>
                  </div>

                  <button
                    onClick={() => toggleMission(m.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                      isCompleted
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-slate-950 border border-slate-700 text-slate-300 hover:border-pink-500'
                    }`}
                  >
                    {isCompleted ? '✓ Completed' : 'Mark as Done'}
                  </button>
                </div>

                <p className="text-sm text-slate-400 mb-4">{m.summary}</p>

                <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Objectives Checklist
                  </span>
                  {m.tasks.map((task, idx) => {
                    const taskKey = `${m.id}_task_${idx}`;
                    const isTaskDone = !!completedTasks[taskKey];

                    return (
                      <label 
                        key={idx}
                        className="flex items-center space-x-3 text-xs text-slate-300 cursor-pointer hover:text-white"
                      >
                        <input
                          type="checkbox"
                          checked={isTaskDone}
                          onChange={() => toggleTask(taskKey)}
                          className="rounded border-slate-700 bg-slate-900 text-pink-500 focus:ring-0"
                        />
                        <span className={isTaskDone ? 'line-through text-slate-500' : ''}>
                          {task}
                        </span>
                      </label>
                    );
                  })}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 text-xs font-mono text-pink-400">
                  Reward: {m.reward}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}