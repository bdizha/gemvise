'use client';

import PageTemplate from '@/components/templates/PageTemplate';

export default function AboutPage() {
  return (
    <PageTemplate title="About GemVise">
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-4">Our Purpose</h2>
          <p>
            GemVise empowers people to connect, learn, and tell stories through interactive entertainment.
            Millions of users engage with our platform every month, using our technology to supercharge their imaginations.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Limitless Entertainment</h2>
          <p>
            GemVise leads you to the crossroads where storytelling, gaming, social connection, and creative expression 
            converge to captivate you like never before.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Neverending Ways to Create</h2>
          <p>
            If you can imagine it, you can bring it to life – from historical figures to modern innovators. 
            With GemVise, you don&apos;t just follow the conversation, you make it happen.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Unbounded Connection</h2>
          <p>
            Be a part of an expansive community. With GemVise, you can connect with great minds from history
            or engage in meaningful conversations that spark new ideas and insights.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Endless Exploration</h2>
          <p>
            GemVise ignites your curiosity, offering a diverse collection of historical figures and modern innovators
            to discover, unlimited conversations to explore, and infinite knowledge through every interaction.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p>
            Our team combines deep technical expertise in AI and machine learning with a passion for making
            knowledge and wisdom accessible to everyone. We&apos;re headquartered in Silicon Valley, bringing
            cutting-edge technology to global audiences.
          </p>
        </section>
      </div>
    </PageTemplate>
  );
}
