import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { NeonText } from './NeonText';
import { GraduationCap, Briefcase } from 'lucide-react';

export const TimelineSection = () => {
  return (
    <section id="timeline" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
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
            className="inline-block px-4 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-inter mb-4"
          >
            My Journey
          </motion.span>
          <NeonText size="xl" color="gradient" className="mb-4">
            EDUCATION & EXPERIENCE
          </NeonText>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-inter">
            A timeline of my educational and professional journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-tertiary" />
          
          {/* Glowing orbs on the line */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary glow-primary"
          />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-4 h-4 rounded-full bg-tertiary glow-tertiary"
          />

          {/* Timeline Items */}
          <div className="space-y-16">
            {profile.timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="glass-card p-6 hover:glow-primary transition-all duration-500">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      {item.type === 'education' ? (
                        <GraduationCap className="w-5 h-5 text-primary" />
                      ) : (
                        <Briefcase className="w-5 h-5 text-accent" />
                      )}
                      <span className={`text-sm font-inter ${item.type === 'education' ? 'text-primary' : 'text-accent'}`}>
                        {item.type === 'education' ? 'Education' : 'Experience'}
                      </span>
                    </div>
                    <h3 className="font-orbitron text-lg font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-inter mb-2">
                      {item.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm font-inter leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-2/12 flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center
                      ${item.type === 'education' ? 'bg-primary/20 border-2 border-primary glow-primary' : 'bg-accent/20 border-2 border-accent glow-accent'}
                    `}
                  >
                    {item.type === 'education' ? (
                      <GraduationCap className="w-5 h-5 text-primary" />
                    ) : (
                      <Briefcase className="w-5 h-5 text-accent" />
                    )}
                  </motion.div>
                </div>

                {/* Date */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}>
                  <span className="font-orbitron text-xl font-bold text-gradient">
                    {item.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
