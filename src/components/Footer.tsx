import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <a href="#home" className="font-display font-bold text-2xl tracking-tighter text-zinc-100">
            IS<span className="text-zinc-500">.</span>
          </a>
          <p className="mt-2 text-sm text-zinc-500">
            © {personalInfo.name}. Todos los derechos reservados.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            <span className="sr-only">WhatsApp</span>
            <MessageCircle className="h-6 w-6" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-zinc-500 hover:text-zinc-300 transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
