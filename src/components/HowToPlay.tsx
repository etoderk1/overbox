import { motion } from 'motion/react';
import { Download, Server, Gamepad2, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: "1. Скачай Minecraft",
    description: "Тебе понадобится любая версия Minecraft 1.16.5+. Мы рекомендуем использовать TLauncher или официальный клиент.",
    action: "Скачать TLauncher",
    link: "https://tlauncher.org/"
  },
  {
    icon: Server,
    title: "2. Добавь Сервер",
    description: "Запусти игру, перейди в 'Сетевая игра', нажми 'Добавить' и введи IP нашего сервера.",
    ip: "play.overbox.fun",
    copy: true
  },
  {
    icon: Gamepad2,
    title: "3. Начни Побеждать",
    description: "Заходи на сервер, выбирай режим BoxPvP и покажи всем, кто здесь главный!",
    action: "Вступить в Discord",
    link: "https://discord.gg/boxpvp"
  }
];

export function HowToPlay() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Как начать <span className="text-[#36e826]">Играть</span>?
          </h2>
          <p className="text-gray-400 text-lg">
            Всего 3 простых шага отделяют тебя от эпических сражений.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#36e826]/0 via-[#36e826]/30 to-[#36e826]/0 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className="bg-[#1a1a1a] border border-white/5 p-8 rounded-2xl h-full hover:border-[#36e826]/30 transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#111] border border-[#36e826]/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(54,232,38,0.1)]">
                  <step.icon size={32} className="text-[#36e826]" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center">{step.title}</h3>
                <p className="text-gray-400 text-center mb-6 text-sm leading-relaxed">
                  {step.description}
                </p>

                <div className="text-center">
                  {step.copy ? (
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(step.ip!);
                        alert('IP скопирован!');
                      }}
                      className="inline-flex items-center gap-2 text-[#36e826] font-bold hover:underline cursor-pointer bg-[#36e826]/10 px-4 py-2 rounded-lg hover:bg-[#36e826]/20 transition-colors"
                    >
                      {step.ip} <CopyIcon />
                    </button>
                  ) : (
                    <a 
                      href={step.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-white font-bold hover:text-[#36e826] transition-colors"
                    >
                      {step.action} <ArrowRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CopyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );
}
