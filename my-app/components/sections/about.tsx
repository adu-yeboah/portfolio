"use client";

import Reveal from '@/components/reveal';
import SectionHeader from '@/components/sectionHeader';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <SectionHeader
            kicker="About"
            title="Building reliable software for real users."
          />
          <Reveal className="space-y-6 text-lg text-neutral-400 leading-relaxed">
            <p>
              I&apos;m a Full Stack Engineer based in Ghana with 3+ years of experience
              shipping production mobile apps to the App Store &amp; Google Play, and
              building high-performance web applications with React, Next.js, and Laravel.
            </p>
            <p>
              My focus is simple: ship reliable software that solves real problems —
              from mobile apps in users&apos; hands to the backends that power them.
            </p>
          </Reveal>
          <Reveal className="flex gap-14 pt-10">
            <div>
              <p className="text-3xl font-bold">3+</p>
              <p className="mt-1 text-sm text-neutral-500 uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold">20+</p>
              <p className="mt-1 text-sm text-neutral-500 uppercase tracking-wider">Projects Completed</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
