"use client";

import { ExternalLink, Github, Download, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  techStack: string[];
  links: {
    preview?: string;
    demo?: string;
    github?: string;
    download?: string;
  };
  highlight?: string;
}

const ProjectCard = ({ title, description, imageSrc, techStack, links, highlight }: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative bg-[#0a0a0a] border border-gray-800/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${title} Preview`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

        {highlight && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500 text-black text-[10px] font-bold uppercase tracking-wider rounded-full">
            {highlight}
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]">
          <div className="flex gap-4">
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-cyan-400 transition-colors">
                <Github size={20} />
              </a>
            )}
            {(links.demo || links.preview) && (
              <a href={links.demo || links.preview} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-cyan-400 transition-colors">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
          <ArrowUpRight className="text-gray-500 group-hover:text-cyan-400 transition-all" size={20} />
        </div>

        <p className="text-gray-400 text-sm mb-6 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-medium px-2 py-1 bg-gray-900 text-gray-400 border border-gray-800 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
