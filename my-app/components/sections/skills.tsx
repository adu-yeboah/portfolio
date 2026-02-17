"use client";

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
            EXPERTISE
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">Tech Stack</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Modern tools and frameworks for building exceptional digital experiences.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-gray-800/50 rounded-3xl hover:border-cyan-500/40 transition-all duration-500 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-6 p-4 bg-gray-900/50 rounded-2xl inline-block group-hover:bg-gray-900/80 transition-colors">
                  <skill.icon className={`${skill.color} group-hover:scale-110 transition-transform duration-300`} size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs font-medium bg-gray-900/50 text-gray-400 border border-gray-800 rounded-lg group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
