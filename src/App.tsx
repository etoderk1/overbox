import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { HowToPlay } from './components/HowToPlay';
import { Footer } from './components/Footer';
import { Rules } from './components/Rules';
import { FAQ } from './components/FAQ';
import { JoinCTA } from './components/JoinCTA';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'rules' | 'faq'>('home');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#36e826] selection:text-black font-sans">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <About />
            <HowToPlay />
            <JoinCTA />
          </>
        )}
        {currentPage === 'rules' && <Rules />}
        {currentPage === 'faq' && <FAQ />}
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
