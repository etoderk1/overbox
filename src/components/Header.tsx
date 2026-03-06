import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'rules' | 'faq' | 'donat') => void;
  currentPage: 'home' | 'rules' | 'faq' | 'donat';
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрывать меню при изменении размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Блокировать скролл когда меню открыто
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Главная', id: 'home' as const },
    { name: 'Правила', id: 'rules' as const },
    { name: 'FAQ', id: 'faq' as const },
    { name: '⭐️ Оплата из Украины', id: 'donat' as const },
  ];

  const handleNavClick = (id: 'home' | 'rules' | 'faq' | 'donat') => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-4 md:py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <div className="absolute inset-0 bg-[#36e826] rounded-xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative w-full h-full bg-black border border-white/10 rounded-xl flex items-center justify-center overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                <img src="https://i.postimg.cc/g2hKy7ZQ/127.jpg" alt="OverBox Logo" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="font-black text-xl md:text-2xl text-white tracking-wide group-hover:text-[#36e826] transition-colors duration-300 drop-shadow-[0_0_10px_rgba(54,232,38,0.3)]">
              OVERBOX
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  currentPage === link.id ? 'text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                {currentPage === link.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#36e826] rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://shop.overbox.fun"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-[#36e826] font-medium transition-colors"
            >
              Магазин <ExternalLink size={16} />
            </a>
            <a
              href="https://discord.gg/FPDxVBKpAq"
              target="_blank"
              rel="noreferrer"
              className="bg-[#36e826] hover:bg-[#2fb820] text-black px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-[0_0_15px_rgba(54,232,38,0.2)] hover:shadow-[0_0_25px_rgba(54,232,38,0.4)] hover:-translate-y-0.5"
            >
              Discord
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:text-[#36e826] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-[57px] bg-[#0a0a0a] z-40 overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between p-4 rounded-xl border ${
                    currentPage === link.id
                      ? 'bg-[#36e826]/10 border-[#36e826]/30 text-[#36e826]'
                      : 'bg-[#111] border-white/5 text-white'
                  }`}
                >
                  <span className="text-base font-bold">{link.name}</span>
                  {currentPage === link.id && <ChevronRight size={18} />}
                </button>
              ))}

              <div className="h-px bg-white/10 my-3" />

              <a
                href="https://shop.overbox.fun"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-[#111] border border-white/5 text-white hover:border-[#36e826]/30 transition-colors"
              >
                <span className="text-base font-bold">Магазин</span>
                <ExternalLink size={18} className="text-gray-400" />
              </a>

              <a
                href="https://discord.gg/FPDxVBKpAq"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center p-4 rounded-xl bg-[#36e826] text-black font-black text-base mt-2"
              >
                Вступить в Discord
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
