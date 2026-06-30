import { certifications } from '../data';
import { Award, GraduationCap, Languages } from 'lucide-react';

const typeIcons = {
  degree: GraduationCap,
  course: Award,
  language: Languages,
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Educación y Certificaciones
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Formación académica y reconocimientos profesionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const Icon = typeIcons[cert.type];
            return (
              <div key={cert.id} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 flex items-start space-x-4">
                <div className="flex-shrink-0 bg-zinc-950 p-3 rounded-xl border border-zinc-700">
                  <Icon className="h-6 w-6 text-zinc-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-zinc-200 leading-tight mb-1">{cert.title}</h3>
                  <p className="text-sm text-zinc-400">{cert.issuer}</p>
                  <p className="text-xs text-zinc-500 mt-2 font-mono">{cert.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
