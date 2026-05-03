import { motion } from "motion/react";
import { Sparkle, ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="flex justify-center mb-8"
        >
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: i * 0.5 
                }}
                className="text-gold"
              >
                <Sparkle size={24} fill="currentColor" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.2 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-gray-900 leading-tight mb-8"
        >
          Our Favorite <br />
          <span className="text-peach italic">Seniors,</span> Ever.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.4 }}
          className="text-lg md:text-xl text-gray-600 font-sans tracking-wide max-w-2xl mx-auto mb-12"
        >
          Sending extra luck and happy vibes as you move on to your next big adventure! A little tribute for the seniors who made campus a bit more special. ✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.6 }}
        >
          <a
            href="#icons"
            className="group relative inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full overflow-hidden transition-all hover:pr-10"
          >
            <span className="relative z-10 font-medium tracking-wider">START SCROLLING</span>
            <div className="absolute inset-0 bg-peach translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <ChevronDown size={20} className="relative z-10 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </motion.div>

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <FloatingStar className="top-[20%] left-[10%]" delay={1} />
        <FloatingStar className="top-[15%] right-[15%]" delay={2} />
        <FloatingStar className="bottom-[25%] left-[15%]" delay={3} />
        <FloatingStar className="bottom-[20%] right-[10%]" delay={1.5} />
      </div>
    </section>
  );
};

const FloatingStar = ({ className, delay }: { className: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0, 1, 0],
      y: [0, -30, 0],
      rotate: [0, 45, 0]
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      delay 
    }}
    className={`absolute ${className} text-peach`}
  >
    <Sparkle size={16} fill="currentColor" />
  </motion.div>
);
