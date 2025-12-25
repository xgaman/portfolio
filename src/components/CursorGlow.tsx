import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed pointer-events-none z-[100] hidden md:block"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        >
          {/* Main glow */}
          <motion.div
            animate={{
              x: -150,
              y: -150,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            className="w-[300px] h-[300px] rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(270 100% 60% / 0.15) 0%, transparent 70%)',
            }}
          />
          
          {/* Inner glow */}
          <motion.div
            animate={{
              x: -50,
              y: -50,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            className="absolute top-0 left-0 w-[100px] h-[100px] rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(180 100% 50% / 0.1) 0%, transparent 70%)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
