import { motion } from "motion/react";

export const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="floating-blob w-[500px] h-[500px] bg-peach -top-20 -left-20"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="floating-blob w-[600px] h-[600px] bg-blush -bottom-40 -right-20"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="floating-blob w-[400px] h-[400px] bg-sky top-1/2 left-1/3"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="floating-blob w-[450px] h-[450px] bg-lavender top-1/4 right-1/4"
      />
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="floating-blob w-[300px] h-[300px] bg-butter bottom-1/4 left-1/4"
      />
    </div>
  );
};
