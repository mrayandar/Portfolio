import HolographicHero from '@/components/HolographicHero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-void relative">
      <main>
        <HolographicHero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}