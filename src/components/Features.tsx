import { motion } from 'motion/react';
import { Sword, Gem, Shield, Zap, Trophy, Users, Crosshair } from 'lucide-react';

const features = [
  {
    icon: Sword,
    title: "Безумное PvP",
    description: "Идеальная регистрация ударов и отсутствие лагов. Твой скилл — твое единственное оружие.",
    colSpan: "md:col-span-2",
    color: "text-[#36e826]",
    delay: 0.1
  },
  {
    icon: Gem,
    title: "Экономика",
    description: "Продуманная система торговли и крафтов. Стань богатейшим игроком сервера.",
    colSpan: "md:col-span-1",
    color: "text-emerald-400",
    delay: 0.2
  },
  {
    icon: Users,
    title: "Кланы",
    description: "Объединяйся с друзьями, строй базы и доминируй над врагами.",
    colSpan: "md:col-span-1",
    color: "text-green-400",
    delay: 0.3
  },
  {
    icon: Trophy,
    title: "Турниры",
    description: "Еженедельные ивенты с ценными призами и уникальными титулами.",
    colSpan: "md:col-span-2",
    color: "text-[#36e826]",
    delay: 0.4
  },
  {
    icon: Crosshair,
    title: "Анти-Чит",
    description: "Мощная защита от нечестной игры. Мы за Fair Play.",
    colSpan: "md:col-span-3",
    color: "text-white",
    delay: 0.5
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export function Features() {
  return (
    <section className="py-0 bg-[#0a0a0a] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#36e826]/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-600/10 blur-[120px] rounded-full"
        />
      </div>
    </section>
  );
}
