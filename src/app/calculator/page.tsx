'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import progressionData from '@/data/calculator-progression.json';

interface Activity {
  id: string;
  name: string;
  description: string;
  levelRequired: number;
  goldPerHour: number;
  expPerHour: number;
  riskLevel: string;
  bestUnits: string[];
  strategy: string;
}

interface Unit {
  id: string;
  name: string;
  cost: number;
  power: number;
  bestFor: string[];
  tier: string;
}

interface Building {
  id: string;
  name: string;
  cost: number;
  income: number;
  unlockLevel: number;
  description: string;
}

const RISK_COLORS: Record<string, string> = {
  'Low': 'text-green-400 bg-green-500/10 border-green-500/20',
  'Medium': 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  'High': 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  'Very High': 'text-red-400 bg-red-500/10 border-red-500/20',
};

const TIER_COLORS: Record<string, string> = {
  'S': 'bg-red-500/20 text-red-400 border-red-500/40',
  'A': 'bg-orange-500/20 text-orange-400 border-orange-500/40',
  'B': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',
  'C': 'bg-gray-500/20 text-gray-400 border-gray-500/40',
};

export default function CalculatorPage() {
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  const activities = progressionData.activities as Activity[];
  const units = progressionData.units as Unit[];
  const buildings = progressionData.buildings as Building[];

  const availableActivities = useMemo(() => {
    return activities.filter((a) => a.levelRequired <= selectedLevel);
  }, [selectedLevel, activities]);

  const bestActivity = useMemo(() => {
    return availableActivities.reduce((best, a) =>
      a.goldPerHour > best.goldPerHour ? a : best
    , availableActivities[0] || null);
  }, [availableActivities]);

  const suggestedUnits = useMemo(() => {
    if (!bestActivity) return [];
    return bestActivity.bestUnits.map((name) =>
      units.find((u) => u.name.toLowerCase().includes(name.toLowerCase()))
    ).filter(Boolean) as Unit[];
  }, [bestActivity, units]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-amber-400">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Calculator</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-black mb-2">Progression Calculator</h1>
        <p className="text-gray-500">
          Calculate the best farming routes for your level. Updated {progressionData.lastUpdated}.
        </p>
      </div>

      {/* Level Selector */}
      <div className="mb-10 p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-purple-950/20 rounded-2xl border">
        <h2 className="text-lg font-bold mb-4">Select Your Level</h2>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={1}
            max={30}
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(Number(e.target.value))}
            className="flex-1 accent-blue-600"
          />
          <div className="text-center">
            <div className="text-4xl font-black text-blue-600">{selectedLevel}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Level</div>
          </div>
        </div>
      </div>

      {/* Best Activity Recommendation */}
      {bestActivity && (
        <div className="mb-10 p-6 bg-gradient-to-br from-amber-50 to-green-50 dark:from-amber-950/30 dark:to-green-950/20 rounded-2xl border border-amber-500/30">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs text-amber-600 dark:text-amber-400 uppercase tracking-wider font-semibold mb-1">Best Activity for Level {selectedLevel}</div>
              <h3 className="text-2xl font-black text-amber-600 dark:text-amber-400">{bestActivity.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{bestActivity.description}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-green-500">{bestActivity.goldPerHour.toLocaleString()}</div>
              <div className="text-xs text-gray-500">Gold/Hour</div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className={`px-3 py-1 rounded-full border text-sm font-semibold ${RISK_COLORS[bestActivity.riskLevel]}`}>
              {bestActivity.riskLevel} Risk
            </span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-sm">
              +{bestActivity.expPerHour} XP/Hour
            </span>
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">
              Requires Level {bestActivity.levelRequired}
            </span>
          </div>
          <div className="mt-4 p-4 bg-white/50 dark:bg-black/20 rounded-xl">
            <h4 className="font-bold text-sm mb-2">Strategy</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{bestActivity.strategy}</p>
          </div>
        </div>
      )}

      {/* All Activities */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">All Activities</h2>
        <div className="space-y-3">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={`p-4 rounded-xl border transition-colors ${
                activity.levelRequired > selectedLevel
                  ? 'bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 opacity-50'
                  : activity.id === bestActivity?.id
                  ? 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold">{activity.name}</h3>
                    {activity.levelRequired > selectedLevel && (
                      <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">Lvl {activity.levelRequired}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{activity.description}</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-black text-green-500">{activity.goldPerHour.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">gold/hr</div>
                  </div>
                  <div className="text-center">
                    <div className="font-black text-blue-500">{activity.expPerHour.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">xp/hr</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${RISK_COLORS[activity.riskLevel]}`}>
                    {activity.riskLevel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Units Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Unit Power Rankings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {units.map((unit) => (
            <div
              key={unit.id}
              onClick={() => setSelectedUnit(selectedUnit === unit.id ? null : unit.id)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedUnit === unit.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-300'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">{unit.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded border font-mono ${TIER_COLORS[unit.tier]}`}>
                  T{unit.tier}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded text-center">
                  <div className="text-xs text-gray-400">Cost</div>
                  <div className="font-mono font-bold">{unit.cost.toLocaleString()}</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded text-center">
                  <div className="text-xs text-gray-400">Power</div>
                  <div className="font-mono font-bold text-amber-500">{unit.power}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {unit.bestFor.map((tag) => (
                  <span key={tag} className="text-xs bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buildings */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Buildings</h2>
        <div className="space-y-3">
          {buildings.map((building) => (
            <div
              key={building.id}
              className={`p-4 rounded-xl border ${
                building.unlockLevel > selectedLevel
                  ? 'bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 opacity-50'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold">{building.name}</h3>
                    {building.unlockLevel > selectedLevel && (
                      <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">Unlocks Lvl {building.unlockLevel}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{building.description}</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Cost</div>
                    <div className="font-mono font-bold">{building.cost.toLocaleString()}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Income</div>
                    <div className="font-mono font-bold text-green-500">{building.income.toLocaleString()}/hr</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progression Tips */}
      <div className="bg-slate-900 text-white rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-4">Pro Tips</h2>
        <ul className="space-y-2">
          {progressionData.progressionTips.map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="text-amber-400">→</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}