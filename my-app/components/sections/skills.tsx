"use client";

import Reveal from '@/components/reveal';
import SectionHeader from '@/components/sectionHeader';
import { skills } from '@/lib/data';

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          kicker="Skills"
          title="Tech Stack"
          description="Modern tools and frameworks for building exceptional digital experiences."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Reveal key={skill.category} delay={index * 0.05} className="h-full">
              <div className="h-full p-6 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors">
                <skill.icon size={24} className="text-neutral-400 mb-4" aria-hidden />
                <h3 className="font-semibold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
