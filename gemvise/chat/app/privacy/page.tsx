'use client';

import PageTemplate from '@/components/templates/PageTemplate';

export default function PrivacyPage() {
  return (
    <PageTemplate title="Privacy Policy">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Your Privacy Matters</h2>
          <p>
            At Gemium, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Account information when you register</li>
            <li>Usage data to improve our services</li>
            <li>Communication preferences</li>
            <li>Chat interactions with our AI system</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and improve our services</li>
            <li>To personalize your experience</li>
            <li>To communicate with you about updates</li>
            <li>To ensure platform security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
          <p>
            We implement robust security measures to protect your personal information from unauthorized access,
            alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. Contact us if you have
            any questions about your privacy rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            For any privacy-related concerns, please contact us at privacy@Gemium.com
          </p>
        </section>
      </div>
    </PageTemplate>
  );
}
