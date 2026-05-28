import type { Metadata } from 'next';
import Link from 'next/link';
import { getGameConfig } from '@/lib/data';
import { generateBreadcrumbSchema } from '@/lib/seo';

const config = getGameConfig();
const baseUrl = config.seo.baseUrl;

export const metadata: Metadata = {
  title: `Mini War Wiki (2026) — Complete Guide to Units, Buildings & Mechanics`,
  description: 'Complete Mini War wiki database. Learn about all units (infantry, mechs, helicopters, tanks), buildings, farming strategies, and game mechanics.',
  keywords: ['Mini War wiki', 'Mini War units', 'Mini War buildings', 'Mini War game guide'],
  alternates: { canonical: `${baseUrl}/wiki` },
};

const units = [
  {
    id: 'infantry',
    name: 'Infantry',
    emoji: '🪖',
    category: 'Infantry',
    description: 'The basic ground unit. Cheap to produce and fast to train. Best for swarm tactics and defense waves.',
    stats: { cost: 100, power: 10, health: 50, speed: 'Fast' },
    bestFor: ['Early game', 'Defense', 'Swarm tactics'],
  },
  {
    id: 'worker-mech',
    name: 'Worker Mech',
    emoji: '🔧',
    category: 'Utility Mech',
    description: 'A utility unit designed for resource gathering. Increases efficiency at farms and resource nodes.',
    stats: { cost: 500, power: 30, health: 200, speed: 'Medium' },
    bestFor: ['Resource gathering', 'Economy boost'],
  },
  {
    id: 'combat-mech',
    name: 'Combat Mech',
    emoji: '🤖',
    category: 'Combat Mech',
    description: 'The backbone of mid-game armies. Balanced stats with good power-to-cost ratio.',
    stats: { cost: 2000, power: 120, health: 400, speed: 'Medium' },
    bestFor: ['Mid-game combat', 'Boss raids', 'General purpose'],
  },
  {
    id: 'helicopter',
    name: 'Helicopter',
    emoji: '🚁',
    category: 'Air',
    description: 'Air superiority unit. High mobility and strong damage. Unlocks air strike missions.',
    stats: { cost: 5000, power: 250, health: 300, speed: 'Very Fast' },
    bestFor: ['Air strikes', 'Mobility', 'Fast response'],
  },
  {
    id: 'tank',
    name: 'Tank',
    emoji: '🎯',
    category: 'Heavy Armor',
    description: 'The ultimate heavy hitter. Highest power and health of any unit. Dominates late-game.',
    stats: { cost: 8000, power: 450, health: 800, speed: 'Slow' },
    bestFor: ['Heavy assault', 'Boss damage', 'End-game'],
  },
];

const buildings = [
  { id: 'farm', name: 'Farm', emoji: '🌾', cost: 500, income: 1500, unlockLevel: 1, description: 'Basic income building. Generates passive gold over time.' },
  { id: 'factory', name: 'Factory', emoji: '🏭', cost: 3000, income: 4500, unlockLevel: 5, description: 'Industrial production. Multiplies farm output. Major milestone.' },
  { id: 'barracks', name: 'Barracks', emoji: '🏠', cost: 2500, income: 2000, unlockLevel: 8, description: 'Trains infantry units. Required for military missions.' },
  { id: 'mech-bay', name: 'Mech Bay', emoji: '🔩', cost: 8000, income: 6000, unlockLevel: 12, description: 'Produces combat mechs. Essential for mid-game progression.' },
  { id: 'airport', name: 'Airport', emoji: '✈️', cost: 15000, income: 12000, unlockLevel: 18, description: 'Deploys helicopters. Unlocks air strike operations.' },
  { id: 'military-base', name: 'Military Base', emoji: '🏰', cost: 25000, income: 20000, unlockLevel: 25, description: 'Maximum military infrastructure. Enables boss raids.' },
];

const mechanics = [
  {
    category: 'Economy',
    items: [
      { name: 'Passive Income', description: 'Buildings generate gold automatically over time, even when you\'re offline. Check your income summary in the HUD.' },
      { name: 'Active Farming', description: 'Participate in activities like Resource Nodes and Military Missions to earn significantly more gold than passive income alone.' },
      { name: 'Upgrade Priorities', description: 'Always upgrade your highest-income building first. Use the Progression Calculator to find the optimal activity for your level.' },
    ],
  },
  {
    category: 'Military',
    items: [
      { name: 'Unit Composition', description: 'Combined arms (mixing infantry, mechs, helicopters, tanks) outperforms single-unit compositions. Balance is key.' },
      { name: 'Unit Synergy', description: 'Infantry distracts enemies while tanks deal damage. Helicopters provide reconnaissance and fast response. Use synergies to maximize effectiveness.' },
      { name: 'Boss Mechanics', description: 'Bosses have phases — watch for attack patterns and dodge. Bring a balanced army with tanks as primary damage dealers.' },
    ],
  },
  {
    category: 'Progression',
    items: [
      { name: 'Level System', description: 'Gain experience from activities and missions. Higher levels unlock new buildings, units, and activities.' },
      { name: 'Building Order', description: 'Farm → Factory → Barracks → Mech Bay → Airport → Military Base. This is the optimal building sequence for progression.' },
      { name: 'Activity Unlock', description: 'Each activity has a minimum level requirement. Start with basic farming, progress to resource nodes, then military missions, then boss raids.' },
    ],
  },
];

export default function WikiPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wiki', url: '/wiki' },
  ]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-amber-400">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Wiki</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-black mb-2">Mini War Wiki</h1>
        <p className="text-gray-500">
          Complete database for all units, buildings, and game mechanics. Everything you need to master Mini War.
        </p>
      </div>

      {/* Units */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span>⚔️</span> Units
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {units.map((unit) => (
            <div key={unit.id} className="bg-white dark:bg-gray-800 rounded-xl border p-5">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{unit.emoji}</span>
                <div>
                  <h3 className="text-lg font-bold">{unit.name}</h3>
                  <span className="text-xs bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded">{unit.category}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{unit.description}</p>
              <div className="grid grid-cols-4 gap-2 mb-4">
                <div className="text-center p-2 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <div className="text-xs text-gray-400">Cost</div>
                  <div className="font-mono font-bold text-sm">{unit.stats.cost}</div>
                </div>
                <div className="text-center p-2 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                  <div className="text-xs text-gray-400">Power</div>
                  <div className="font-mono font-bold text-sm text-amber-500">{unit.stats.power}</div>
                </div>
                <div className="text-center p-2 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <div className="text-xs text-gray-400">Health</div>
                  <div className="font-mono font-bold text-sm text-green-500">{unit.stats.health}</div>
                </div>
                <div className="text-center p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <div className="text-xs text-gray-400">Speed</div>
                  <div className="font-mono font-bold text-sm text-blue-500">{unit.stats.speed}</div>
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
      </section>

      {/* Buildings */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span>🏗️</span> Buildings
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="text-left p-4 font-bold">Building</th>
                <th className="text-center p-4 font-bold">Level</th>
                <th className="text-center p-4 font-bold">Cost</th>
                <th className="text-center p-4 font-bold">Income</th>
                <th className="text-left p-4 font-bold">Description</th>
              </tr>
            </thead>
            <tbody>
              {buildings.map((building) => (
                <tr key={building.id} className="border-t">
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{building.emoji}</span>
                      <span className="font-semibold">{building.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <span className="font-mono font-bold text-blue-500">Lvl {building.unlockLevel}</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="font-mono">{building.cost.toLocaleString()}</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="font-mono text-green-500">{building.income.toLocaleString()}/hr</span>
                  </td>
                  <td className="p-4 text-gray-500 text-xs">{building.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Game Mechanics */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span>📖</span> Game Mechanics
        </h2>
        <div className="space-y-6">
          {mechanics.map((section) => (
            <div key={section.category} className="bg-white dark:bg-gray-800 rounded-2xl border p-6">
              <h3 className="text-lg font-bold mb-4 text-amber-500">{section.category}</h3>
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <div key={i} className="border-l-2 border-amber-500/30 pl-4">
                    <h4 className="font-semibold mb-1">{item.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">Ready to Play?</h3>
          <p className="text-gray-400">Use these tools to plan your strategy and dominate.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/calculator" className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-colors">
            📊 Calculator
          </Link>
          <Link href="/tier-list" className="px-6 py-3 bg-white/10 hover:bg-white/20 font-semibold rounded-lg border border-white/20 transition-colors">
            🏆 Tier List
          </Link>
        </div>
      </div>
    </div>
  );
}