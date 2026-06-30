import { projects } from '../data';
import { Globe, Camera, Workflow, Bot, ExternalLink, Github } from 'lucide-react';

const iconMap = {
  globe: Globe,
  camera: Camera,
  workflow: Workflow,
  bot: Bot,
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Proyectos Destacados
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Una selección de soluciones tecnológicas que he desarrollado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const IconComponent = iconMap[project.icon as keyof typeof iconMap] || Globe;
            
            return (
              <div key={project.id} className="group bg-zinc-950 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.05)] flex flex-col h-full">
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-colors">
                    <IconComponent className="h-6 w-6 text-zinc-300 group-hover:text-zinc-100" />
                  </div>
                  <div className="flex gap-3">
                    <button className="text-zinc-500 hover:text-zinc-300 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-zinc-200 mb-3">{project.title}</h3>
                <p className="text-zinc-400 mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-zinc-300 bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
