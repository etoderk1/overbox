import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Send, User, MessageSquare, Gift, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export function Ideas() {
  const [nickname, setNickname] = useState('');
  const [idea, setIdea] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOnCooldown, setIsOnCooldown] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const checkCooldown = () => {
      const lastSubmission = localStorage.getItem('lastIdeaSubmission');
      if (lastSubmission) {
        const lastTime = parseInt(lastSubmission, 10);
        const now = Date.now();
        const diff = now - lastTime;
        const cooldownTime = 24 * 60 * 60 * 1000;

        if (diff < cooldownTime) {
          setIsOnCooldown(true);
          const remainingMs = cooldownTime - diff;
          const hours = Math.floor(remainingMs / (1000 * 60 * 60));
          const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
          setTimeRemaining(`${hours} ч. ${minutes} мин.`);
        } else {
          setIsOnCooldown(false);
          localStorage.removeItem('lastIdeaSubmission');
        }
      }
    };

    checkCooldown();
    const interval = setInterval(checkCooldown, 60000);
    return () => clearInterval(interval);
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!nickname.trim()) {
      setError('Пожалуйста, введите ваш никнейм.');
      return;
    }
    if (!idea.trim() || idea.length < 20) {
      setError('Идея должна содержать не менее 20 символов.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xnjgvegv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          nickname: nickname.trim(),
          idea: idea.trim(),
          _subject: `Новая идея от ${nickname.trim()} — OverBox`,
        }),
      });

      if (response.ok) {
        localStorage.setItem('lastIdeaSubmission', Date.now().toString());
        setIsSubmitted(true);
        setIsOnCooldown(true);
      } else {
        const data = await response.json();
        setError(data?.errors?.[0]?.message || 'Ошибка отправки. Попробуйте позже.');
      }
    } catch {
      setError('Нет соединения. Проверьте интернет и попробуйте снова.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-[#0a0a0a] min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#36e826]/5 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-yellow-500/5 blur-[80px] md:blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 bg-[#36e826]/10 rounded-2xl mb-4 md:mb-6">
            <Lightbulb size={40} className="text-[#36e826] md:hidden" />
            <Lightbulb size={48} className="text-[#36e826] hidden md:block" />
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6">
            Предложить <span className="text-[#36e826]">Идею</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            У вас есть крутая идея для сервера? Поделитесь ей с нами! Мы внимательно читаем все предложения.
          </p>
        </motion.div>

        {/* Reward Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-[#36e826]/20 to-transparent border border-[#36e826]/30 rounded-2xl md:rounded-3xl p-5 md:p-8 mb-8 md:mb-10 flex flex-col md:flex-row items-center gap-4 md:gap-6"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 bg-[#36e826]/20 rounded-2xl flex items-center justify-center shrink-0">
            <Gift size={28} className="text-[#36e826]" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Вознаграждение за лучшие идеи!</h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Если ваша идея будет реализована на сервере, вы получите ценные награды. Сделаем OverBox лучше вместе!
            </p>
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1a1a1a] border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 md:py-12"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#36e826]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-[#36e826] md:hidden" />
                <CheckCircle2 size={48} className="text-[#36e826] hidden md:block" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Спасибо за идею!</h3>
              <p className="text-gray-400 text-base md:text-lg max-w-md mx-auto">
                Ваше предложение успешно отправлено администрации. Если оно нам понравится, мы выдадим награду вам на сервере!
              </p>
            </motion.div>
          ) : isOnCooldown ? (
            <div className="text-center py-10 md:py-12">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={40} className="text-yellow-500 md:hidden" />
                <Clock size={48} className="text-yellow-500 hidden md:block" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Лимит исчерпан</h3>
              <p className="text-gray-400 text-base md:text-lg max-w-md mx-auto mb-6">
                Вы уже предлагали идею сегодня. В целях защиты от спама, отправлять идеи можно только 1 раз в день.
              </p>
              <div className="inline-flex items-center gap-2 bg-[#0a0a0a] border border-white/10 px-5 md:px-6 py-3 rounded-xl text-yellow-500 font-mono text-sm md:text-base">
                <Clock size={18} />
                <span>Осталось: {timeRemaining}</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl flex items-center gap-3 text-sm md:text-base"
                >
                  <AlertCircle size={18} className="shrink-0" />
                  <p>{error}</p>
                </motion.div>
              )}

              {/* Nickname */}
              <div className="space-y-2 md:space-y-3">
                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <User size={15} /> Ваш никнейм
                </label>
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="Steve"
                  disabled={isLoading}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#36e826] transition-colors disabled:opacity-50 text-sm md:text-base"
                  maxLength={16}
                />
              </div>

              {/* Idea */}
              <div className="space-y-2 md:space-y-3">
                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <MessageSquare size={15} /> Описание идеи
                </label>
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="Я предлагаю добавить..."
                  disabled={isLoading}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#36e826] transition-colors resize-none h-36 md:h-40 disabled:opacity-50 text-sm md:text-base"
                  maxLength={1000}
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Минимум 20 символов</span>
                  <span className={idea.length < 20 ? 'text-red-500' : 'text-[#36e826]'}>
                    {idea.length} / 1000
                  </span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#36e826] hover:bg-[#2fcc21] disabled:bg-[#36e826]/50 disabled:cursor-not-allowed text-black font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 group text-sm md:text-base"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    Отправить идею
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-500">
                Отправляя идею, вы соглашаетесь с правилами проекта. Лимит: 1 идея в день.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
