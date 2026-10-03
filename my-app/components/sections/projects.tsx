import { mobileProjects, webProjects } from "@/lib/data";
import ProjectCard from "@/components/projectCard";
import SectionHeader from "@/components/sectionHeader";

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          kicker="Projects"
          title="Featured Work"
          description="Selected projects that demonstrate my technical expertise."
        />

        <div className="space-y-16">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-neutral-500 mb-6">
              Web Solutions
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-neutral-500 mb-6">
              Mobile Applications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mobileProjects.map((project) => (
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
