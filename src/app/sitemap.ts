import { MetadataRoute } from 'next';
import { getGameConfig } from '@/lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const config = getGameConfig();
  const baseUrl = config.seo.baseUrl;

  const staticRoutes = config.routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.path === '/codes' || route.path === '/updates' ? 'daily' as const : 'weekly' as const,
    priority: route.path === '/' ? 1.0 : route.path === '/codes' || route.path === '/calculator' || route.path === '/tier-list' ? 0.9 : 0.8,
  }));

  return staticRoutes;
}