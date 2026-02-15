import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Projects } from './sections/Projects';
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
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
