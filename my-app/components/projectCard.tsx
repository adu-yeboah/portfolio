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
      className="group relative bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-gray-800/50 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${title} Preview`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80" />

        {highlight && (
          <motion.div
            className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {highlight}
          </motion.div>
        )}

        {/* Hover overlay with links */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/60 backdrop-blur-sm">
          <motion.div
            className="flex gap-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {links.github && (
              <motion.a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white text-black rounded-full hover:bg-cyan-400 transition-colors shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View GitHub repository"
              >
                <Github size={20} />
              </motion.a>
            )}
            {(links.demo || links.preview) && (
              <motion.a
                href={links.demo || links.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white text-black rounded-full hover:bg-cyan-400 transition-colors shadow-lg"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View live demo"
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
            {links.download && (
              <motion.a
                href={links.download}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white text-black rounded-full hover:bg-cyan-400 transition-colors shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download app"
              >
                <Download size={20} />
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
          <motion.div
            className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-cyan-500/20 transition-colors"
            whileHover={{ rotate: 45, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowUpRight className="text-gray-500 group-hover:text-cyan-400 transition-colors" size={18} />
          </motion.div>
        </div>

        <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              className="text-[11px] font-medium px-3 py-1.5 bg-gray-900/80 text-gray-400 border border-gray-800 rounded-lg group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;
