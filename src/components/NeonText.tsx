import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NeonTextProps {
  children: ReactNode;
  className?: string;
  color?: 'primary' | 'accent' | 'tertiary' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  animate?: boolean;
}

export const NeonText = ({ 
  children, 
  className = '', 
  color = 'primary',
  size = 'xl',
  animate = false
}: NeonTextProps) => {
  const colorStyles = {
    primary: 'text-primary neon-text',
    accent: 'text-accent neon-text-cyan',
    tertiary: 'text-tertiary neon-text-pink',
    gradient: 'text-gradient',
  };

  const sizeStyles = {
    sm: 'text-lg md:text-xl',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
    xl: 'text-3xl md:text-4xl lg:text-5xl',
    '2xl': 'text-4xl md:text-5xl lg:text-6xl',
    '3xl': 'text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
  };

  if (animate) {
    return (
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`
          font-orbitron font-bold tracking-wider
          ${colorStyles[color]}
          ${sizeStyles[size]}
          ${className}
        `}
      >
        {children}
      </motion.h1>
    );
  }

  return (
    <h1
      className={`
        font-orbitron font-bold tracking-wider
        ${colorStyles[color]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </h1>
  );
};
