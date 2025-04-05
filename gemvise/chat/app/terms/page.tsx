'use client';

import PageTemplate from '@/components/templates/PageTemplate';

export default function TermsPage() {
  return (
    <PageTemplate title="Terms of Service">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
          <p>
            By accessing or using GemVise, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Use License</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal, non-commercial use only</li>
            <li>No modification or copying of platform content</li>
            <li>No unauthorized use of our intellectual property</li>
            <li>Compliance with all applicable laws</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintain account security</li>
            <li>Provide accurate information</li>
            <li>Use the service responsibly</li>
            <li>Respect other users</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Content Guidelines</h2>
          <p>
            Users must not post content that is illegal, harmful, threatening, abusive, harassing, defamatory,
            or otherwise objectionable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our service immediately, without prior notice,
            for any breach of these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>
            For any questions about these Terms of Service, please contact us at terms@gemvise.com
          </p>
        </section>
      </div>
    </PageTemplate>
  );
}
