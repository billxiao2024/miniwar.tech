import type { Metadata } from 'next';
import Link from 'next/link';
import { getGameConfig } from '@/lib/data';
import { generateBreadcrumbSchema, generateVideoGameSchema } from '@/lib/seo';

const config = getGameConfig();
const baseUrl = config.seo.baseUrl;

export const metadata: Metadata = {
  title: `${config.game.name} Roblox Guide & Tools (2026) — Codes, Calculator, Tier List`,
  description: 'Your ultimate companion for Mini War Roblox. Get free codes, use the progression calculator, check the tier list, and master beginner guides. Updated daily with the latest strategies.',
  keywords: ['Mini War Roblox', 'Mini War codes', 'Mini War guide', 'Mini War calculator', 'Mini War tier list', 'Mini War tips'],
  alternates: { canonical: `${baseUrl}/` },
};

export default function HomePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
  ]);
  const videoGameSchema = generateVideoGameSchema();

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-sm font-semibold border border-amber-500/30">
            ⚔️ Strategy + Simulation on Roblox
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            Mini War Roblox<br />
            <span className="text-amber-400">Guide & Tools</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Build your farm, train your army, dominate the battlefield. Everything you need to become a top player — codes, calculators, tier lists, and guides.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/codes" className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-colors">
              🎁 Get Codes
            </Link>
            <Link href="/calculator" className="px-8 py-3 bg-white/10 hover:bg-white/20 font-semibold rounded-lg border border-white/20 transition-colors">
              📊 Progression Calculator
            </Link>
            <Link href="/tier-list" className="px-8 py-3 bg-white/10 hover:bg-white/20 font-semibold rounded-lg border border-white/20 transition-colors">
              🏆 Tier List
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl font-black text-amber-400">{config.stats.visits}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Total Visits</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl font-black text-amber-400">{config.stats.favorites}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Favorites</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl font-black text-green-400">{config.stats.onlineNow}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Online Now</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl font-black text-blue-400">v{config.game.currentVersion}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Version</div>
          </div>
        </div>
      </section>

      {/* Quick Access Tools */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Essential Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Codes Card */}
          <Link href="/codes" className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all">
            <div className="text-4xl mb-3">🎁</div>
            <h3 className="text-xl font-bold mb-2">Redeem Codes</h3>
            <p className="text-gray-500 text-sm mb-4">Active codes for free gold, units, and upgrades. Updated daily.</p>
            <span className="text-amber-500 font-semibold text-sm group-hover:text-amber-400">8 Active Codes →</span>
          </Link>

          {/* Calculator Card */}
          <Link href="/calculator" className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-xl font-bold mb-2">Progression Calculator</h3>
            <p className="text-gray-500 text-sm mb-4">Calculate best farming routes and optimize your income.</p>
            <span className="text-blue-500 font-semibold text-sm group-hover:text-blue-400">Calculate Now →</span>
          </Link>

          {/* Tier List Card */}
          <Link href="/tier-list" className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 transition-all">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="text-xl font-bold mb-2">Unit Tier List</h3>
            <p className="text-gray-500 text-sm mb-4">Rankings for all units and buildings. Know what's best.</p>
            <span className="text-red-500 font-semibold text-sm group-hover:text-red-400">View Rankings →</span>
          </Link>

          {/* Beginner Guide Card */}
          <Link href="/beginner-guide" className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all">
            <div className="text-4xl mb-3">📖</div>
            <h3 className="text-xl font-bold mb-2">Beginner Guide</h3>
            <p className="text-gray-500 text-sm mb-4">Start strong. Farm strategy, building priorities, army tips.</p>
            <span className="text-green-500 font-semibold text-sm group-hover:text-green-400">Start Here →</span>
          </Link>

        </div>
      </section>

      {/* Game Overview */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">About the Game</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Build. Train. Dominate.</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                <strong>Mini War</strong> by <span className="text-amber-500">{config.game.developer}</span> is a strategy/simulation game where you start with a humble farm and build toward a full-scale military operation.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Your goal: accumulate resources, build factories and military infrastructure, and train an army of infantry, mechs, helicopters, and tanks to conquer the battlefield.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Strategy', 'Simulation', 'Farm Building', 'Army Management', 'Combat'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border">
              <h4 className="font-bold mb-4">Quick Facts</h4>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Developer</dt>
                  <dd className="font-semibold">{config.game.developer}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Genre</dt>
                  <dd className="font-semibold">{config.game.genre}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Game ID</dt>
                  <dd className="font-mono text-sm">{config.game.robloxId}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Platforms</dt>
                  <dd className="font-semibold">{config.game.platforms.join(', ')}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Last Updated</dt>
                  <dd className="font-semibold">{config.game.lastUpdated}</dd>
                </div>
              </dl>
              <a
                href={`https://www.roblox.com/games/${config.game.robloxId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-center px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-colors"
              >
                Play on Roblox →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* More Resources */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">More Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/updates" className="p-6 rounded-xl border hover:border-blue-500/50 transition-colors">
            <div className="text-3xl mb-3">📢</div>
            <h3 className="text-lg font-bold mb-2">Update Tracker</h3>
            <p className="text-gray-500 text-sm">Track the latest game updates and patch notes.</p>
          </Link>
          <Link href="/wiki" className="p-6 rounded-xl border hover:border-purple-500/50 transition-colors">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-lg font-bold mb-2">Wiki Database</h3>
            <p className="text-gray-500 text-sm">Complete reference for all units, buildings, and mechanics.</p>
          </Link>
          <Link href="/tips" className="p-6 rounded-xl border hover:border-green-500/50 transition-colors">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-lg font-bold mb-2">Money-Making Tips</h3>
            <p className="text-gray-500 text-sm">Maximize your income with proven strategies.</p>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border">
              <h3 className="font-bold mb-2">How do I redeem codes in Mini War?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Open the game on Roblox, locate the codes button (usually in the settings or main menu), enter the code, and claim your reward. We've verified all active codes on our Codes page.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border">
              <h3 className="font-bold mb-2">What is the best unit in Mini War?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">According to our tier list, Tanks rank S-tier as the most powerful unit, followed by Helicopters. However, combined arms strategies (mixing infantry, mechs, and tanks) tend to perform better than single-unit compositions.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border">
              <h3 className="font-bold mb-2">How do I earn money fast?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Use our Progression Calculator to find the most efficient farming activity for your level. Generally, Boss Raids offer the highest gold per hour (35,000+), followed by Air Strike Operations (25,000).</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border">
              <h3 className="font-bold mb-2">Is this site official?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">No, this is a fan-made companion site. We are not affiliated with Roblox Corporation or the developer mayrushart. All game data is sourced from public information.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}