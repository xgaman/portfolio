import { motion } from 'framer-motion';
import { profile, Project } from '@/data/profile';
import { GlassCard } from './GlassCard';
import { NeonText } from './NeonText';
import { Github, ExternalLink, Clock, Loader } from 'lucide-react';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isComingSoon = project.status === 'coming-soon';
  const isInProgress = project.status === 'in-progress';
  
  const glowColors: Array<'primary' | 'secondary' | 'accent' | 'tertiary'> = [
    'primary', 'secondary', 'accent', 'tertiary'
  ];

  return (
    <GlassCard 
      glowColor={glowColors[index % glowColors.length]} 
      delay={index * 0.1}
      className="h-full"
    >
      <div className="p-6 h-full flex flex-col">
        {/* Status Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className={`
            inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-inter
            ${isComingSoon ? 'bg-primary/20 text-primary border border-primary/30' : ''}
            ${isInProgress ? 'bg-accent/20 text-accent border border-accent/30' : ''}
            ${project.status === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : ''}
          `}>
            {isComingSoon && <Clock className="w-3 h-3" />}
            {isInProgress && <Loader className="w-3 h-3 animate-spin" />}
            <span className="capitalize">{project.status.replace('-', ' ')}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-orbitron text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground font-inter text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs font-inter rounded-md border border-border/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {!isComingSoon && (
          <div className="flex gap-4 mt-auto pt-4 border-t border-border/30">
            {project.githubLink && (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 link-glow"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
            {project.liveLink && (
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-300 link-glow"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </GlassCard>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      
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
            className="inline-block px-4 py-1 rounded-full bg-tertiary/10 border border-tertiary/30 text-tertiary text-sm font-inter mb-4"
          >
            My Work
          </motion.span>
          <NeonText size="xl" color="gradient" className="mb-4">
            PROJECTS
          </NeonText>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-inter">
            Showcasing my journey through code and creativity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {profile.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground font-inter">
            More projects coming soon! Check back later or visit my{' '}
            <a 
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-glow transition-colors duration-300 link-glow"
            >
              GitHub
            </a>
            {' '}for the latest updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
