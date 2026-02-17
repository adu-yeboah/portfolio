"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Smartphone, Code2, Target, Zap } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm group hover:border-cyan-500/40 transition-all duration-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span>Available for new opportunities</span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.95]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
              >
                FULL STACK
                <br />
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                    DEVELOPER
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.5C50 2.5 150 0.5 299 5.5" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Adu Yeboah Samuel — Crafting high-performance mobile and web experiences
                with modern architectural patterns and elegant code.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold flex items-center gap-2 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-gray-800 rounded-full font-bold hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 text-gray-400 hover:text-white group"
              >
                <span className="flex items-center gap-2">
                  Let&apos;s Talk
                  <Sparkles size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-8 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                  <Target size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Projects</p>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-800" />
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                  <Zap size={18} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Years Exp</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] mx-auto">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-[120px] rounded-full animate-pulse" />

              {/* Orbiting rings */}
              <div className="absolute inset-4 border border-gray-800/50 rounded-full animate-spin-slow" />
              <div className="absolute inset-10 border border-cyan-500/30 rounded-full animate-reverse-slow" />
              <div className="absolute inset-16 border border-blue-500/20 rounded-full animate-spin-slow" />

              {/* Floating elements */}
              <motion.div
                className="absolute top-10 right-10 p-3 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800/50 shadow-xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Code2 size={24} className="text-cyan-400" />
              </motion.div>

              <motion.div
                className="absolute bottom-16 left-8 p-3 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800/50 shadow-xl"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Smartphone size={24} className="text-purple-400" />
              </motion.div>

              <Image
                src="/images/avatar.jpg"
                alt="Adu Yeboah Samuel"
                fill
                priority
                className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 border-8 border-black z-10 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, repeat: Infinity, duration: 1.5 }}
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
