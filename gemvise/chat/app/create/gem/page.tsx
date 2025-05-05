'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function CreateGem() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    expertise: '',
    background: '',
    philosophy: '',
    innovations: '',
    leadership: '',
    currentFocus: '',
    imageUrl: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement gem creation logic using GemCollector
    router.push('/explore');
  };

  return (
    <div className="min-h-screen bg-theme-surface py-12">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-8 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-theme-surface/50 backdrop-blur-sm">
            <SparklesIcon className="h-8 w-8 text-theme-foreground" />
          </span>
        </div>

        <h1 className="text-center text-3xl font-bold tracking-tight text-theme-foreground sm:text-4xl">
          Create a New Gem
        </h1>
        <p className="mt-2 text-center text-lg leading-8 text-theme-foreground/60">
          Transform real-world expertise into an interactive AI experience.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-theme-foreground">
                Expert Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 block w-full rounded-md border-0 bg-theme-surface/50 py-2 px-3 text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                required
              />
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-theme-foreground">
                Professional Title
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="mt-2 block w-full rounded-md border-0 bg-theme-surface/50 py-2 px-3 text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="expertise" className="block text-sm font-medium text-theme-foreground">
              Areas of Expertise
            </label>
            <input
              type="text"
              id="expertise"
              value={formData.expertise}
              onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
              className="mt-2 block w-full rounded-md border-0 bg-theme-surface/50 py-2 px-3 text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              placeholder="e.g., Investment Strategy, Technology Innovation"
              required
            />
          </div>

          <div>
            <label htmlFor="background" className="block text-sm font-medium text-theme-foreground">
              Professional Background
            </label>
            <textarea
              id="background"
              value={formData.background}
              onChange={(e) => setFormData({ ...formData, background: e.target.value })}
              rows={4}
              className="mt-2 block w-full rounded-md border-0 bg-theme-surface/50 py-2 px-3 text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              required
            />
          </div>

          <div>
            <label htmlFor="philosophy" className="block text-sm font-medium text-theme-foreground">
              Core Philosophy
            </label>
            <textarea
              id="philosophy"
              value={formData.philosophy}
              onChange={(e) => setFormData({ ...formData, philosophy: e.target.value })}
              rows={3}
              className="mt-2 block w-full rounded-md border-0 bg-theme-surface/50 py-2 px-3 text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              required
            />
          </div>

          <div>
            <label htmlFor="innovations" className="block text-sm font-medium text-theme-foreground">
              Key Innovations & Achievements
            </label>
            <textarea
              id="innovations"
              value={formData.innovations}
              onChange={(e) => setFormData({ ...formData, innovations: e.target.value })}
              rows={3}
              className="mt-2 block w-full rounded-md border-0 bg-theme-surface/50 py-2 px-3 text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="leadership" className="block text-sm font-medium text-theme-foreground">
                Leadership Style
              </label>
              <textarea
                id="leadership"
                value={formData.leadership}
                onChange={(e) => setFormData({ ...formData, leadership: e.target.value })}
                rows={3}
                className="mt-2 block w-full rounded-md border-0 bg-theme-surface/50 py-2 px-3 text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                required
              />
            </div>

            <div>
              <label htmlFor="currentFocus" className="block text-sm font-medium text-theme-foreground">
                Current Focus
              </label>
              <textarea
                id="currentFocus"
                value={formData.currentFocus}
                onChange={(e) => setFormData({ ...formData, currentFocus: e.target.value })}
                rows={3}
                className="mt-2 block w-full rounded-md border-0 bg-theme-surface/50 py-2 px-3 text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-theme-foreground">
              Profile Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              className="mt-2 block w-full rounded-md border-0 bg-theme-surface/50 py-2 px-3 text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="rounded-md bg-theme-surface/50 px-4 py-2.5 text-sm font-semibold text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 hover:bg-theme-surface/70"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-gradient-pink-purple px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90"
            >
              Create Gem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
