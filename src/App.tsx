import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Rules } from './components/Rules';
import { FAQ } from './components/FAQ';
import { JoinCTA } from './components/JoinCTA';
import { UkrainePayment } from './components/UkrainePayment';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (page: 'home' | 'rules' | 'faq' | 'donat') => {
    if (page === 'home') navigate('/');
    if (page === 'rules') navigate('/rules');
    if (page === 'faq') navigate('/faq');
    if (page === 'donat') navigate('/donat');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentPage = location.pathname === '/rules' ? 'rules'
    : location.pathname === '/faq' ? 'faq'
    : location.pathname === '/donat' ? 'donat'
    : 'home';

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#36e826] selection:text-black font-sans">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />

      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <JoinCTA />
            </>
          } />
          <Route path="/rules" element={<Rules />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/donat" element={<UkrainePayment />} />
        </Routes>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
