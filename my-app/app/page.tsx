import Particles from '@/components/particles';
import Navigation from '@/components/navigation';
import BackToTop from '@/components/backToTop';
import ScrollProgress from '@/components/scrollProgress';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-400 overflow-x-hidden">
      <Particles />
      <ScrollProgress />
      <Navigation />
      <BackToTop />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
