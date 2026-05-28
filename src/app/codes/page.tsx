import type { Metadata } from 'next';
import Link from 'next/link';
import { getGameConfig } from '@/lib/data';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';
import codesData from '@/data/codes.json';
import CopyButton from '@/components/CopyButton';

const config = getGameConfig();
const baseUrl = config.seo.baseUrl;

export const metadata: Metadata = {
  title: `Free Mini War Roblox Codes (2026) — ${codesData.filter((c: any) => c.status === 'active').length} Active Codes`,
  description: 'Get free Mini War Roblox codes for gold, units, and upgrades. All codes verified and working. Updated daily with new codes from mayrushart and community events.',
  keywords: ['Mini War codes', 'Mini War Roblox codes', 'free Mini War codes', 'Mini War redeem code'],
  alternates: { canonical: `${baseUrl}/codes` },
};

export default function CodesPage() {
  const activeCodes = codesData.filter((c: any) => c.status === 'active');
  const expiredCodes = codesData.filter((c: any) => c.status === 'expired');

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Codes', url: '/codes' },
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: 'How do I redeem codes in Mini War Roblox?',
      answer: 'Open Mini War on Roblox, click the settings icon or codes button in the main menu, enter the code exactly as shown, and click redeem. Rewards are added to your account immediately.',
    },
    {
      question: 'Are these codes free?',
      answer: 'Yes, all codes listed on this site are completely free. We do not sell codes or require any payment.',
    },
    {
      question: 'How often are codes updated?',
      answer: 'We check for new codes daily. Most codes come from mayrushart YouTube videos and official Roblox events. Check back regularly for new codes.',
    },
    {
      question: 'Why did a code not work?',
      answer: 'Codes can expire after developer events end. If a code shows as expired here, it has been deactivated by the game developers. We update status within 24 hours of expiration.',
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
        <span className="text-gray-300">Codes</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-black">Mini War Roblox Codes</h1>
          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-bold rounded-full border border-green-500/30">
            {activeCodes.length} Active
          </span>
        </div>
        <p className="text-gray-500">
          Last verified: May 28, 2026. All active codes listed below.
          Check back daily for new codes from mayrushart and community events.
        </p>
      </div>

      {/* Active Codes */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          🎁 Active Codes
          <span className="text-sm font-normal text-gray-500">({activeCodes.length} codes)</span>
        </h2>
        <div className="space-y-3">
          {activeCodes.map((code: any) => (
            <div
              key={code.code}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <code className="text-lg font-mono font-bold text-amber-500 bg-amber-50 dark:bg-amber-950/30 px-3 py-1 rounded">
                    {code.code}
                  </code>
                  {code.isNew && (
                    <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-bold rounded">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400">{code.reward}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                  <span>Source: {code.source}</span>
                  <span>Added: {code.addedDate}</span>
                </div>
              </div>
              <CopyButton code={code.code} />
            </div>
          ))}
        </div>
      </div>

      {/* How to Redeem */}
      <div className="mb-12 bg-gradient-to-br from-slate-50 to-amber-50 dark:from-gray-800 dark:to-amber-950/20 rounded-2xl border p-6">
        <h2 className="text-xl font-bold mb-4">How to Redeem Codes</h2>
        <ol className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
            <span>Open Mini War on Roblox (PC or Mobile)</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
            <span>Look for the Settings/Codes button (usually in the main menu)</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
            <span>Click "Redeem Code" or similar option</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
            <span>Paste or type the code exactly as shown above</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xs">5</span>
            <span>Click Confirm — reward added instantly to your account</span>
          </li>
        </ol>
      </div>

      {/* Expired Codes */}
      {expiredCodes.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-400">
            ⏳ Expired Codes
            <span className="text-sm font-normal">({expiredCodes.length} codes)</span>
          </h2>
          <div className="space-y-2">
            {expiredCodes.map((code: any) => (
              <div
                key={code.code}
                className="bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-4 opacity-60"
              >
                <div className="flex items-center gap-2 mb-1">
                  <code className="text-sm font-mono text-gray-500">{code.code}</code>
                </div>
                <p className="text-gray-400 text-sm">{code.reward}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span>Source: {code.source}</span>
                  <span>Expired: {code.addedDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-2">Want more codes?</h3>
        <p className="text-gray-400 mb-6">Follow mayrushart on YouTube for exclusive codes in every video description.</p>
        <a
          href="https://www.youtube.com/results?search_query=mayrushart+mini+war"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-red-600 hover:bg-red-500 font-bold rounded-lg transition-colors"
        >
          🔔 Subscribe on YouTube
        </a>
      </div>
    </div>
  );
}