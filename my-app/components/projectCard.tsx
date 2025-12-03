import { ExternalLink, Github, Download } from 'lucide-react';
import Image from 'next/image';

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
}

const ProjectCard = ({ title, description, imageSrc, techStack, links }: ProjectCardProps) => {
  return (
    <div className="group bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${title} Preview`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {links.preview && (
            <a
              href={links.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <ExternalLink size={16} />
              Preview
            </a>
          )}
          
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          
          {links.download && (
            <a
              href={links.download}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Download size={16} />
              Download
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;