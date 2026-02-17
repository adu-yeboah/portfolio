"use client";

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="space-y-8"
          >
            <motion.span
              className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              ABOUT ME
            </motion.span>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Architecting <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Digital
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C50 2.5 150 0.5 299 5.5" stroke="url(#aboutGradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              Solutions.
            </h2>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Based in Ghana, I specialize in building scalable applications. My approach
              combines technical rigor with a deep understanding of user experience.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <motion.div
                className="space-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="flex items-baseline gap-2">
                  <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">3+</h4>
                </div>
                <p className="text-gray-500 uppercase tracking-wider text-sm">Years Experience</p>
              </motion.div>
              <motion.div
                className="space-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="flex items-baseline gap-2">
                  <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">20+</h4>
                </div>
                <p className="text-gray-500 uppercase tracking-wider text-sm">Projects Completed</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-3xl" />

            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800/50 rounded-3xl p-8 space-y-6 backdrop-blur-sm shadow-2xl">
              <div className="flex gap-2 mb-6">
                <motion.div
                  className="w-3 h-3 rounded-full bg-red-500/60 hover:bg-red-500 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-yellow-500/60 hover:bg-yellow-500 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-green-500/60 hover:bg-green-500 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                />
              </div>

              <div className="space-y-2">
                <p className="text-gray-500 text-xs font-mono mb-4">// Developer Profile</p>
                <pre className="text-gray-300 font-mono text-sm leading-loose overflow-x-auto">
                  <code>
                    <span className="text-cyan-400">const</span> developer = {'{'}
                    <br />
                    <span className="ml-4 text-purple-400">name</span>: <span className="text-yellow-200">&apos;Adu Yeboah Samuel&apos;</span>,
                    <br />
                    <span className="ml-4 text-purple-400">focus</span>: [<span className="text-yellow-200">&apos;Mobile&apos;</span>, <span className="text-yellow-200">&apos;Fullstack Web&apos;</span>],
                    <br />
                    <span className="ml-4 text-purple-400">tech</span>: [<span className="text-yellow-200">&apos;React Native&apos;</span>, <span className="text-yellow-200">&apos;Laravel&apos;</span>, <span className="text-yellow-200">&apos;Next.js&apos;</span>],
                    <br />
                    <span className="ml-4 text-purple-400">mission</span>: <span className="text-yellow-200">&apos;Building the future of tech in Africa&apos;</span>
                    <br />
                    {'}'};
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
