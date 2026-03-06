import { motion } from 'motion/react';
import { Disc, MessageSquare, CreditCard, Clock } from 'lucide-react';

export function UkrainePayment() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-[#0a0a0a] min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#36e826]/5 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/5 blur-[80px] md:blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-[#36e826]/10 rounded-2xl mb-4 md:mb-6">
            <CreditCard size={36} className="text-[#36e826] md:hidden" />
            <CreditCard size={48} className="text-[#36e826] hidden md:block" />
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6">
            Как оплатить из <span className="text-[#36e826]">Украины</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Оплата из Украины доступна через нашу систему тикетов в Discord. Это быстро, безопасно и занимает всего пару минут.
          </p>
        </motion.div>

        {/* Discord CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-[#1a1a1a] border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 mb-8 md:mb-16 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2]/10 to-transparent opacity-50" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex items-center gap-4 md:gap-6 text-center md:text-left flex-col md:flex-row">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#5865F2] rounded-2xl flex items-center justify-center shadow-lg shadow-[#5865F2]/20 flex-shrink-0">
                <Disc size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Напишите нам в Discord</h3>
                <p className="text-gray-400 text-sm md:text-base">Мы поможем провести платеж вручную</p>
              </div>
            </div>

            <a
              href="https://discord.gg/4t8WMHPUBJ"
              target="_blank"
              rel="noreferrer"
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-lg shadow-[#5865F2]/20 hover:shadow-[#5865F2]/40 hover:-translate-y-1 flex items-center gap-2 w-full md:w-auto justify-center"
            >
              <Disc size={20} />
              Перейти в Discord
            </a>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <StepCard number="01" title="Зайдите в Discord" description="Перейдите на наш сервер по кнопке выше или ссылке." icon={Disc} delay={0.2} />
          <StepCard number="02" title="Создайте тикет" description="Найдите канал 'создать-тикет' или 'поддержка' в списке каналов." icon={MessageSquare} delay={0.3} />
          <StepCard number="03" title="Выберите категорию" description="Нажмите на кнопку 'Донат Руб/Грн/Тенге/Стим' в меню тикета." icon={CreditCard} delay={0.4} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 md:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full text-xs md:text-sm">
            <Clock size={14} className="text-[#36e826]" />
            <span>Время ответа обычно составляет менее 2 минут</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({ number, title, description, icon: Icon, delay }: { number: string, title: string, description: string, icon: any, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-[#111] border border-white/5 p-5 md:p-6 rounded-2xl relative group hover:border-[#36e826]/30 transition-colors flex md:block gap-4 items-start"
    >
      <div className="text-3xl md:text-4xl font-black text-white/5 absolute top-3 right-3 md:top-4 md:right-4 group-hover:text-[#36e826]/10 transition-colors">
        {number}
      </div>
      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-[#36e826] group-hover:scale-110 transition-transform flex-shrink-0 md:mb-4">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
