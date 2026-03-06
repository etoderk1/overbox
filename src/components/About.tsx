import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">

          {/* Image — показывается первой на мобиле */}
          <div className="flex justify-center order-first lg:order-last lg:w-3/12">
            <div className="relative w-44 h-44 md:w-64 md:h-64 rounded-full border-2 border-[#36e826] overflow-hidden shadow-[0_0_30px_rgba(54,232,38,0.2)] bg-[#1a1a1a]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
              <img
                src="https://i.postimg.cc/rmwWHZDk/vzgerender-villager-png-256x256.png"
                alt="Villager"
                className="w-full h-full object-cover transform scale-110 translate-y-4"
              />
            </div>
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-sm md:text-lg font-bold text-gray-400 mb-2 tracking-wide uppercase">
              О НАС
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              OverBox – Уникальный PvP Опыт.
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              OverBox — это динамичный, соревновательный сервер Minecraft, созданный для игроков, которые любят экшен и битвы, основанные на скилле. Мы сосредоточились на создании идеального режима BoxPvP, где ты сможешь прокачивать своего персонажа, добывать ресурсы и сражаться за первенство на арене.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
