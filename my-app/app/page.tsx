"use client";
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Github,
  Terminal,
  Download,
  Code2
} from 'lucide-react';
import Image from 'next/image';
import ContactItem from '@/components/contactItem';
import Navigation from '@/components/navigation';
import Particles from '@/components/particles';
import ProjectCard from '@/components/projectCard';
import {
  skills,
  experiences,
  mobileProjects,
  webProjects,
  contactInfo
} from '@/lib/data';

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-400">
      <Particles />
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full text-cyan-400 text-sm font-medium"
              >
                <Terminal size={14} />
                <span>Available for new opportunities</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  FULL STACK <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    DEVELOPER
                  </span>
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Adu Yeboah Samuel — Crafting high-performance mobile and web experiences
                  with modern architectural patterns and elegant code.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="#projects"
                  className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-cyan-400 transition-all group scale-105 active:scale-95"
                >
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border border-gray-800 rounded-full font-bold hover:border-cyan-500 transition-all text-gray-400 hover:text-white"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>

            <motion.div
              className="flex-1 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] mx-auto">
                <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute inset-4 border border-gray-800 rounded-full animate-spin-slow" />
                <div className="absolute inset-10 border border-cyan-500/20 rounded-full animate-reverse-slow" />
                <Image
                  src="/images/avatar.jpg"
                  alt="Adu Yeboah Samuel"
                  fill
                  priority
                  className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 border-8 border-black z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Architecting <span className="text-cyan-400 italic">Digital</span> Solutions.
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Based in Ghana, I specialize in building scalable applications. My approach
                combines technical rigor with a deep understanding of user experience.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="text-3xl font-bold text-white">3+</h4>
                  <p className="text-gray-500">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white">20+</h4>
                  <p className="text-gray-500">Projects Completed</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 border border-gray-800 rounded-3xl p-8 space-y-6"
            >
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                <span className="text-cyan-400">const</span> developer = &#123; <br />
                &nbsp;&nbsp;name: <span className="text-yellow-200">&apos;Adu Yeboah Samuel&apos;</span>, <br />
                &nbsp;&nbsp;focus: [<span className="text-yellow-200">&apos;Mobile&apos;</span>, <span className="text-yellow-200">&apos;Fullstack Web&apos;</span>], <br />
                &nbsp;&nbsp;tech: [<span className="text-yellow-200">&apos;React Native&apos;</span>, <span className="text-yellow-200">&apos;Laravel&apos;</span>, <span className="text-yellow-200">&apos;Next.js&apos;</span>], <br />
                &nbsp;&nbsp;mission: <span className="text-yellow-200">&apos;Building the future of tech in Africa&apos;</span> <br />
                &#125;;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Tech Stack</h2>
            <p className="text-gray-500">Modern tools for exceptional performance.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gray-900/10 border border-gray-800/50 rounded-2xl hover:border-cyan-500/30 transition-all group"
              >
                <skill.icon className={`mb-6 ${skill.color} group-hover:scale-110 transition-transform`} size={32} />
                <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">
                      {item}
                    </span>
                  ))}
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
      <section id="experience" className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center tracking-tighter uppercase">PROFESSIONAL PATH</h2>

          <div className="max-w-4xl mx-auto space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l border-gray-800 py-4"
              >
                <div className="absolute left-[-9px] top-8 w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                <div className="space-y-4">
                  <span className="text-cyan-400 font-mono text-sm">{exp.period}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-lg text-gray-400">{exp.company}</p>
                  </div>
                  <p className="text-gray-500 max-w-2xl">{exp.description}</p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <ChevronRight size={14} className="text-cyan-500" />
                        {achievement}
                      </li>
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
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">LET&apos;S <br /> CONNECT.</h2>
                <p className="text-gray-400 text-xl leading-relaxed">
                  Have a vision for a project? Or just want to talk tech? <br />
                  I&apos;m always open to new ideas and collaborations.
                </p>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none transition-colors" />
                    <input type="email" placeholder="Email" className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none transition-colors" />
                  </div>
                  <textarea placeholder="Message" rows={4} className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none transition-colors" />
                  <button className="w-full py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition-colors uppercase tracking-widest">Send Message</button>
                </form>
              </div>

              <div className="grid gap-4 self-center">
                {contactInfo.map((contact) => (
                  <ContactItem key={contact.type} {...contact} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-900">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Adu Yeboah Samuel. Built with Next.js & Framer Motion.</p>
        </div>
      </footer>
    </main>
  );
}