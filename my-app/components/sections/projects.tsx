"use client";

import { motion } from 'framer-motion';
import { mobileProjects, webProjects } from '@/lib/data';
import ProjectCard from '@/components/projectCard';

const Projects = () => {
  return (
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
              {mobileProjects.map((project) => (
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
              {webProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
