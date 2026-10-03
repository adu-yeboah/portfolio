"use client";

import { ExternalLink, Github, Download, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/reveal';

interface ProjectCardProps {
  slug?: string;
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

const linkClass =
  'inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-blue-400 transition-colors';

const ProjectCard = ({ slug, title, description, imageSrc, techStack, links, highlight }: ProjectCardProps) => {
  return (
    <Reveal className="h-full">
      <article className="group h-full flex flex-col border border-neutral-800 rounded-xl overflow-hidden bg-neutral-900/40 hover:border-neutral-600 transition-colors">
        <div className="relative w-full aspect-video bg-neutral-900">
          <Image
            src={imageSrc}
            alt={`${title} Preview`}
            fill
            className="object-contain p-4"
          />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-3 mb-2">
            {slug ? (
              <Link href={`/projects/${slug}`} className="hover:text-blue-400 transition-colors">
                <h3 className="text-lg font-semibold">{title}</h3>
              </Link>
            ) : (
              <h3 className="text-lg font-semibold">{title}</h3>
            )}
            {highlight && (
              <span className="shrink-0 text-[11px] font-medium uppercase tracking-wider text-blue-400 border border-blue-500/30 rounded px-2 py-0.5">
                {highlight}
              </span>
            )}
          </div>

          <p className="text-sm text-neutral-400 leading-relaxed mb-5 line-clamp-2 flex-1">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-2 py-1 text-neutral-400 bg-neutral-900 border border-neutral-800 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 border-t border-neutral-800">
            {slug && (
              <Link href={`/projects/${slug}`} className={linkClass}>
                <FileText size={15} />
                Details
              </Link>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <Github size={15} />
                GitHub
              </a>
            )}
            {(links.demo || links.preview) && (
              <a
                href={links.demo || links.preview}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
            {links.download && (
              <a
                href={links.download}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <Download size={15} />
                Download
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
};

export default ProjectCard;
