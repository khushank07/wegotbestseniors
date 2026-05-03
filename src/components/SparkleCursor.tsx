import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkle } from "lucide-react";

export const SparkleCursor = () => {
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.96) { // Reduced frequency slightly to be less distracting
        const id = Math.random(); // Use better random ID than Date.now()
        setSparkles(prev => [...prev.slice(-15), { id, x: e.clientX, y: e.clientY }]); // Limit to 15 sparks max for performance
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== id));
        }, 800);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <AnimatePresence>
      {sparkles.map(s => (
        <motion.div
          key={s.id}
          initial={{ opacity: 1, scale: 0, rotate: 0 }}
          animate={{ opacity: 0, scale: 1.5, rotate: 90 }}
          exit={{ opacity: 0 }}
          className="fixed pointer-events-none z-[9999] text-peach shadow-glow"
          style={{ left: s.x, top: s.y }}
        >
          <Sparkle size={12} fill="currentColor" />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};
