import type { Metadata } from 'next';
import Link from 'next/link';
import { getGameConfig } from '@/lib/data';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';

const config = getGameConfig();
const baseUrl = config.seo.baseUrl;

export const metadata: Metadata = {
  title: `Mini War Beginner Guide (2026) — Farm to Military Strategy`,
  description: 'Complete beginner guide for Mini War Roblox. Learn farm strategy, building priorities, army composition, and how to earn money fast. Perfect for new players.',
  keywords: ['Mini War beginner guide', 'Mini War farm strategy', 'Mini War how to earn money', 'Mini War building guide'],
  alternates: { canonical: `${baseUrl}/beginner-guide` },
};

export default function BeginnerGuidePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Beginner Guide', url: '/beginner-guide' },
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: 'What should I do first in Mini War?',
      answer: 'Start by upgrading your farm to generate passive income. Save up for a Factory at level 5 — this is the key milestone for accelerating your progression. Prioritize economy over military early on.',
    },
    {
      question: 'How do I earn money fast in Mini War?',
      answer: 'Focus on completing Military Missions once you reach level 15. Before that, Resource Nodes and Factory Production are the best options. Use our Progression Calculator to find the optimal activity for your level.',
    },
    {
      question: 'Should I focus on infantry or mechs?',
      answer: 'Early game, spam infantry for swarm tactics — they\'re cheap and effective. Mid-game (level 10+), start transitioning to Combat Mechs for better power-to-cost ratio. Late game, pivot to tanks and helicopters for maximum power.',
    },
    {
      question: 'What buildings should I prioritize?',
      answer: 'Farm first (unlocks at start), Factory at level 5, Barracks at level 8, Mech Bay at level 12, Airport at level 18, Military Base at level 25. This is the optimal building order for progression.',
    },
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-amber-400">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Beginner Guide</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-black mb-2">Beginner Guide</h1>
        <p className="text-gray-500">
          Master Mini War from scratch. This guide covers everything you need to go from a humble farm to a full-scale military operation.
        </p>
      </div>

      {/* Phase 1: Early Game */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="text-3xl">🌾</span>
          Phase 1: Early Game (Level 1–5)
        </h2>
        <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-500/20 p-6 mb-6">
          <h3 className="text-lg font-bold mb-3">Focus: Build Your Economy</h3>
          <p className="text-gray-600 dark:text-gray-400">
            In the early game, your goal is to accumulate gold as fast as possible. Don't worry about military yet — a strong economy is the foundation of everything.
          </p>
        </div>
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl border p-5">
            <h4 className="font-bold mb-2">1. Upgrade Your Farm</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              The Farm is your primary income source. Upgrade it as soon as you have spare gold. Each upgrade increases your passive gold generation.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">Gold: +1,500/hr</span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-sm rounded">Cost: 500</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border p-5">
            <h4 className="font-bold mb-2">2. Build Your First Factory</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              At level 5, unlock the Factory. This is a major milestone — factories multiply your income output and unlock new progression paths.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">Income: +4,500/hr</span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-sm rounded">Cost: 3,000</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border p-5">
            <h4 className="font-bold mb-2">3. Produce Infantry Units</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              Build a Barracks at level 8 to train infantry. They're cheap and useful for defense contracts and swarm tactics. Don't overinvest early — keep your gold flowing into upgrades.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">Unit Cost: 100</span>
              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm rounded-full">Power: 10</span>
            </div>
          </div>
        </div>
      </div>

      {/* Phase 2: Mid Game */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="text-3xl">⚙️</span>
          Phase 2: Mid Game (Level 5–15)
        </h2>
        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-500/20 p-6 mb-6">
          <h3 className="text-lg font-bold mb-3">Focus: Expand Military Capacity</h3>
          <p className="text-gray-600 dark:text-gray-400">
            With a solid economic foundation, it's time to build out your military. Balance between economy buildings and military infrastructure.
          </p>
        </div>
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl border p-5">
            <h4 className="font-bold mb-2">4. Unlock Resource Nodes</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              At level 10, Resource Nodes become available. These offer excellent gold-per-hour rates (8,500/hr) and are a major income boost.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">Gold: +8,500/hr</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-sm rounded-full">Risk: Medium</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border p-5">
            <h4 className="font-bold mb-2">5. Build Mech Bay</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              At level 12, unlock the Mech Bay. Combat Mechs are the backbone of mid-game strategy — they have the best power-to-cost ratio of any unit.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">Income: +6,000/hr</span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-sm rounded">Cost: 8,000</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border p-5">
            <h4 className="font-bold mb-2">6. Join Military Missions</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              At level 15, you unlock Military Missions. These offer the best gold-per-hour for mid-game (15,000/hr). Bring a mixed army of infantry and tanks.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">Gold: +15,000/hr</span>
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm rounded-full">Risk: High</span>
            </div>
          </div>
        </div>
      </div>

      {/* Phase 3: Late Game */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="text-3xl">💀</span>
          Phase 3: Late Game (Level 15–25+)
        </h2>
        <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl border border-red-500/20 p-6 mb-6">
          <h3 className="text-lg font-bold mb-3">Focus: Dominate the Battlefield</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Late game is about building the ultimate army. Tanks and helicopters dominate, and Boss Raids offer the highest rewards in the game.
          </p>
        </div>
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl border p-5">
            <h4 className="font-bold mb-2">7. Build Airport</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              At level 18, unlock the Airport. This allows you to deploy helicopters — the most mobile unit in the game and the key to Air Strike Operations (25,000 gold/hr).
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">Income: +12,000/hr</span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-sm rounded">Cost: 15,000</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border p-5">
            <h4 className="font-bold mb-2">8. Build Military Base</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              At level 25, unlock the Military Base — the ultimate building. This unlocks Boss Raids, which offer 35,000+ gold per hour, the highest in the game.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">Income: +20,000/hr</span>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm rounded-full">Unlocks: Boss Raids</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border p-5">
            <h4 className="font-bold mb-2">9. Master Combined Arms</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              The key to late-game dominance is combined arms: Tanks for heavy damage, Helicopters for mobility, Infantry for swarm tactics, and Mechs for versatile combat.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm rounded-full">S-Tier: Tank + Helicopter</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">A-Tier: Combat Mech</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference Table */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Building Priority Order</h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="text-left p-4 font-bold">Building</th>
                <th className="text-center p-4 font-bold">Unlock Level</th>
                <th className="text-center p-4 font-bold">Cost</th>
                <th className="text-center p-4 font-bold">Income</th>
                <th className="text-left p-4 font-bold">Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4 font-semibold">Farm</td>
                <td className="p-4 text-center">1</td>
                <td className="p-4 text-center font-mono">500</td>
                <td className="p-4 text-center font-mono text-green-500">1,500/hr</td>
                <td className="p-4"><span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 rounded text-xs">Always upgrade</span></td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">Factory</td>
                <td className="p-4 text-center">5</td>
                <td className="p-4 text-center font-mono">3,000</td>
                <td className="p-4 text-center font-mono text-green-500">4,500/hr</td>
                <td className="p-4"><span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 rounded text-xs">Critical milestone</span></td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">Barracks</td>
                <td className="p-4 text-center">8</td>
                <td className="p-4 text-center font-mono">2,500</td>
                <td className="p-4 text-center font-mono text-green-500">2,000/hr</td>
                <td className="p-4"><span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 rounded text-xs">Early military</span></td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">Mech Bay</td>
                <td className="p-4 text-center">12</td>
                <td className="p-4 text-center font-mono">8,000</td>
                <td className="p-4 text-center font-mono text-green-500">6,000/hr</td>
                <td className="p-4"><span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 rounded text-xs">Mid-game core</span></td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">Airport</td>
                <td className="p-4 text-center">18</td>
                <td className="p-4 text-center font-mono">15,000</td>
                <td className="p-4 text-center font-mono text-green-500">12,000/hr</td>
                <td className="p-4"><span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 rounded text-xs">High priority</span></td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">Military Base</td>
                <td className="p-4 text-center">25</td>
                <td className="p-4 text-center font-mono">25,000</td>
                <td className="p-4 text-center font-mono text-green-500">20,000/hr</td>
                <td className="p-4"><span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 rounded text-xs">End-game goal</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 text-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-4">Ready to Dominate?</h3>
        <p className="text-gray-400 mb-6">Use our tools to plan your progression and find the best strategies.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/calculator" className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-colors">
            📊 Progression Calculator
          </Link>
          <Link href="/tier-list" className="px-8 py-3 bg-white/10 hover:bg-white/20 font-semibold rounded-lg border border-white/20 transition-colors">
            🏆 View Unit Tier List
          </Link>
        </div>
      </div>
    </div>
  );
}