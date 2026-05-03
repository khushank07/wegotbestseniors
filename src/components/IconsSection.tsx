import { motion } from "motion/react";
import { Sparkles, Star, Zap } from "lucide-react";

const seniors = [
  {
    name: "Sargam Dii",
    nickname: "The Visionary",
    vibe: "Quietly making everything cool and good",
    badge: "Chaos Coordinator",
    color: "bg-blush",
    icon: Zap,
    image: "https://lh3.googleusercontent.com/d/1A2b5BvbZtBLue1BPczKtTwwYmiMgW_8a"
  },
  {
    name: "Diksha Dii",
    nickname: "The Spark",
    vibe: "Turns every ordinary moment into a party",
    badge: "Campus Celebrity",
    color: "bg-butter",
    icon: Star,
    image: "https://lh3.googleusercontent.com/d/1uh4ZERdQGhG85TKTeqrj5QLBeySMW7Ci"
  },
  {
    name: "Komal Dii",
    nickname: "The Legend",
    vibe: "Infinite wisdom & best advice",
    badge: "CEO of Good Advice",
    color: "bg-sky",
    icon: Sparkles,
    image: "https://lh3.googleusercontent.com/d/1JcyyMPcCroqeQHV8aoHe8F2_iTyAT88h"
  }
];

export const IconsSection = () => {
  return (
    <section id="icons" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-script text-3xl text-peach block mb-2"
        >
          Meet the legends
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-6xl text-gray-900"
        >
          The Icons
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8">
        {seniors.map((senior, idx) => (
          <motion.div
            key={senior.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -15 }}
            className="group relative"
          >
            <div className={`absolute inset-0 ${senior.color} rounded-[40px] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`} />
            
            <div className="relative glass p-8 rounded-[40px] h-full flex flex-col items-center text-center overflow-hidden border-2 border-transparent group-hover:border-white transition-all shadow-xl shadow-gray-200/50">
              <div className="relative mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-gray-200 rounded-full -m-4"
                />
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                  <img 
                    src={senior.image} 
                    alt={senior.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110" 
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="absolute -bottom-2 -right-2 bg-white p-3 rounded-full shadow-lg z-20 text-peach"
                >
                  <senior.icon size={24} />
                </motion.div>
              </div>

              <span className="font-handwritten text-2xl text-peach mb-2 block tracking-tight group-hover:font-bold transition-all">
               "{senior.nickname}"
              </span>
              <h3 className="font-serif text-3xl text-gray-900 mb-2 group-hover:font-bold transition-all">{senior.name}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow group-hover:text-gray-700 transition-all">
                {senior.vibe}
              </p>

              <div className="inline-block bg-ivory px-4 py-2 rounded-full border border-gray-100 text-xs font-semibold tracking-widest text-gray-600 uppercase">
                {senior.badge}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
