import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { ForWho } from './sections/ForWho';
import { Services } from './sections/Services';
import { HowItWorks } from './sections/HowItWorks';
import { Projects } from './sections/Projects';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">
      <Navigation />
      <main>
        <div id="inicio">
          <Hero />
        </div>
        <ForWho />
        <Services />
        <HowItWorks />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
