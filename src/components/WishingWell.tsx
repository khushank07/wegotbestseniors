import { motion } from "motion/react";
import { Star, Sun, Cloud, Moon, Sparkles } from "lucide-react";

const wishes = [
  { text: "May your coffee always be hot and your deadlines always far away.", icon: Sun, color: "text-amber-400" },
  { text: "Wishing you a path filled with unexpected joys and beautiful sunsets.", icon: Cloud, color: "text-sky-400" },
  { text: "Go find the magic in the everyday moments of your next chapter.", icon: Sparkles, color: "text-peach" },
  { text: "May you always find a reason to smile, even on the busiest Mondays.", icon: Star, color: "text-gold" },
  { text: "Dream big, stay kind, and remember to take a deep breath once in a while.", icon: Moon, color: "text-lavender" },
  { text: "Here's to new beginnings and the amazing stories you're about to write.", icon: Sparkles, color: "text-rose-400" },
];

export const WishingWell = () => {
  return (
    <section id="wishes" className="py-24 px-6 overflow-hidden bg-white/20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-handwritten text-3xl text-peach block mb-4"
        >
          Just some extra luck...
        </motion.span>
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900">The Wishing Well</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {wishes.map((wish, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-[32px] text-center hover:shadow-lg transition-all duration-500 group"
          >
            <div className={`inline-flex items-center justify-center p-4 rounded-2xl bg-white mb-6 group-hover:scale-110 transition-transform ${wish.color}`}>
              <wish.icon size={28} />
            </div>
            <p className="text-gray-700 font-sans leading-relaxed tracking-tight">
              {wish.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
