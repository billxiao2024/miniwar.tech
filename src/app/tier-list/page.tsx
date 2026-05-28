import type { Metadata } from 'next';
import Link from 'next/link';
import { getGameConfig } from '@/lib/data';
import { generateBreadcrumbSchema } from '@/lib/seo';
import tierListData from '@/data/tier-list.json';

const config = getGameConfig();
const baseUrl = config.seo.baseUrl;

export const metadata: Metadata = {
  title: `Mini War Tier List (2026) — Best Units & Buildings Ranked`,
  description: 'Official Mini War Roblox tier list. See which units (Tank, Helicopter, Mech) and buildings are S-tier vs C-tier. Updated with the latest game data.',
  keywords: ['Mini War tier list', 'Mini War best unit', 'Mini War tank tier', 'Mini War helicopter ranking'],
  alternates: { canonical: `${baseUrl}/tier-list` },
};

const TIER_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  'S': { bg: 'bg-red-500/10', border: 'border-red-500/40', text: 'text-red-400' },
  'A': { bg: 'bg-orange-500/10', border: 'border-orange-500/40', text: 'text-orange-400' },
  'B': { bg: 'bg-yellow-500/10', border: 'border-yellow-500/40', text: 'text-yellow-400' },
  'C': { bg: 'bg-gray-500/10', border: 'border-gray-500/40', text: 'text-gray-400' },
};

export default function TierListPage() {
  const tiers = tierListData.tiers as any[];
  const units = tierListData.units as any[];
  const buildings = tierListData.buildings as any[];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Tier List', url: '/tier-list' },
  ]);

  const getUnitsByTier = (tier: string) => units.filter((u) => u.tier === tier);
  const getBuildingsByTier = (tier: string) => buildings.filter((b) => b.tier === tier);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-amber-400">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Tier List</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-black mb-2">Mini War Tier List</h1>
        <p className="text-gray-500">
          Last updated: {tierListData.lastUpdated}. Rankings based on power, cost efficiency, and strategic value.
        </p>
      </div>

      {/* Tier Legend */}
      <div className="mb-10 flex flex-wrap gap-4">
        {tiers.map((tier) => (
          <div key={tier.tier} className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${TIER_COLORS[tier.tier].bg} ${TIER_COLORS[tier.tier].border}`}>
            <span className={`font-black text-lg ${TIER_COLORS[tier.tier].text}`}>Tier {tier.tier}</span>
            <span className={`text-sm ${TIER_COLORS[tier.tier].text} opacity-70`}>{tier.description}</span>
          </div>
        ))}
      </div>

      {/* Units Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Units</h2>
        <div className="space-y-6">
          {['S', 'A', 'B', 'C'].map((tier) => {
            const tierUnits = getUnitsByTier(tier);
            if (tierUnits.length === 0) return null;
            const tierInfo = tiers.find((t) => t.tier === tier);
            return (
              <div key={tier} className={`rounded-2xl border p-6 ${TIER_COLORS[tier].bg} ${TIER_COLORS[tier].border}`}>
                <h3 className={`text-xl font-black mb-4 ${TIER_COLORS[tier].text}`}>
                  Tier {tier} — {tierInfo?.description}
                </h3>
                <div className="space-y-4">
                  {tierUnits.map((unit) => (
                    <div key={unit.id} className="bg-white dark:bg-gray-800 rounded-xl p-5 border">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-lg font-bold">{unit.name}</h4>
                            <span className={`text-xs px-2 py-0.5 rounded border font-mono ${TIER_COLORS[unit.tier].bg} ${TIER_COLORS[unit.tier].border} ${TIER_COLORS[unit.tier].text}`}>
                              T{unit.tier}
                            </span>
                            <span className="text-xs bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded">{unit.category}</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{unit.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {unit.bestSynergy.length > 0 && (
                              <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">
                                Synergy: {unit.bestSynergy.join(', ')}
                              </span>
                            )}
                            {unit.weakAgainst.length > 0 && (
                              <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-0.5 rounded">
                                Weak vs: {unit.weakAgainst.join(', ')}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <div className="text-center px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-lg">
                            <div className="text-xs text-gray-400 uppercase">Cost</div>
                            <div className="font-mono font-bold">{unit.cost.toLocaleString()}</div>
                          </div>
                          <div className="text-center px-4 py-2 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                            <div className="text-xs text-gray-400 uppercase">Power</div>
                            <div className="font-mono font-bold text-amber-500">{unit.power}</div>
                          </div>
                          <div className="text-center px-4 py-2 bg-green-50 dark:bg-green-900/30 rounded-lg">
                            <div className="text-xs text-gray-400 uppercase">Health</div>
                            <div className="font-mono font-bold text-green-500">{unit.health}</div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t">
                        <div className="text-center">
                          <div className="text-xs text-gray-400">Mobility</div>
                          <div className="font-semibold text-sm">{unit.mobility}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-400">Damage</div>
                          <div className="font-semibold text-sm">{unit.damage}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-400">Special</div>
                          <div className="font-semibold text-xs text-blue-600">{unit.specialAbility}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Buildings Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Buildings</h2>
        <div className="space-y-6">
          {['S', 'A', 'B', 'C'].map((tier) => {
            const tierBuildings = getBuildingsByTier(tier);
            if (tierBuildings.length === 0) return null;
            const tierInfo = tiers.find((t) => t.tier === tier);
            return (
              <div key={tier} className={`rounded-2xl border p-6 ${TIER_COLORS[tier].bg} ${TIER_COLORS[tier].border}`}>
                <h3 className={`text-xl font-black mb-4 ${TIER_COLORS[tier].text}`}>
                  Tier {tier} — {tierInfo?.description}
                </h3>
                <div className="space-y-4">
                  {tierBuildings.map((building) => (
                    <div key={building.id} className="bg-white dark:bg-gray-800 rounded-xl p-5 border">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-lg font-bold">{building.name}</h4>
                            <span className={`text-xs px-2 py-0.5 rounded border font-mono ${TIER_COLORS[building.tier].bg} ${TIER_COLORS[building.tier].border} ${TIER_COLORS[building.tier].text}`}>
                              T{building.tier}
                            </span>
                            <span className="text-xs bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded">{building.category}</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{building.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <div className="text-center px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-lg">
                            <div className="text-xs text-gray-400">Cost</div>
                            <div className="font-mono font-bold">{building.cost.toLocaleString()}</div>
                          </div>
                          <div className="text-center px-4 py-2 bg-green-50 dark:bg-green-900/30 rounded-lg">
                            <div className="text-xs text-gray-400">Income</div>
                            <div className="font-mono font-bold text-green-500">{building.income.toLocaleString()}/hr</div>
                          </div>
                          <div className="text-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                            <div className="text-xs text-gray-400">Unlocks</div>
                            <div className="font-mono font-bold text-blue-500">Lvl {building.unlockLevel}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary CTA */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-2">Start Building Your Army</h3>
        <p className="text-gray-400 mb-6">Use the Progression Calculator to find the best farming route for your level.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/calculator" className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-colors">
            📊 Open Calculator
          </Link>
          <Link href="/beginner-guide" className="px-8 py-3 bg-white/10 hover:bg-white/20 font-semibold rounded-lg border border-white/20 transition-colors">
            📖 Read Beginner Guide
          </Link>
        </div>
      </div>
    </div>
  );
}