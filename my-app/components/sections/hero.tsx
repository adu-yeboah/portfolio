"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { value: '20+', label: 'Projects' },
  { value: '3+', label: 'Years Exp' },
  { value: '4+', label: 'Store Apps' },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="flex-1 space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="space-y-5">
              <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
                Adu Yeboah Samuel
              </p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                Full Stack Engineer
              </h1>
              <p className="text-lg text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Shipping production mobile apps to the App Store &amp; Google Play,
                and building scalable web applications with React, Next.js, and Laravel.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors"
              >
                View My Work
                <ArrowRight size={18} />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-800 rounded-lg font-medium text-neutral-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
              >
                <Download size={16} />
                Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-800 rounded-lg font-medium text-neutral-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
              >
                Let&apos;s Talk
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-10 bg-neutral-800" />}
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/images/avatar.jpg"
                alt="Adu Yeboah Samuel"
                fill
                priority
                className="rounded-full object-cover border border-neutral-800"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
