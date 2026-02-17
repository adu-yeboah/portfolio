"use client";

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { experiences } from '@/lib/data';

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4">
            CAREER
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            PROFESSIONAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">PATH</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="relative pl-12 border-l-2 border-gray-800/50 py-4 group"
            >
              {/* Animated dot */}
              <motion.div
                className="absolute left-[-9px] top-8 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg"
                animate={{
                  boxShadow: [
                    '0 0 15px rgba(6,182,212,0.5)',
                    '0 0 25px rgba(6,182,212,0.8)',
                    '0 0 15px rgba(6,182,212,0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="space-y-4">
                <motion.span
                  className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 font-mono text-xs uppercase tracking-wider"
                  whileHover={{ scale: 1.05 }}
                >
                  {exp.period}
                </motion.span>

                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-gray-400">{exp.company}</p>
                </div>

                <p className="text-gray-500 leading-relaxed max-w-2xl">{exp.description}</p>

                <ul className="grid md:grid-cols-2 gap-3 pt-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-400 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors group/item"
                      whileHover={{ x: 5 }}
                    >
                      <ChevronRight size={16} className="text-cyan-500 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
