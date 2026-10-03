import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { mobileProjects, webProjects } from '@/lib/data';
import { ArrowLeft, ExternalLink, Github, Download } from 'lucide-react';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const allProjects = [...mobileProjects, ...webProjects];
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export function generateStaticParams() {
  const allProjects = [...mobileProjects, ...webProjects];
  return allProjects.filter((p) => p.slug).map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const allProjects = [...mobileProjects, ...webProjects];
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // A very simple markdown-like renderer for headings and paragraphs
  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, index) => {
      if (block.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
            {block.replace('## ', '')}
          </h2>
        );
      }
      
      const lines = block.split('\n');
      if (lines.some(line => line.startsWith('- '))) {
         return (
           <ul key={index} className="list-disc pl-5 space-y-2 text-gray-300 mb-6">
             {lines.map((line, i) => (
               <li key={i}>{line.replace('- ', '')}</li>
             ))}
           </ul>
         );
      }

      return (
        <p key={index} className="text-gray-300 mb-6 leading-relaxed">
          {block}
        </p>
      );
    });
  };

  return (
    <main className="min-h-screen bg-neutral-950 pt-32 pb-32">
      <div className="container mx-auto px-6">
        {/* Back Navigation */}
        <Link
          href="/#projects"
          className="inline-flex items-center text-neutral-400 hover:text-blue-400 mb-12 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </Link>
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-6">
            {project.highlight && (
              <span className="px-2.5 py-1 text-blue-400 border border-blue-500/30 text-xs font-medium uppercase tracking-wider rounded-md w-fit">
                {project.highlight}
              </span>
            )}
            <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-md text-sm font-medium text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-6">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 border border-neutral-700 text-neutral-200 font-medium rounded-lg hover:border-neutral-500 transition-colors"
                >
                  <Github size={18} />
                  GitHub
                </a>
              )}
              {(project.links.demo || project.links.preview) && (
                <a
                  href={project.links.demo || project.links.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
              {project.links.download && (
                <a
                  href={project.links.download}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 border border-neutral-700 text-neutral-200 font-medium rounded-lg hover:border-neutral-500 transition-colors"
                >
                  <Download size={18} />
                  Download
                </a>
              )}
            </div>
          </div>
          
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Content and Gallery Grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Content area */}
          <div className="lg:col-span-7">
            {project.content ? (
              <div className="prose prose-invert max-w-none">
                {renderContent(project.content)}
              </div>
            ) : (
              <p className="text-gray-400">Detailed guide coming soon.</p>
            )}
          </div>

          {/* Gallery area */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Gallery</h3>
              <div className="grid grid-cols-1 gap-6">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
                    <Image
                      src={img}
                      alt={`${project.title} gallery image ${idx + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
