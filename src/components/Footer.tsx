import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Github, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/30">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="font-orbitron text-lg font-bold text-gradient mb-2">
              {profile.name}
            </p>
            <p className="text-muted-foreground text-sm font-inter">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-muted-foreground text-sm font-inter"
          >
            Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-tertiary fill-tertiary" />
            </motion.span>
            and code
          </motion.div>

          {/* Social Link */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            <span className="font-inter text-sm">GitHub</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};
