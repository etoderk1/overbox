import { motion } from 'motion/react';
import { Disc, MessageCircle, ShoppingBag } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'rules' | 'faq' | 'donat') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-12 md:pt-20 pb-8 md:pb-10 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[200px] md:h-[300px] bg-[#36e826]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-16">

          {/* Brand */}
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-[#36e826] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(54,232,38,0.3)] overflow-hidden">
                <img src="https://i.postimg.cc/g2hKy7ZQ/127.jpg" alt="OverBox Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-xl md:text-2xl text-white tracking-tight">OVERBOX</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 md:mb-8 text-sm md:text-base max-w-md">
              OverBox — это уникальный игровой проект Minecraft, созданный для тех, кто жаждет настоящих сражений. Присоединяйся к тысячам игроков и стань легендой арены.
            </p>
            <div className="flex gap-3 md:gap-4">
              <SocialButton icon={MessageCircle} href="https://t.me/overboxpvp" />
              <SocialButton icon={Disc} href="https://discord.gg/4t8WMHPUBJ" />
              <SocialButton icon={ShoppingBag} href="https://shop.overbox.fun" />
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-4">
            <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Навигация</h3>
            <ul className="space-y-3 md:space-y-4">
              <li><FooterLink onClick={() => onNavigate('home')}>Главная</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate('rules')}>Правила Сервера</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate('faq')}>Частые Вопросы</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate('donat')}>⭐️ Оплата из Украины</FooterLink></li>
              <li><a href="https://shop.overbox.fun" className="text-gray-400 hover:text-[#36e826] transition-colors text-sm md:text-base">Магазин</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 md:pt-8 text-center md:text-left">
          <p className="text-gray-500 text-xs md:text-sm">
            ©2026 Авторское право - OverBox - Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({ icon: Icon, href }: { icon: any, href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#36e826] hover:border-[#36e826]/30 transition-all hover:-translate-y-1"
    >
      <Icon size={20} />
    </a>
  );
}

function FooterLink({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-gray-400 hover:text-[#36e826] transition-colors text-left text-sm md:text-base"
    >
      {children}
    </button>
  );
}
