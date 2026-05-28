import type { Metadata } from 'next';
import Link from 'next/link';
import { getGameConfig } from '@/lib/data';
import { generateBreadcrumbSchema } from '@/lib/seo';

const config = getGameConfig();
const baseUrl = config.seo.baseUrl;

export const metadata: Metadata = {
  title: `Mini War Updates (2026) — Latest Patch Notes & New Features`,
  description: 'Track all Mini War Roblox updates, patch notes, and new features. Updated daily with the latest news from developer mayrushart.',
  keywords: ['Mini War update', 'Mini War patch notes', 'Mini War new features', 'Mini War Roblox update'],
  alternates: { canonical: `${baseUrl}/updates` },
};

const updates = [
  {
    date: '2026-05-20',
    version: 'v1.2.4',
    type: 'major',
    title: 'New Unit: Attack Helicopter',
    description: 'Added the Attack Helicopter — a new air unit with high mobility and devastating firepower. Unlocks at level 20 via Airport.',
    changes: [
      'New unit: Attack Helicopter (Cost: 5,000 | Power: 250)',
      'New activity: Air Strike Operation (25,000 gold/hr)',
      'Airport income increased from 10,000 to 12,000/hr',
      'Helicopter units now deal 20% more damage to ground targets',
    ],
  },
  {
    date: '2026-05-10',
    version: 'v1.2.3',
    type: 'balance',
    title: 'Unit Balance & Economy Adjustments',
    description: 'Balanced unit stats and adjusted economy to improve progression flow for mid-level players.',
    changes: [
      'Tank power increased from 400 to 450',
      'Combat Mech cost reduced from 2,500 to 2,000',
      'Factory income increased from 4,000 to 4,500/hr',
      'Boss Raid gold reward increased by 15%',
      'Infantry production time reduced by 25%',
    ],
  },
  {
    date: '2026-04-28',
    version: 'v1.2.0',
    type: 'major',
    title: 'Boss Raid System Launch',
    description: 'Introduced the Boss Raid system — end-game PvE content with massive rewards. Requires Military Base (level 25).',
    changes: [
      'New content: Boss Raid (35,000+ gold/hr)',
      'New unit: Heavy Tank (unlocked via Boss progression)',
      'Military Base building introduced',
      'New boss enemy types with unique mechanics',
      'Weekly boss leaderboard added',
    ],
  },
  {
    date: '2026-04-15',
    version: 'v1.1.5',
    type: 'minor',
    title: 'Quality of Life Improvements',
    description: 'Quality of life fixes and UI improvements based on community feedback.',
    changes: [
      'Unit hotkeys added for faster deployment',
      'Income summary now displays per-hour rates',
      'Map zoom functionality improved',
      'Mobile UI optimized for smaller screens',
      'Performance improvements on low-end devices',
    ],
  },
  {
    date: '2026-04-01',
    version: 'v1.1.0',
    type: 'major',
    title: 'Mech Bay & Combat Mechs Update',
    description: 'Added Mech Bay building and Combat Mechs — the backbone of mid-game military strategy.',
    changes: [
      'New building: Mech Bay (cost: 8,000, income: 6,000/hr)',
      'New unit: Combat Mech (cost: 2,000, power: 120)',
      'Unlocked at level 12',
      'Mech upgrades now available at Mech Bay',
    ],
  },
  {
    date: '2026-03-15',
    version: 'v1.0.5',
    type: 'balance',
    title: 'Economy Rebalance',
    description: 'Adjusted early-game economy to give new players a smoother start.',
    changes: [
      'Farm income increased by 20%',
      'Starting gold bonus for new players',
      'Resource Node difficulty reduced',
      'Defense Contract rewards increased by 10%',
    ],
  },
  {
    date: '2026-03-01',
    version: 'v1.0.0',
    type: 'major',
    title: 'Full Game Launch',
    description: 'Mini War officially launches on Roblox. All core systems are live.',
    changes: [
      'Farm, Factory, Barracks buildings',
      'Infantry and Worker Mech units',
      'Military Missions system',
      'Defense Contracts',
      'Resource Nodes',
    ],
  },
];

const TYPE_STYLES: Record<string, { label: string; bg: string; text: string; border: string }> = {
  major: { label: 'Major Update', bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
  balance: { label: 'Balance Patch', bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  minor: { label: 'Minor Patch', bg: 'bg-gray-500/10', text: 'text-gray-400', border: 'border-gray-500/30' },
};

export default function UpdatesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Updates', url: '/updates' },
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-amber-400">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Updates</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-black mb-2">Mini War Updates</h1>
        <p className="text-gray-500">
          Track all game updates, patch notes, and new features. Last updated: {config.game.lastUpdated}.
        </p>
      </div>

      {/* Update Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-gray-700" />

        <div className="space-y-8">
          {updates.map((update, i) => {
            const style = TYPE_STYLES[update.type] || TYPE_STYLES.minor;
            return (
              <div key={i} className="relative pl-16">
                {/* Timeline dot */}
                <div className={`absolute left-3 w-6 h-6 rounded-full border-2 ${style.border} ${style.bg} flex items-center justify-center`}>
                  <div className={`w-2 h-2 rounded-full ${style.text}`} />
                </div>

                {/* Card */}
                <div className={`rounded-2xl border p-6 ${style.bg} ${style.border}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${style.bg} ${style.text} ${style.border}`}>
                          {style.label}
                        </span>
                        <span className="font-mono text-sm text-gray-400">v{update.version}</span>
                      </div>
                      <h2 className="text-xl font-bold">{update.title}</h2>
                      <p className="text-sm text-gray-500 mt-1">Released: {update.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{update.description}</p>
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Changes</h3>
                    <ul className="space-y-1">
                      {update.changes.map((change, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <span className="text-green-500 mt-0.5">✓</span>
                          <span>{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-500/30 p-8 text-center">
        <h3 className="text-2xl font-bold mb-2">Stay Up to Date</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Follow mayrushart on YouTube for the latest codes and update announcements in every video description.
        </p>
        <a
          href="https://www.youtube.com/results?search_query=mayrushart+mini+war"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-colors"
        >
          🔔 Subscribe on YouTube
        </a>
      </div>
    </div>
  );
}