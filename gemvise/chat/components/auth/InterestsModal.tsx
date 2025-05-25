'use client';

import React, { useState } from 'react';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline';
import Modal from '../ui/Modal';

interface InterestsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (interests: string[]) => void;
}

import { categories } from '@/data/categories';

const InterestsModal: React.FC<InterestsModalProps> = ({ isOpen, onClose, onComplete }) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleComplete = () => {
    localStorage.setItem('userInterests', JSON.stringify(selectedInterests));
    onComplete(selectedInterests);
    onClose();
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };



  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient-dark-light">Choose your interests</h1>
      </Modal.Header>
      <Modal.Content>
        <p className="mb-6 text-base leading-7 text-white/60 px-8">Select the topics you're interested in to personalize your experience.</p>
        <div className="flex flex-wrap gap-3 px-8 py-4">
          {categories.map(({ id, label }) => {
            const isSelected = selectedInterests.includes(id);
            return (
              <button
                key={id}
                onClick={() => toggleInterest(id)}
                className={`group inline-flex h-12 items-center justify-between px-6 rounded-full border transition-all duration-300
                  ${isSelected 
                    ? 'border-white/50 bg-white/10 text-white/64' 
                    : 'border-white/20 hover:border-white/40 text-white/48'
                  }`}
              >
                <span>{label}</span>
                <span className="ml-2 group-hover:text-white/75 transition-colors">
                  {isSelected ? (
                    <CheckIcon className="h-4 w-4" />
                  ) : (
                    <PlusIcon className="h-4 w-4" />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </Modal.Content>
      <Modal.Footer>
        <div className="flex w-full justify-between items-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-white/48 hover:text-white/75 transition-colors"
          >
            Skip for now
          </button>
          <button
            onClick={() => onComplete(selectedInterests)}
            className="px-6 py-2.5 bg-white text-black rounded-full hover:bg-white/90 transition-colors"
          >
            Continue
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default InterestsModal;
