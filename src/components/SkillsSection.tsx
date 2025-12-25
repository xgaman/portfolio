import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { SkillBar } from './SkillBar';
import { NeonText } from './NeonText';

const skillColors: Array<'primary' | 'secondary' | 'accent' | 'tertiary'> = [
  'primary', 'secondary', 'accent', 'tertiary'
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-inter mb-4"
          >
            My Expertise
          </motion.span>
          <NeonText size="xl" color="gradient" className="mb-4">
            SKILLS & ABILITIES
          </NeonText>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-inter">
            Technologies and tools I've been working with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {profile.skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.1}
                color={skillColors[index % skillColors.length]}
              />
            ))}
          </div>
        </div>

        {/* Skill Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {profile.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="glass-card p-6 text-center group cursor-pointer"
            >
              <div className={`
                text-3xl font-orbitron font-bold mb-2 transition-all duration-300
                ${index % 4 === 0 ? 'text-primary group-hover:neon-text' : ''}
                ${index % 4 === 1 ? 'text-secondary group-hover:text-secondary-glow' : ''}
                ${index % 4 === 2 ? 'text-accent group-hover:neon-text-cyan' : ''}
                ${index % 4 === 3 ? 'text-tertiary group-hover:neon-text-pink' : ''}
              `}>
                {skill.name.charAt(0)}
              </div>
              <span className="text-sm text-muted-foreground font-inter">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
