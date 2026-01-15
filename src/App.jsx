import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Vision from './components/Vision';
import Career from './components/Career';
import Content from './components/Content';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-light">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <Achievements />
        <Vision />
        <Career />
        <Content />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
