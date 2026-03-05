import { motion } from 'motion/react';
import { MessageSquare, Gamepad2, ShieldAlert, AlertTriangle, Info, Gavel } from 'lucide-react';

const generalRules = [
  "Присоединяясь к игре на наших серверах, вы даёте свое согласие с этими правилами.",
  "Игнорирование этих правил не избавляет вас от последствий.",
  "Администрация оставляет за собой право применять санкции (блокировки или ограничения) даже за нарушения, не описанные здесь.",
  "Все расходы на игру являются исключительно вашей инициативой и не возвращаются. Мы не несем ответственности за ошибки при переводе средств третьим лицам или неправильному серверу.",
  "Для оспаривания действий администрации необходимо предоставить следующие данные: ваш никнейм, причину наказания, скриншот, демонстрирующий наказание, и имя сотрудника, который это сделал.",
  "Данные правила могут быть изменены администрацией без предварительного уведомления игроков."
];

const chatRules = [
  {
    id: "2.1",
    text: "Не допускается публикация бессмысленных сообщений (спам), капс. Рассылка идентичных сообщений (3+).",
    punishment: "Мут 20 минут"
  },
  {
    id: "2.2",
    text: "Запрещены просьбы о пожертвованиях, предоставлении премиум-функций, игровых предметов или валюты.",
    punishment: "Мут 10 минут"
  },
  {
    id: "2.3",
    text: "Разжигание вражды (национальной, политической, религиозной).",
    punishment: "Мут 6 часов"
  },
  {
    id: "2.4",
    text: "Реклама сторонних ресурсов.",
    punishment: "Бан 30 дней"
  },
  {
    id: "2.4.1",
    text: "Упоминание сторонних проектов/серверов.",
    punishment: "Мут 2 дня"
  },
  {
    id: "2.5",
    text: "Оскорбления, хамство, аморальное поведение.",
    punishment: "Мут 1 час"
  },
  {
    id: "2.5.1",
    text: "Оскорбление администрации/проекта.",
    punishment: "Мут 3 часа"
  },
  {
    id: "2.5.2",
    text: "Оскорбление родных.",
    punishment: "Мут 6 часов"
  },
  {
    id: "2.6",
    text: "Публичная критика/обсуждение действий администрации.",
    punishment: "Мут 4 часа"
  },
  {
    id: "2.7",
    text: "Дезморал/Распространение личной информации.",
    punishment: "Мут 1 сутки"
  },
  {
    id: "2.8",
    text: "Обход мута с твинков.",
    punishment: "Мут 3 суток"
  }
];

const gameRules = [
  {
    id: "3.1",
    text: "Использование/распространение багов и уязвимостей.",
    punishment: "Бан по IP 1 день"
  },
  {
    id: "3.2",
    text: "Некорректные никнеймы/скины (оскорбительные, политические, 18+, похожие на админские).",
    punishment: "Вечный бан"
  },
  {
    id: "3.3",
    text: "Постройки 18+, свастика, политика.",
    punishment: "Бан по IP 30 минут"
  },
  {
    id: "3.4",
    text: "Помеха на спавне (застройка).",
    punishment: "Бан по IP 30 минут"
  },
  {
    id: "3.5",
    text: "Передача аккаунта.",
    punishment: "Вечный бан по IP"
  },
  {
    id: "3.6",
    text: "RMT (Продажа за реальные деньги).",
    punishment: "Вечный бан по IP"
  },
  {
    id: "3.7",
    text: "Обман администрации.",
    punishment: "Бан по IP 1 сутки"
  },
  {
    id: "3.8",
    text: "Тимминг (максимум 4 человека).",
    punishment: "Бан по IP 1 сутки всем участникам"
  },
  {
    id: "3.9",
    text: "Обход бана.",
    punishment: "Бан по IP 30 дней"
  },
  {
    id: "3.10",
    text: "Игра с читером в пати.",
    punishment: "Бан по IP 3 суток"
  }
];

const cheatRules = [
  {
    id: "4.1",
    text: "Использование читов/макросов/ПО.",
    punishment: "Бан по IP 30 дней"
  },
  {
    id: "4.2",
    text: "Хранение читов/ПО.",
    punishment: "Бан по IP 20 дней"
  },
  {
    id: "4.3",
    text: "Отказ от проверки/Выход при проверке.",
    punishment: "Бан по IP 30 дней"
  },
  {
    id: "4.4",
    text: "Модераторы сами выбирают метод проверки (AnyDesk/Discord). Инструменты: Everything, Shellbag, Process Hacker 2, и др.",
    punishment: "Инфо"
  }
];

function RuleCard({ id, text, punishment }: { id: string, text: string, punishment: string }) {
  return (
    <div className="bg-[#1a1a1a] border border-white/5 p-4 rounded-xl hover:border-[#36e826]/30 transition-colors group">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="flex-shrink-0">
          <span className="inline-block px-3 py-1 bg-[#36e826]/10 text-[#36e826] font-bold rounded-lg border border-[#36e826]/20 group-hover:bg-[#36e826] group-hover:text-black transition-colors">
            {id}
          </span>
        </div>
        <div className="flex-grow">
          <p className="text-gray-200 mb-2 font-medium">{text}</p>
          <div className="flex items-center gap-2 text-sm text-red-400">
            <Gavel size={16} />
            <span className="font-bold uppercase tracking-wider">{punishment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Rules() {
  return (
    <section className="pt-32 pb-24 bg-[#0a0a0a] min-h-screen relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[#36e826]/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-emerald-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Правила <span className="text-[#36e826]">Сервера</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Соблюдение правил — залог комфортной игры для всех. Незнание правил не освобождает от ответственности.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* General Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#1a1a1a]/50 backdrop-blur border border-white/10 p-8 rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <Info className="text-[#36e826]" size={32} />
              <h2 className="text-2xl font-bold text-white">Общие Положения</h2>
            </div>
            <ul className="space-y-4">
              {generalRules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#36e826] flex-shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Chat Rules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-2">
              <MessageSquare className="text-[#36e826]" size={32} />
              <h2 className="text-2xl font-bold text-white">2. Правила Чата</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {chatRules.map((rule) => (
                <RuleCard key={rule.id} {...rule} />
              ))}
            </div>
          </motion.div>

          {/* Game Rules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-2">
              <Gamepad2 className="text-[#36e826]" size={32} />
              <h2 className="text-2xl font-bold text-white">3. Игровой Процесс</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gameRules.map((rule) => (
                <RuleCard key={rule.id} {...rule} />
              ))}
            </div>
          </motion.div>

          {/* Cheat Rules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-2">
              <ShieldAlert className="text-red-500" size={32} />
              <h2 className="text-2xl font-bold text-white">4. Читы и Проверки</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {cheatRules.map((rule) => (
                <RuleCard key={rule.id} {...rule} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
