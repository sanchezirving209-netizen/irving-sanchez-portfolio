/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-zinc-700/50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
