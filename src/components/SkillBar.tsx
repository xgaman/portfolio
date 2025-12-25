import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
  color?: 'primary' | 'secondary' | 'accent' | 'tertiary';
}

export const SkillBar = ({ name, level, delay = 0, color = 'primary' }: SkillBarProps) => {
  const colorStyles = {
    primary: {
      bar: 'bg-gradient-to-r from-primary via-primary-glow to-secondary',
      glow: 'shadow-[0_0_20px_hsl(270_100%_60%/0.5)]',
      text: 'text-primary',
    },
    secondary: {
      bar: 'bg-gradient-to-r from-secondary via-secondary-glow to-accent',
      glow: 'shadow-[0_0_20px_hsl(210_100%_55%/0.5)]',
      text: 'text-secondary',
    },
    accent: {
      bar: 'bg-gradient-to-r from-accent via-accent-glow to-tertiary',
      glow: 'shadow-[0_0_20px_hsl(180_100%_50%/0.5)]',
      text: 'text-accent',
    },
    tertiary: {
      bar: 'bg-gradient-to-r from-tertiary via-tertiary-glow to-primary',
      glow: 'shadow-[0_0_20px_hsl(320_100%_60%/0.5)]',
      text: 'text-tertiary',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className={`font-orbitron font-semibold text-sm md:text-base ${colorStyles[color].text} transition-all duration-300 group-hover:tracking-wider`}>
          {name}
        </span>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          className="text-muted-foreground text-sm font-inter"
        >
          {level}%
        </motion.span>
      </div>
      
      <div className="relative h-3 md:h-4 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm border border-border/30">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className={`
            absolute inset-y-0 left-0 rounded-full
            ${colorStyles[color].bar}
            ${colorStyles[color].glow}
            transition-shadow duration-300
            group-hover:shadow-[0_0_30px_hsl(270_100%_60%/0.7)]
          `}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </motion.div>
        
        {/* Glow dot at the end */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: delay + 1 }}
          style={{ left: `${level}%` }}
          className={`
            absolute top-1/2 -translate-y-1/2 -translate-x-1/2
            w-2 h-2 md:w-3 md:h-3 rounded-full bg-foreground
            ${colorStyles[color].glow}
            animate-pulse
          `}
        />
      </div>
    </motion.div>
  );
};
