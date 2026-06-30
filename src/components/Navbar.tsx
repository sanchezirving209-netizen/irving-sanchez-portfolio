import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { personalInfo } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="font-display font-bold text-xl tracking-tighter text-zinc-100">
              IS<span className="text-zinc-500">.</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-400 hover:text-zinc-100 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
