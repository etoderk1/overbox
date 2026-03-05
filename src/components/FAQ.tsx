import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Sword, Gem, Shield, Zap } from 'lucide-react';

const faqData = [
  {
    category: "Общие вопросы",
    icon: Sword,
    questions: [
      {
        q: "Как зайти на сервер?",
        a: "Чтобы зайти на наш сервер, откройте Minecraft, нажмите \"Сетевая игра\", затем добавьте наш сервер, используя IP-адрес \"play.overbox.fun\". Нажмите \"Подключиться\", чтобы начать играть!"
      },
      {
        q: "Какие версии Minecraft поддерживаются?",
        a: "Наш сервер поддерживает версии Minecraft от 1.16.5 до самой последней. Для наилучшего опыта мы рекомендуем использовать последнюю версию."
      },
      {
        q: "Сервер только для лицензии или пиратский?",
        a: "Мы поддерживаем вход как с лицензии, так и с пиратских версий, так что любой может зайти и наслаждаться игрой. Просто будьте уважительны и соблюдайте правила!"
      }
    ]
  },
  {
    category: "Поддержка и Сообщество",
    icon: Shield,
    questions: [
      {
        q: "Как пожаловаться на игрока или проблему?",
        a: "Если вы столкнулись с какими-либо проблемами, такими как нарушители правил или баги сервера, вы можете сообщить о них через систему тикетов в нашем Discord."
      },
      {
        q: "Как стать сотрудником?",
        a: "Чтобы подать заявку на должность в персонале, зайдите в наш Discord и посетите канал с заявками. Там вы найдете всю необходимую информацию и инструкции для подачи заявки."
      },
      {
        q: "Как я могу поддержать сервер?",
        a: "Вы можете поддержать нас, делая пожертвования или покупая донаты в нашем магазине. Любая помощь помогает серверу работать!"
      }
    ]
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-32 pb-24 bg-[#0a0a0a] min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-[#36e826]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-emerald-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-[#36e826]/10 rounded-2xl mb-6">
            <HelpCircle size={48} className="text-[#36e826]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Частые <span className="text-[#36e826]">Вопросы</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Всё, что нужно знать о режиме BoxPvP и нашем сервере.
          </p>
        </motion.div>

        <div className="space-y-12">
          {faqData.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <category.icon className="text-[#36e826]" size={28} />
                <h2 className="text-2xl font-bold text-white">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((item, qIndex) => {
                  const uniqueId = `${catIndex}-${qIndex}`;
                  const isOpen = openIndex === uniqueId;

                  return (
                    <div 
                      key={qIndex}
                      className="bg-[#1a1a1a] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#36e826]/30"
                    >
                      <button
                        onClick={() => toggleAccordion(uniqueId)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left group"
                      >
                        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-[#36e826]' : 'text-gray-200 group-hover:text-white'}`}>
                          {item.q}
                        </span>
                        <ChevronDown 
                          className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#36e826]' : ''}`}
                          size={20}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
