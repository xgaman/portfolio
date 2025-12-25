import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NeonButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const NeonButton = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  glow = true,
  className = '',
  onClick,
  disabled = false,
  type = 'button'
}: NeonButtonProps) => {
  const baseStyles = `
    relative overflow-hidden font-orbitron font-semibold
    rounded-xl transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-primary/50
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-primary to-secondary text-primary-foreground
      hover:from-primary-glow hover:to-secondary-glow
      ${glow ? 'hover:shadow-[0_0_30px_hsl(270_100%_60%/0.5)]' : ''}
    `,
    secondary: `
      bg-gradient-to-r from-accent to-tertiary text-accent-foreground
      hover:from-accent-glow hover:to-tertiary-glow
      ${glow ? 'hover:shadow-[0_0_30px_hsl(180_100%_50%/0.5)]' : ''}
    `,
    outline: `
      bg-transparent border-2 border-primary text-primary
      hover:bg-primary/10 hover:border-primary-glow
      ${glow ? 'hover:shadow-[0_0_20px_hsl(270_100%_60%/0.3)]' : ''}
    `,
    ghost: `
      bg-transparent text-foreground
      hover:bg-primary/10 hover:text-primary
    `,
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {/* Shine effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
