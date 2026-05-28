import type { Metadata } from 'next';
import Link from 'next/link';
import { getGameConfig } from '@/lib/data';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';

const config = getGameConfig();
const baseUrl = config.seo.baseUrl;

export const metadata: Metadata = {
  title: `Mini War Tips & Money-Making Guide (2026) — How to Get Rich Fast`,
  description: 'Pro tips and strategies for Mini War Roblox. Learn how to earn money fast, build the best army, and maximize your progression efficiency.',
  keywords: ['Mini War tips', 'Mini War money', 'how to get rich fast Mini War', 'Mini War strategy guide'],
  alternates: { canonical: `${baseUrl}/tips` },
};

export default function TipsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Tips & Tricks', url: '/tips' },
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: 'What is the fastest way to earn money in Mini War?',
      answer: 'Boss Raids at level 25+ offer 35,000+ gold per hour — the fastest method. Before level 25, focus on Air Strike Operations (level 20+, 25,000/hr) or Military Missions (level 15+, 15,000/hr).',
    },
    {
      question: 'Should I invest in economy or military first?',
      answer: 'Economy first. Build Farm → Factory → Barracks in sequence. A strong economic foundation compounds your ability to build military units faster. Only start heavy military investment after your income is stable above 5,000/hr.',
    },
    {
      question: 'What is the best army composition?',
      answer: 'Combined arms: 40% Tanks (heavy damage), 30% Helicopters (mobility), 20% Combat Mechs (versatile), 10% Infantry (swarm/distraction). This composition handles all content from mid-game to end-game.',
    },
    {
      question: 'How do I prepare for Boss Raids?',
      answer: 'Reach level 25, build Military Base, save at least 20,000 gold for army maintenance, and bring a balanced army with tanks as primary damage. Coordinate with teammates if playing co-op — combined arms are essential.',
    },
  ]);

  const moneyTips = [
    {
      title: 'Compound Your Passive Income',
      description: 'Always upgrade your highest-income building. As your income grows, the same percentage upgrade yields more gold. Check your income summary daily and upgrade the best performer.',
      icon: '📈',
      level: 'Early Game',
    },
    {
      title: 'Never Miss Defense Contracts',
      description: 'Defense Contracts offer steady, low-risk income (6,000/hr). Complete them daily — the risk/reward ratio is excellent for players below level 15 who can\'t handle Military Missions safely.',
      icon: '🛡️',
      level: 'All Levels',
    },
    {
      title: 'Timing Your Resource Node Sessions',
      description: 'Resource Nodes are most efficient in 30-minute sessions. Set a timer, grind the node, then reassess. Longer sessions see diminishing returns due to fatigue and enemy scaling.',
      icon: '⛏️',
      level: 'Mid Game (Lvl 10+)',
    },
    {
      title: 'Military Missions: The Sweet Spot',
      description: 'At level 15, Military Missions unlock. They offer 15,000/hr — triple what Resource Nodes offer. Bring a mixed army: infantry for distraction, mechs for sustained damage. Never go in with only one unit type.',
      icon: '⚔️',
      level: 'Mid Game (Lvl 15+)',
    },
    {
      title: 'Air Strike Operations: Best ROI',
      description: 'At level 20, Air Strike Operations become available (25,000/hr). Helicopters are expensive (5,000 each) but offer the best gold-per-hour for players focused on income. If you\'re building an economy, prioritize Airport.',
      icon: '🚁',
      level: 'Late Game (Lvl 20+)',
    },
    {
      title: 'Boss Raids: The Ultimate Grind',
      description: 'At level 25, Boss Raids offer 35,000+ gold per hour. Bring your best army — tanks are non-negotiable for boss damage, helicopters for mobility, infantry for distraction. Coordinate if playing co-op.',
      icon: '💀',
      level: 'End Game (Lvl 25+)',
    },
  ];

  const armyTips = [
    {
      title: 'Infantry: The Entry Unit',
      description: 'Infantry cost 100 gold and are the cheapest unit. Use them for swarm tactics (overwhelm with numbers), defense waves, and early-game probing. Don\'t rely on them for serious combat beyond level 10.',
      icon: '🪖',
      tier: 'C',
    },
    {
      title: 'Worker Mechs: Economy Boost',
      description: 'Worker Mechs boost resource gathering efficiency. If you\'re serious about farming, keep 2-3 Worker Mechs active. The resource gathering bonus pays for itself within a few hours.',
      icon: '🔧',
      tier: 'B',
    },
    {
      title: 'Combat Mechs: The Workhorse',
      description: 'At 2,000 gold and 120 power, Combat Mechs have the best value ratio in the game. They\'re the backbone of mid-game armies and should make up the bulk of your military until you can afford tanks.',
      icon: '🤖',
      tier: 'A',
    },
    {
      title: 'Helicopters: Mobility Kings',
      description: 'Helicopters deal high damage and move fast. They\'re essential for Air Strike Operations and provide reconnaissance value. In battle, use them to hit enemy weak points and retreat when damaged.',
      icon: '🚁',
      tier: 'S',
    },
    {
      title: 'Tanks: Maximum Firepower',
      description: 'Tanks are the most expensive and most powerful unit. At 8,000 gold with 450 power, they dominate late-game battles and boss raids. Prioritize tanks if going heavy assault strategy.',
      icon: '🎯',
      tier: 'S',
    },
  ];

  const generalTips = [
    { text: 'Always check for active codes before starting a session — free gold adds up.', source: 'Codes Page' },
    { text: 'Keep at least 20% of your gold as reserve for emergencies or opportunities.', source: 'Economy' },
    { text: 'Play during off-peak hours for less competition on public servers.', source: 'General' },
    { text: 'Join a guild or team — combined operations earn more than solo play.', source: 'Social' },
    { text: 'Use the Progression Calculator to find your optimal farming activity for your level.', source: 'Calculator' },
    { text: 'Balance income generation with military investment — don\'t go all-in on one.', source: 'Strategy' },
    { text: 'Watch mayrushart YouTube videos for update previews and exclusive codes.', source: 'News' },
    { text: 'Upgrade buildings during maintenance periods to be ready for new content.', source: 'Pro' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-amber-400">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Tips & Tricks</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-black mb-2">Tips & Money-Making Guide</h1>
        <p className="text-gray-500">
          Expert strategies to maximize your income, build the best army, and progress faster in Mini War Roblox.
        </p>
      </div>

      {/* Money-Making Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span>💰</span> Money-Making Strategies
        </h2>
        <div className="space-y-4">
          {moneyTips.map((tip, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl border p-5">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{tip.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold">{tip.title}</h3>
                    <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded">{tip.level}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Army Composition Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span>⚔️</span> Unit-by-Unit Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {armyTips.map((tip, i) => {
            const tierColors: Record<string, string> = {
              'S': 'bg-red-500/20 text-red-400 border-red-500/40',
              'A': 'bg-orange-500/20 text-orange-400 border-orange-500/40',
              'B': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',
              'C': 'bg-gray-500/20 text-gray-400 border-gray-500/40',
            };
            return (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl border p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{tip.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold">{tip.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded border font-mono ${tierColors[tip.tier]}`}>
                        T{tip.tier}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tip.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Quick Tips</h2>
        <div className="bg-gradient-to-br from-amber-50 to-green-50 dark:from-amber-950/20 dark:to-green-950/20 rounded-2xl border border-amber-500/20 p-6">
          <div className="space-y-3">
            {generalTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <span className="text-amber-500">→</span>
                <span className="flex-1">{tip.text}</span>
                <span className="text-xs bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded text-gray-500">{tip.source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Income Progression Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Income by Level</h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="text-left p-4 font-bold">Level Range</th>
                <th className="text-left p-4 font-bold">Best Activity</th>
                <th className="text-center p-4 font-bold">Gold/Hour</th>
                <th className="text-left p-4 font-bold">Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4 font-semibold">1–5</td>
                <td className="p-4">Basic Farm</td>
                <td className="p-4 text-center font-mono text-green-500">1,500</td>
                <td className="p-4"><span className="text-green-500">Low</span></td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">5–10</td>
                <td className="p-4">Factory Production</td>
                <td className="p-4 text-center font-mono text-green-500">4,500</td>
                <td className="p-4"><span className="text-green-500">Low</span></td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">10–15</td>
                <td className="p-4">Resource Node</td>
                <td className="p-4 text-center font-mono text-green-500">8,500</td>
                <td className="p-4"><span className="text-yellow-500">Medium</span></td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">15–20</td>
                <td className="p-4">Military Mission</td>
                <td className="p-4 text-center font-mono text-green-500">15,000</td>
                <td className="p-4"><span className="text-orange-500">High</span></td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">20–25</td>
                <td className="p-4">Air Strike Operation</td>
                <td className="p-4 text-center font-mono text-green-500">25,000</td>
                <td className="p-4"><span className="text-orange-500">High</span></td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">25+</td>
                <td className="p-4">Boss Raid</td>
                <td className="p-4 text-center font-mono text-green-500">35,000+</td>
                <td className="p-4"><span className="text-red-500">Very High</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-slate-900 text-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-4">Ready to Put These Tips to Work?</h3>
        <p className="text-gray-400 mb-6">Use our tools to plan your strategy and start climbing the ranks.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/calculator" className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-colors">
            📊 Progression Calculator
          </Link>
          <Link href="/tier-list" className="px-8 py-3 bg-white/10 hover:bg-white/20 font-semibold rounded-lg border border-white/20 transition-colors">
            🏆 View Tier List
          </Link>
          <Link href="/codes" className="px-8 py-3 bg-green-600 hover:bg-green-500 font-semibold rounded-lg transition-colors">
            🎁 Get Codes
          </Link>
        </div>
      </div>
    </div>
  );
}