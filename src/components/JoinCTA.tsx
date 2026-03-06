import { useState } from 'react';
import { motion } from 'motion/react';
import { Sword, ShieldCheck, Zap, Copy, Check } from 'lucide-react';

export function JoinCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("play.overbox.fun");
    } catch {
      const el = document.createElement('textarea');
      el.value = "play.overbox.fun";
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.focus();
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#111] border border-white/5 rounded-2xl md:rounded-3xl p-8 md:p-20 text-center relative overflow-hidden group">

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#36e826]/10 blur-[80px] md:blur-[100px] rounded-full group-hover:bg-[#36e826]/20 transition-colors duration-700"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-6xl font-black text-white mb-4 md:mb-6 uppercase tracking-tight">
              Готов стать <span className="text-[#36e826]">Легендой</span>?
            </h2>
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-10">
              Присоединяйся к тысячам игроков, которые уже сражаются на арене. Твой путь к славе начинается здесь.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12">
              {[
                { icon: Sword, label: 'Честное PvP' },
                { icon: ShieldCheck, label: 'Мощный Античит' },
                { icon: Zap, label: 'Без Лагов' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 md:gap-3 text-gray-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#36e826]/10 flex items-center justify-center text-[#36e826]">
                    <Icon size={16} />
                  </div>
                  <span className="font-medium text-sm md:text-base">{label}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopy}
              className="bg-[#36e826] hover:bg-[#2fb820] text-black px-8 py-4 md:px-10 md:py-5 rounded-xl font-black text-lg md:text-xl uppercase tracking-wider shadow-[0_0_30px_rgba(54,232,38,0.4)] hover:shadow-[0_0_50px_rgba(54,232,38,0.6)] transition-all flex items-center justify-center gap-3 mx-auto w-full sm:w-auto sm:min-w-[300px]"
            >
              {copied ? <Check size={22} /> : <Copy size={22} />}
              <span>{copied ? 'IP СКОПИРОВАН!' : 'НАЧАТЬ ИГРАТЬ'}</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
