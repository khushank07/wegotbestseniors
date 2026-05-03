import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onComplete, 500); // Give time for exit animation
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-ivory flex flex-col items-center justify-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-peach mb-6"
          >
            <Sparkles size={64} fill="currentColor" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-2xl text-gray-700 italic"
          >
            Collecting precious memories...
          </motion.h2>
          
          <div className="mt-8 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="h-full bg-peach"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
