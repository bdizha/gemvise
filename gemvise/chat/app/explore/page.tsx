'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getAllGems } from '@/data/gems';
import Section from '@/components/layout/Section';
import CategoryTabs from '@/components/ui/CategoryTabs';
import InterestsModal from '@/components/auth/InterestsModal';
import { type Gem } from '@/types/gems';

export default function ExplorePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showInterestsModal, setShowInterestsModal] = useState(false);
  const [filteredGems, setFilteredGems] = useState<Gem[]>([]);
  const [gems, setGems] = useState<Gem[]>([]);

  useEffect(() => {
    const savedInterests = localStorage.getItem('userInterests');
    const allGems = getAllGems();

    if (!savedInterests) {
      setShowInterestsModal(true);
      if (Array.isArray(allGems)) {
        setGems(allGems);
        setFilteredGems(allGems);
      }
    } else {
      try {
        const parsed = JSON.parse(savedInterests);
        if (Array.isArray(parsed)) {
          setSelectedCategories(parsed);
          if (Array.isArray(allGems)) {
            setGems(allGems);
            const filtered = parsed.length > 0
              ? allGems.filter(gem => gem.category && parsed.includes(gem.category))
              : allGems;
            setFilteredGems(filtered);
          }
        }
      } catch (error) {
        console.error('Failed to parse user interests:', error);
        setShowInterestsModal(true);
        if (Array.isArray(allGems)) {
          setGems(allGems);
          setFilteredGems(allGems);
        }
      }
    }
  }, []);

  useEffect(() => {
    const filtered = selectedCategories.length > 0
      ? gems.filter((gem: Gem) => gem.category && selectedCategories.includes(gem.category))
      : gems;
    setFilteredGems(filtered);
  }, [selectedCategories, gems]);

  const handleToggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleGemClick = (gem: Gem) => {
    // Navigate to gem's chat page
    window.location.href = `/chat/${gem.id}`;
  };

  const handleInterestsComplete = (interests: string[]) => {
    localStorage.setItem('userInterests', JSON.stringify(interests));
    setSelectedCategories(interests);
    setShowInterestsModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-dark-light text-white">
    <div className="relative mx-auto max-w-[1074px] xs:py-12 sm:py-24 lg:py-12 overflow-hidden rounded-[40px] mb-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mt-8">
          <CategoryTabs
            selectedCategories={selectedCategories}
            onToggle={handleToggleCategory}
            showIcons={false}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGems.map((gem: Gem) => (
            <motion.div
              key={gem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleGemClick(gem)}
              className={`rounded-[32px] border border-white/10 p-6 cursor-pointer hover:border-white/20 transition-colors bg-gradient-${gem.gradient}`}
            >
              <h3 className="text-lg font-semibold">{gem.name}</h3>
              <p className="mt-2 text-sm text-white/60">{gem.description}</p>
              {gem.category && (
                <span className="mt-2 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                  {gem.category}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <InterestsModal
          isOpen={showInterestsModal}
          onClose={() => setShowInterestsModal(false)}
          onComplete={handleInterestsComplete}
        />
      </div>
    </div>
    </div>
  );
}
