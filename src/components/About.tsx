import { personalInfo } from '../data';
import { Terminal, Cpu, Shield, Settings } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-6">
              Sobre Mí
            </h2>
            <div className="prose prose-invert prose-lg text-zinc-400">
              <p>{personalInfo.about}</p>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="bg-zinc-950 rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-lg font-medium text-zinc-100 mb-6 flex items-center">
                <Terminal className="h-5 w-5 mr-2 text-zinc-400" />
                Habilidades Principales
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800">
                <Cpu className="h-8 w-8 text-zinc-400 mb-4" />
                <h4 className="font-medium text-zinc-200">Innovación</h4>
                <p className="text-sm text-zinc-500 mt-1">Automatización e IA</p>
              </div>
              <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800">
                <Shield className="h-8 w-8 text-zinc-400 mb-4" />
                <h4 className="font-medium text-zinc-200">Seguridad</h4>
                <p className="text-sm text-zinc-500 mt-1">Ciberseguridad y Redes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
