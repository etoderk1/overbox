import { motion } from 'motion/react';
import { ComponentProps, ReactNode } from 'react';

type ButtonProps = ComponentProps<typeof motion.button> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
};

export function Button({ children, variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  const baseStyles = "rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white btn-glow border border-violet-500/30",
    secondary: "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10",
    outline: "border-2 border-violet-500 text-violet-400 hover:bg-violet-500/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
