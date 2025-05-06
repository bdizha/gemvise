'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function CreateCharacter() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    expertise: '',
    world: '',
    collection: '',
    traits: '',
    imagePrompt: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement character creation logic
    router.push('/explore');
  };

  return (
    <div className="min-h-screen bg-theme-surface py-12">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-8 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-theme-surface/50 backdrop-blur-sm">
            <UserCircleIcon className="h-8 w-8 text-theme-foreground" />
          </span>
        </div>

        <h1 className="text-center text-2xl font-bold tracking-tight text-theme-foreground sm:text-4xl">
          Create a New Character
        </h1>
        <p className="mt-2 text-center text-lg leading-8 text-theme-foreground/60">
          Bring your character to life with rich details and personality.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-theme-foreground">
              Character Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-2 block w-full rounded-[1rem] border-0 bg-theme-surface/50 py-2 px-3 text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-theme-foreground">
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="mt-2 block w-full rounded-[1rem] border-0 bg-theme-surface/50 py-2 px-3 text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              required
            />
          </div>

          <div>
            <label htmlFor="expertise" className="block text-sm font-medium text-theme-foreground">
              Expertise
            </label>
            <input
              type="text"
              id="expertise"
              value={formData.expertise}
              onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
              className="mt-2 block w-full rounded-[1rem] border-0 bg-theme-surface/50 py-2 px-3 text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="world" className="block text-sm font-medium text-theme-foreground">
                World
              </label>
              <select
                id="world"
                value={formData.world}
                onChange={(e) => setFormData({ ...formData, world: e.target.value })}
                className="mt-2 block w-full rounded-[1rem] border-0 bg-theme-surface/50 py-2 px-3 text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                required
              >
                <option value="">Select a world</option>
                <option value="nakaland">NakaLand</option>
                <option value="boldland">BoldLand</option>
                <option value="naimland">NaimLand</option>
              </select>
            </div>

            <div>
              <label htmlFor="collection" className="block text-sm font-medium text-theme-foreground">
                Collection
              </label>
              <input
                type="text"
                id="collection"
                value={formData.collection}
                onChange={(e) => setFormData({ ...formData, collection: e.target.value })}
                className="mt-2 block w-full rounded-[1rem] border-0 bg-theme-surface/50 py-2 px-3 text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="traits" className="block text-sm font-medium text-theme-foreground">
              Character Traits (comma-separated)
            </label>
            <input
              type="text"
              id="traits"
              value={formData.traits}
              onChange={(e) => setFormData({ ...formData, traits: e.target.value })}
              className="mt-2 block w-full rounded-[1rem] border-0 bg-theme-surface/50 py-2 px-3 text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              placeholder="e.g., brave, intelligent, creative"
            />
          </div>

          <div>
            <label htmlFor="imagePrompt" className="block text-sm font-medium text-theme-foreground">
              Image Generation Prompt
            </label>
            <textarea
              id="imagePrompt"
              value={formData.imagePrompt}
              onChange={(e) => setFormData({ ...formData, imagePrompt: e.target.value })}
              rows={3}
              className="mt-2 block w-full rounded-[1rem] border-0 bg-theme-surface/50 py-2 px-3 text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              placeholder="Describe how you want your character to look"
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="rounded-[1rem] bg-theme-surface/50 px-4 py-2.5 text-sm font-semibold text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 hover:bg-theme-surface/70"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-[1rem] bg-gradient-pink-purple px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90"
            >
              Create Character
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
