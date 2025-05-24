'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SparklesIcon } from '@heroicons/react/24/outline';
import Section from '@/components/layout/Section/Section';
import { Form, FormField, Input, Button } from '@/components/layout/Form';

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
    <Section
      variant="default"
      gradient="dark-light"
      className="min-h-screen py-12"
    >
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
            <SparklesIcon className="h-8 w-8 text-white" />
          </span>
        </div>

        <h1 className="text-center text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Create a New Gem
        </h1>
        <p className="mt-2 text-center text-lg leading-8 text-white/60">
          Transform real-world expertise into an interactive AI experience.
        </p>

        <Form onSubmit={handleSubmit} className="mt-12 space-y-6" variant="default" size="2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Expert Name"
              htmlFor="name"
              required
            >
              <Input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                variant="filled"
                placeholder="e.g., Albert Einstein"
                required
              />
            </FormField>
            
            <FormField
              label="Title / Profession"
              htmlFor="title"
              required
            >
              <Input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                variant="filled"
                placeholder="e.g., Theoretical Physicist"
                required
              />
            </FormField>
          </div>

          <FormField
            label="Areas of Expertise"
            htmlFor="expertise"
          >
            <Input
              type="text"
              id="expertise"
              value={formData.expertise}
              onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
              variant="filled"
              placeholder="e.g., Investment Strategy, Technology Innovation"
              required
            />
          </FormField>

          <FormField
            label="Background & Education"
            htmlFor="background"
          >
            <textarea
              id="background"
              value={formData.background}
              onChange={(e) => setFormData({ ...formData, background: e.target.value })}
              rows={3}
              className="w-full rounded-md border bg-white/5 backdrop-blur-md px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-white/20 placeholder:text-white/40 text-white focus:border-white/40"
              placeholder="Describe the expert's educational background and career journey"
            />
          </FormField>

          <FormField
            label="Philosophy & Approach"
            htmlFor="philosophy"
          >
            <textarea
              id="philosophy"
              value={formData.philosophy}
              onChange={(e) => setFormData({ ...formData, philosophy: e.target.value })}
              rows={3}
              className="w-full rounded-md border bg-white/5 backdrop-blur-md px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-white/20 placeholder:text-white/40 text-white focus:border-white/40"
              placeholder="Describe the expert's worldview, methodology, and approach to their field"
            />
          </FormField>

          <FormField
            label="Key Innovations & Contributions"
            htmlFor="innovations"
          >
            <textarea
              id="innovations"
              value={formData.innovations}
              onChange={(e) => setFormData({ ...formData, innovations: e.target.value })}
              rows={3}
              className="w-full rounded-md border bg-white/5 backdrop-blur-md px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-white/20 placeholder:text-white/40 text-white focus:border-white/40"
              placeholder="Describe the expert's most significant contributions to their field"
            />
          </FormField>

          <div className="grid grid-cols-2 gap-6">
            <FormField
              label="Leadership & Teaching Style"
              htmlFor="leadership"
            >
              <textarea
                id="leadership"
                value={formData.leadership}
                onChange={(e) => setFormData({ ...formData, leadership: e.target.value })}
                rows={3}
                className="w-full rounded-md border bg-white/5 backdrop-blur-md px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-white/20 placeholder:text-white/40 text-white focus:border-white/40"
                placeholder="Describe how the expert leads, teaches, and communicates ideas"
              />
            </FormField>

            <FormField
              label="Current Focus & Research Interests"
              htmlFor="currentFocus"
            >
              <textarea
                id="currentFocus"
                value={formData.currentFocus}
                onChange={(e) => setFormData({ ...formData, currentFocus: e.target.value })}
                rows={3}
                className="w-full rounded-md border bg-white/5 backdrop-blur-md px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-white/20 placeholder:text-white/40 text-white focus:border-white/40"
                placeholder="What is the expert currently focused on or interested in?"
              />
            </FormField>
          </div>

          <FormField
            label="Image Prompt (optional)"
            htmlFor="imageUrl"
          >
            <Input
              type="text"
              id="imageUrl"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              variant="filled"
              placeholder="Describe how the expert should look (or paste an image URL)"
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
              Create Gem
            </Button>
          </div>
        </Form>
      </div>
    </Section>
  );
}
