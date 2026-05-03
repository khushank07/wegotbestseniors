import { motion } from "motion/react";
import { Sparkle, Heart } from "lucide-react";

export const ForeverSection = () => {
  return (
    <section id="forever" className="py-32 px-6 relative overflow-hidden bg-gray-900 text-white text-center">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              y: 100, 
              x: Math.random() * 100 + "%" 
            }}
            animate={{ 
              opacity: [0, 1, 0],
              y: -500,
              x: (Math.random() * 100) + "%"
            }}
            transition={{ 
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute bottom-0 text-peach/40"
          >
            <Sparkle size={Math.random() * 20 + 10} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-flex p-4 rounded-full bg-peach/10 text-peach mb-12"
        >
          <Heart size={48} fill="currentColor" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl mb-8 leading-tight"
        >
          Thank you for being <br />
          such <span className="italic text-peach">wonderful seniors.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 font-sans tracking-widest uppercase text-xs mb-16"
        >
          We'll miss seeing you around • Best of luck always
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col items-center"
        >
          <div className="w-px h-24 bg-gradient-to-b from-peach to-transparent" />
          <span className="font-script text-3xl text-peach mt-8">With so much love, Isha and Khushank</span>
        </motion.div>
      </div>
    </section>
  );
};
