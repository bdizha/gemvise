'use client';

import Section, { type SectionProps } from '@/components/layout/Section/Section';
import {
  getWorldGridItems,
  getProcessedWorldsData,
  getLegendaryGemsGridItems,
  getPowerfulGemsGridItems,
} from '../utils/homePageData';
import { type GridItem } from '@/components/layout/Grid/types';

// Define a configuration type for sections on the homepage
interface HomePageSectionConfig extends SectionProps {
  key: string;
  enabled?: boolean; // Optional flag to easily toggle sections
  // itemsDisplay is handled by variant or internal logic, not a direct prop here
  // sliderSectionTitle will be mapped to sliderTitle from SectionProps
}

export default function Home() {
  const worldGridItems = getWorldGridItems();
  const processedWorlds = getProcessedWorldsData();
  const legendaryGems = getLegendaryGemsGridItems();
  const powerfulGems = getPowerfulGemsGridItems();

  const homePageSections: HomePageSectionConfig[] = [];

  homePageSections.push({
    key: 'explore-universe',
    variant: 'explore',
    items: worldGridItems,
    enabled: true,
  });

  processedWorlds.forEach(world => {
    if (world.collections && world.collections.length > 0) {
      homePageSections.push({
        key: `${world.id}-collections`,
        items: world.collections,
        variant: 'slider',
        sliderTitle: `Categories from ${world.name}`,
        enabled: true,
        sliderSpaceBetween: 10,
      });
    }
  });

  processedWorlds.forEach(world => {
    if (world.gems && world.gems.length > 0) {
      homePageSections.push({
        key: `${world.id}-gems`,
        items: world.gems,
        variant: 'slider',
        sliderTitle: `Gems from ${world.name}`,
        enabled: true,
        sliderSpaceBetween: 10,
      });
    }
  });

  if (legendaryGems && legendaryGems.length > 0) {
    homePageSections.push({
      key: 'legendary-mythic-gems',
      items: legendaryGems,
      variant: 'slider',
      sliderTitle: 'Legendary & Mythic Characters',
      enabled: true,
      sliderSpaceBetween: 10,
    });
  }

  if (powerfulGems && powerfulGems.length > 0) {
    homePageSections.push({
      key: 'powerful-gems',
      items: powerfulGems,
      variant: 'slider',
      sliderTitle: 'Elite Characters',
      enabled: true,
      sliderSpaceBetween: 10,
    });
  }

  return (
    <main className="flex flex-col gap-24">
      {homePageSections
        .filter(section => section.enabled !== false)
        .map(({ key, ...restConfig }) => <Section key={key} {...restConfig} />)}
    </main>
  );
}
