import { Mail, MessageSquare, Phone } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-900/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-zinc-950 rounded-3xl p-8 md:p-12 border border-zinc-800 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-zinc-400">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-zinc-500" />
              <span>{personalInfo.email}</span>
            </div>
            {personalInfo.phone && (
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-zinc-500" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-3 text-zinc-500" />
              <span>Respuesta usualmente en 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
