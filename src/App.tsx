import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickFacts } from './components/QuickFacts';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Facilities } from './components/Facilities';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FloatingWA } from './components/FloatingWA';

export default function App() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <QuickFacts />
      <About />
      <Rooms />
      <Facilities />
      <Gallery />
      <Reviews />
      <Location />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWA />
    </main>
  );
}
