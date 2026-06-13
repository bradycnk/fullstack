import { MatrixRain } from './components/MatrixRain';
import { NeuralBackground } from './components/NeuralBackground';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { ForWho } from './sections/ForWho';
import { Services } from './sections/Services';
import { HowItWorks } from './sections/HowItWorks';
import { Projects } from './sections/Projects';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-[#010401] text-white overflow-x-hidden">
      <MatrixRain />
      <NeuralBackground />
      <Navigation />
      <main className="relative z-10">
        <div id="inicio">
          <Hero />
        </div>
        <ForWho />
        <Services />
        <HowItWorks />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
