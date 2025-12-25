import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export const Typewriter = ({ 
  texts, 
  className = '',
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000
}: TypewriterProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, pauseDuration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`font-inter ${className}`}
    >
      <span className="text-muted-foreground">&lt; </span>
      <span className="text-accent">{displayedText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-primary ml-1"
      >
        |
      </motion.span>
      <span className="text-muted-foreground"> /&gt;</span>
    </motion.div>
  );
};
