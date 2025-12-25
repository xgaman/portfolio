import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { NeonText } from './NeonText';
import { NeonButton } from './NeonButton';
import { Typewriter } from './Typewriter';
import { ChevronDown, Github } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Welcome badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-inter text-muted-foreground">Welcome to my portfolio</span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <NeonText size="3xl" color="gradient" animate>
              {profile.name.toUpperCase()}
            </NeonText>
          </motion.div>

          {/* Typewriter subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <Typewriter 
              texts={profile.taglines} 
              className="text-xl md:text-2xl"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-inter leading-relaxed"
          >
            {profile.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <NeonButton 
              variant="primary" 
              size="lg" 
              onClick={() => scrollToSection('skills')}
            >
              View Skills
            </NeonButton>
            
            <NeonButton 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </NeonButton>
            
            <a 
              href={profile.github} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <NeonButton variant="ghost" size="lg">
                <Github className="w-5 h-5" />
                GitHub
              </NeonButton>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => scrollToSection('skills')}
            >
              <ChevronDown className="w-8 h-8 text-primary animate-pulse" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
