import { ArrowRight, ChevronDown, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-700/10 rounded-full blur-[120px] -z-10" />

      <div className="flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-10">
        <div className="relative w-36 h-36 mx-auto mb-10 rounded-full overflow-hidden ring-1 ring-zinc-800 shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-700 hover:shadow-[0_0_60px_rgba(255,255,255,0.1)] hover:ring-zinc-600 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
          <img 
            src="https://i.imgur.com/T20Ph77.png" 
            alt="Foto de perfil" 
            className="w-full h-full object-cover bg-zinc-900 transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-zinc-300 bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md mb-8 ring-1 ring-white/5">
          <span className="relative flex h-2 w-2 mr-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-400"></span>
          </span>
          NUEVAS OPORTUNIDADES
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500 mb-6 drop-shadow-sm pb-2">
          Hola, soy <span className="text-zinc-100">Irving</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-light mb-12 leading-relaxed">
          {personalInfo.title}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] w-full sm:w-auto"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white via-zinc-200 to-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
            <span className="relative flex items-center">
              Contactar
              <ArrowRight className="ml-2 -mr-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
          
          <div className="flex items-center gap-2 px-2.5 py-2.5 rounded-full bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md shadow-xl ring-1 ring-white/5">
            <a 
              href={personalInfo.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 rounded-full transition-all duration-300 hover:scale-110"
              title="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <div className="w-px h-5 bg-zinc-800/80"></div>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 rounded-full transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <div className="w-px h-5 bg-zinc-800/80"></div>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="p-2.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 rounded-full transition-all duration-300 hover:scale-110"
              title="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="pb-10 animate-bounce">
        <a href="#about" className="text-zinc-500 hover:text-zinc-300">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
}
