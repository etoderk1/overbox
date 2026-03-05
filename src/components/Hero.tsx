import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Copy, ShoppingCart, Users, Server, Gamepad2, Check } from 'lucide-react';

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [onlinePlayers, setOnlinePlayers] = useState<number | null>(null);

  const serverIp = "play.overbox.fun";

  const handleCopy = () => {
    navigator.clipboard.writeText(serverIp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const fetchOnline = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIp}`);
        const data = await response.json();
        if (data.online) {
          setOnlinePlayers(data.players.online);
        } else {
          setOnlinePlayers(0);
        }
      } catch (e) {
        console.error("Failed to fetch player count", e);
        setOnlinePlayers(0);
      }
    };
    
    fetchOnline();
    const interval = setInterval(fetchOnline, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/gk2MF463/photo-2026-02-21-14-00-45.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark Void Overlay */}
        <div className="absolute inset-0 bg-[#050505]/85"></div>
        {/* Radial Gradient for Spotlight Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(5,5,5,0.4)_0%,_#050505_100%)]"></div>
      </div>

      {/* Dynamic Blobs (Subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#36e826]/5 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-emerald-800/5 blur-[150px] rounded-full"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 text-left"
          >

            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
              Твое Новое <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36e826] to-emerald-500">Приключение</span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
              Залетай на <span className="text-white font-bold">OverBox</span>. Прокачивайся, сражайся в интенсивных PvP битвах и доминируй в топе лидеров.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className="group relative bg-[#36e826] hover:bg-[#2fb820] text-black px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(54,232,38,0.3)] hover:shadow-[0_0_30px_rgba(54,232,38,0.5)] flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                {copied ? <Check size={24} /> : <Copy size={24} />}
                <span>{copied ? 'IP СКОПИРОВАН!' : 'СКОПИРОВАТЬ IP'}</span>
              </motion.button>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://shop.overbox.fun"
                className="group bg-[#1a1a1a] border border-white/10 hover:border-[#36e826]/50 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 hover:bg-[#232323]"
              >
                <ShoppingCart size={24} className="text-gray-400 group-hover:text-[#36e826] transition-colors" />
                <span>МАГАЗИН</span>
              </motion.a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/5 p-4 rounded-2xl">
                <div className="flex items-center gap-3 mb-1">
                  <Users size={20} className="text-[#36e826]" />
                  <h3 className="text-2xl font-bold text-white">25к+</h3>
                </div>
                <p className="text-gray-500 text-sm font-medium">Зарегистрированные игроки.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/5 p-4 rounded-2xl">
                <div className="flex items-center gap-3 mb-1">
                  <Server size={20} className="text-[#36e826]" />
                  <h3 className="text-2xl font-bold text-white">{onlinePlayers !== null ? onlinePlayers : '...'}</h3>
                </div>
                <p className="text-gray-500 text-sm font-medium">Онлайн</p>
              </div>
            </div>
          </motion.div>


        </div>
      </div>

      {/* Smooth Gradient Transition */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}
