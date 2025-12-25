import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'primary' | 'secondary' | 'accent' | 'tertiary';
  hover?: boolean;
  delay?: number;
}

export const GlassCard = ({ 
  children, 
  className = '', 
  glowColor = 'primary',
  hover = true,
  delay = 0
}: GlassCardProps) => {
  const glowStyles = {
    primary: 'hover:shadow-[0_0_30px_hsl(270_100%_60%/0.3)]',
    secondary: 'hover:shadow-[0_0_30px_hsl(210_100%_55%/0.3)]',
    accent: 'hover:shadow-[0_0_30px_hsl(180_100%_50%/0.3)]',
    tertiary: 'hover:shadow-[0_0_30px_hsl(320_100%_60%/0.3)]',
  };

  const borderGradients = {
    primary: 'before:bg-gradient-to-r before:from-primary before:to-secondary',
    secondary: 'before:bg-gradient-to-r before:from-secondary before:to-accent',
    accent: 'before:bg-gradient-to-r before:from-accent before:to-tertiary',
    tertiary: 'before:bg-gradient-to-r before:from-tertiary before:to-primary',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      className={`
        relative overflow-hidden rounded-2xl
        bg-card/40 backdrop-blur-xl
        border border-border/30
        transition-all duration-500
        ${hover ? glowStyles[glowColor] : ''}
        ${className}
      `}
    >
      {/* Animated border gradient */}
      <div className={`
        absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500
        before:absolute before:inset-0 before:rounded-2xl before:p-[1px]
        ${borderGradients[glowColor]}
      `} />
      
      {/* Inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
