import { motion } from 'framer-motion';
import { useState } from 'react';
import { profile } from '@/data/profile';
import { NeonText } from './NeonText';
import { NeonButton } from './NeonButton';
import { GlassCard } from './GlassCard';
import { Github, Mail, Send, Linkedin, Twitter } from 'lucide-react';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully!', {
      description: 'Thank you for reaching out. I\'ll get back to you soon!',
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Github, href: profile.github, label: 'GitHub', color: 'hover:text-primary hover:glow-primary' },
    ...(profile.linkedin ? [{ icon: Linkedin, href: profile.linkedin, label: 'LinkedIn', color: 'hover:text-secondary hover:glow-secondary' }] : []),
    ...(profile.twitter ? [{ icon: Twitter, href: profile.twitter, label: 'Twitter', color: 'hover:text-accent hover:glow-accent' }] : []),
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email', color: 'hover:text-tertiary hover:glow-tertiary' },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      
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
            className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-inter mb-4"
          >
            Get In Touch
          </motion.span>
          <NeonText size="xl" color="gradient" className="mb-4">
            CONTACT ME
          </NeonText>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-inter">
            Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <GlassCard glowColor="primary" hover={false} className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-orbitron text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted/30 border border-border/50 rounded-xl
                    text-foreground font-inter placeholder:text-muted-foreground
                    focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                    transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-orbitron text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted/30 border border-border/50 rounded-xl
                    text-foreground font-inter placeholder:text-muted-foreground
                    focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                    transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-orbitron text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-muted/30 border border-border/50 rounded-xl
                    text-foreground font-inter placeholder:text-muted-foreground
                    focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                    transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <NeonButton 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                    />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                )}
              </NeonButton>
            </form>
          </GlassCard>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <GlassCard glowColor="accent" hover={false} className="p-8">
              <h3 className="font-orbitron text-xl font-bold text-foreground mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <a 
                    href={`mailto:${profile.email}`}
                    className="font-inter hover:text-primary transition-colors duration-300"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* Social Links */}
            <GlassCard glowColor="tertiary" hover={false} className="p-8">
              <h3 className="font-orbitron text-xl font-bold text-foreground mb-6">
                Follow Me
              </h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`
                      p-4 rounded-xl bg-muted/30 border border-border/50
                      text-muted-foreground transition-all duration-300
                      ${social.color}
                    `}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
