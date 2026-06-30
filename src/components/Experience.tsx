import { experiences } from '../data';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Experiencia Profesional
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Mi trayectoria laboral y proyectos destacados.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute top-10 left-[1.125rem] bottom-[-3rem] w-0.5 bg-zinc-800 hidden md:block"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-none hidden md:flex items-start">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-700 z-10">
                    <Briefcase className="h-5 w-5 text-zinc-400" />
                  </div>
                </div>
                
                <div className="flex-1 bg-zinc-900/50 rounded-2xl p-6 md:p-8 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-200">{exp.role}</h3>
                      <p className="text-zinc-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-zinc-800 text-zinc-300 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-zinc-400">
                        <span className="mr-3 text-zinc-500 mt-1.5 text-xl leading-none">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
