"use client";

import Reveal from '@/components/reveal';
import SectionHeader from '@/components/sectionHeader';
import { experiences } from '@/lib/data';

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader kicker="Experience" title="Professional Path" />

        <div className="relative max-w-3xl">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-neutral-800" aria-hidden />
          {experiences.map((exp, index) => (
            <Reveal key={exp.company} delay={index * 0.05} className="relative pl-10 pb-12 last:pb-0">
              <div className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-blue-500 bg-neutral-950" />
              <div className="space-y-1">
                <p className="text-sm font-mono text-neutral-500">{exp.period}</p>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-neutral-400">{exp.company}</p>
              </div>
              <p className="mt-3 text-neutral-400 leading-relaxed">{exp.description}</p>
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-400">
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-neutral-600 shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
