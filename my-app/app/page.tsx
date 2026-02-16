"use client";
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Terminal,
  Code2,
  Sparkles,
  Smartphone,
  Target,
  Zap
} from 'lucide-react';
import Image from 'next/image';
import ContactItem from '@/components/contactItem';
import Navigation from '@/components/navigation';
import Particles from '@/components/particles';
import ProjectCard from '@/components/projectCard';
import ScrollProgress from '@/components/scrollProgress';
import BackToTop from '@/components/backToTop';
import {
  skills,
  experiences,
  mobileProjects,
  webProjects,
  contactInfo
} from '@/lib/data';

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-400 overflow-x-hidden">
      <Particles />
      <ScrollProgress />
      <Navigation />
      <BackToTop />

      {/* Hero Section */}
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
                    <p className="text-2xl font-bold">20+</p>
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

      {/* About Section */}
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

      {/* Skills Section */}
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

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold italic tracking-tighter">FEATURED WORK</h2>
              <p className="text-gray-500 max-w-md">Selected projects that demonstrate my technical expertise.</p>
            </div>
          </div>

          <div className="space-y-32">
            {/* Mobile Apps */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-gray-800" />
                <span className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em]">Mobile Applications</span>
                <div className="h-[1px] w-12 bg-gray-800" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mobileProjects.map((project, index) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>

            {/* Web Apps */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-gray-800" />
                <span className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em]">Web Solutions</span>
                <div className="h-[1px] w-12 bg-gray-800" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {webProjects.map((project, index) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-5 gap-16">
              <div className="lg:col-span-3 space-y-8">
                <div className="space-y-4">
                  <motion.span
                    className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    GET IN TOUCH
                  </motion.span>
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                    LET&apos;S <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">CONNECT.</span>
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                    Have a vision for a project? Or just want to talk tech? I&apos;m always open to new ideas and collaborations.
                  </p>
                </div>

                <motion.form
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative group">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-gray-900/50 border-2 border-gray-800 rounded-xl px-4 py-3.5 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all duration-300 peer placeholder:text-gray-600"
                      />
                    </div>
                    <div className="relative group">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-gray-900/50 border-2 border-gray-800 rounded-xl px-4 py-3.5 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all duration-300 peer placeholder:text-gray-600"
                      />
                    </div>
                  </div>
                  <div className="relative group">
                    <textarea
                      placeholder="Your message..."
                      rows={5}
                      className="w-full bg-gray-900/50 border-2 border-gray-800 rounded-xl px-4 py-3.5 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all duration-300 peer placeholder:text-gray-600 resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="group relative w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </motion.form>
              </div>

              <div className="lg:col-span-2 flex flex-col justify-center gap-4">
                <motion.div
                  className="space-y-2 mb-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-gray-300">Contact Info</h3>
                  <p className="text-sm text-gray-500">Choose your preferred way to connect</p>
                </motion.div>
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.type}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ContactItem {...contact} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-900 relative z-10">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Adu Yeboah Samuel. Built with Next.js & Framer Motion.</p>
        </div>
      </footer>
    </main>
  );
}