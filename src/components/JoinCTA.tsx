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
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#111] border border-white/5 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden group">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#36e826]/10 blur-[100px] rounded-full group-hover:bg-[#36e826]/20 transition-colors duration-700"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
              Готов стать <span className="text-[#36e826]">Легендой</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Присоединяйся к тысячам игроков, которые уже сражаются на арене. Твой путь к славе начинается здесь.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-[#36e826]/10 flex items-center justify-center text-[#36e826]">
                  <Sword size={20} />
                </div>
                <span className="font-medium">Честное PvP</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-[#36e826]/10 flex items-center justify-center text-[#36e826]">
                  <ShieldCheck size={20} />
                </div>
                <span className="font-medium">Мощный Античит</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-[#36e826]/10 flex items-center justify-center text-[#36e826]">
                  <Zap size={20} />
                </div>
                <span className="font-medium">Без Лагов</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopy}
              className="bg-[#36e826] hover:bg-[#2fb820] text-black px-10 py-5 rounded-xl font-black text-xl uppercase tracking-wider shadow-[0_0_30px_rgba(54,232,38,0.4)] hover:shadow-[0_0_50px_rgba(54,232,38,0.6)] transition-all flex items-center justify-center gap-3 mx-auto min-w-[300px]"
            >
              {copied ? <Check size={24} /> : <Copy size={24} />}
              <span>{copied ? 'IP СКОПИРОВАН!' : 'НАЧАТЬ ИГРАТЬ'}</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
