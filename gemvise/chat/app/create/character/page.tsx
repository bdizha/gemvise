'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Section from '@/components/layout/Section/Section';
import { Form, FormField, Input, Button } from '@/components/layout/Form';

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
    <Section
      variant="default"
      gradient="dark-light"
      className="min-h-screen py-12"
    >
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
            <UserCircleIcon className="h-8 w-8 text-white" />
          </span>
        </div>

        <h1 className="text-center text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Create a New Character
        </h1>
        <p className="mt-2 text-center text-lg leading-8 text-white/60">
          Bring your character to life with rich details and personality.
        </p>

        <Form onSubmit={handleSubmit} className="mt-12 space-y-6" variant="default" size="2xl">
          <FormField
            label="Character Name"
            htmlFor="name"
            required
          >
            <Input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              variant="filled"
              required
            />
          </FormField>

          <FormField
            label="Character Description"
            htmlFor="description"
            required
          >
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full rounded-md border bg-white/5 backdrop-blur-md px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-white/20 placeholder:text-white/40 text-white focus:border-white/40"
              required
            />
          </FormField>

          <FormField
            label="Expertise & Skills"
            htmlFor="expertise"
            required
          >
            <Input
              type="text"
              id="expertise"
              value={formData.expertise}
              onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
              variant="filled"
              required
            />
          </FormField>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="World"
              htmlFor="world"
              required
            >
              <select
                id="world"
                value={formData.world}
                onChange={(e) => setFormData({ ...formData, world: e.target.value })}
                className="w-full rounded-md border bg-white/5 backdrop-blur-md px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-white/20 text-white focus:border-white/40 h-10"
                required
              >
                <option value="">Select a world</option>
                <option value="boldland">BoldLand</option>
                <option value="hollywood-dreams">Hollywood Dreams</option>
                <option value="motown-magic">Motown Magic</option>
              </select>
            </FormField>

            <FormField
              label="Collection"
              htmlFor="collection"
            >
              <Input
                type="text"
                id="collection"
                value={formData.collection}
                onChange={(e) => setFormData({ ...formData, collection: e.target.value })}
                variant="filled"
                placeholder="e.g., Bold Girls"
              />
            </FormField>
          </div>

          <FormField
            label="Character Traits"
            htmlFor="traits"
            required
          >
            <textarea
              id="traits"
              value={formData.traits}
              onChange={(e) => setFormData({ ...formData, traits: e.target.value })}
              rows={4}
              className="w-full rounded-md border bg-white/5 backdrop-blur-md px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-white/20 placeholder:text-white/40 text-white focus:border-white/40"
              placeholder="Describe the character's personality, quirks, and notable traits"
              required
            />
          </FormField>

          <FormField
            label="Image Prompt"
            htmlFor="imagePrompt"
          >
            <Input
              type="text"
              id="imagePrompt"
              value={formData.imagePrompt}
              onChange={(e) => setFormData({ ...formData, imagePrompt: e.target.value })}
              variant="filled"
              placeholder="Describe how the character should look or paste an image URL"
            />
          </FormField>

          <div className="mt-8 flex justify-end gap-x-4">
            <Button
              type="button"
              variant="secondary"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
            >
              Create Character
            </Button>
          </div>
        </Form>
      </div>
    </Section>
  );
}
