import configData from '@/data/game.config.json';

export interface GameConfig {
  game: {
    name: string;
    robloxId: string;
    developer: string;
    genre: string;
    currentVersion: string;
    lastUpdated: string;
    platforms: string[];
  };
  stats: {
    visits: string;
    favorites: string;
    onlineNow: string;
    serverSize: number;
    active: boolean;
  };
  seo: {
    siteTitle: string;
    siteDescription: string;
    baseUrl: string;
    primaryKeywords: string[];
    secondaryKeywords: string[];
    defaultOgImage: string;
  };
  routes: { path: string; title: string; priority: string }[];
}

const config: GameConfig = configData as GameConfig;

export function getGameConfig(): GameConfig {
  return config;
}

export function getSiteTitle(): string {
  return config.seo.siteTitle;
}

export function getBaseUrl(): string {
  return config.seo.baseUrl;
}