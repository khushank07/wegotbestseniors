import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown, MessageCircleHeart, Sparkle, Heart } from "lucide-react";

const notes = [
  {
    title: "To Our Dear Seniors",
    preview: "A little note on the impact you've made...",
    content: "Watching you all navigate college life has been truly inspiring. You've balanced your hard work with so much kindness and grace, creating a warmth on campus that we'll deeply miss. It's not just about the goals you achieved, but the incredible people you've become along the way. Your dedication is evident in everything you do, and we feel lucky to have had you as our seniors. As you step into this next chapter, carry that same strength and goodness with you. You're going to do amazing things!"
  },
  {
    title: "A Wish for the Journey",
    preview: "Sending you off with strength and love...",
    content: "The road ahead is full of possibilities, and we couldn't be more excited for you. We've seen your resilience and your passion firsthand—how you face challenges with a smile and never hesitate to support those around you. Take that same spirit into the world. There might be uncertain days, but never forget the character you've built here. You aren't just talented; you are genuinely kind-hearted humans, and that's your greatest superpower. We're all cheering for your happiness and success!"
  },
  {
    title: "Always Cheering for You",
    preview: "Celebrating the wonderful humans you are...",
    content: "It's rare to find people who are as hardworking as they are empathetic, but you three have shown us exactly how it's done. You've made everyone around you feel seen and valued, and that's a legacy far greater than any academic achievement. Thank you for being such grounded and wonderful role models. We hope your future is as bright and kind as the energy you've shared with us. Go out there and embrace every new adventure—you've earned every bit of joy coming your way!"
  }
];

export const UnsaidThings = () => {
  return (
    <section id="messages" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-handwritten text-4xl text-peach block mb-2 transform -rotate-2">Letters from us</span>
        <h2 className="font-serif text-5xl md:text-6xl text-gray-900 flex items-center justify-center gap-4">
          Unsaid Things <MessageCircleHeart className="text-peach animate-pulse" />
        </h2>
      </div>

      <div className="space-y-8">
        {notes.map((note, idx) => (
          <ExpandableNote key={idx} note={note} />
        ))}
      </div>
    </section>
  );
};

interface ExpandableNoteProps {
  key?: any;
  note: {
    title: string;
    preview: string;
    content: string;
  };
}

const ExpandableNote = ({ note }: ExpandableNoteProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-white/40 border-white/40"
    >
      <motion.button
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-10 flex items-center justify-between group relative"
      >
        <div className="relative z-10">
          <h3 className="font-serif text-3xl text-gray-900 group-hover:text-peach transition-colors">{note.title}</h3>
          {!isOpen && (
            <div className="flex flex-col gap-2 mt-3">
              <p className="text-gray-500 font-sans italic text-sm opacity-60">
                {note.preview}
              </p>
              <span className="text-peach font-handwritten text-lg mt-1 flex items-center gap-2">
                Click to read letter <Sparkle size={14} className="animate-pulse" />
              </span>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4 relative z-10">
          <div className="hidden md:flex opacity-20 group-hover:opacity-40 transition-opacity">
            <Sparkle size={16} className="text-gold animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="w-10 h-10 rounded-full bg-peach/10 flex items-center justify-center text-peach group-hover:bg-peach group-hover:text-white transition-all"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>

        {/* Subtle Stamp Decoration */}
        <div className="absolute top-4 right-16 opacity-5 transform rotate-12 scale-150 pointer-events-none">
          <Heart size={80} fill="currentColor" />
        </div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-10 pb-10">
              <div className="w-full h-px bg-peach/10 mb-8" />
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-peach/20 rounded-full" />
                <p className="text-gray-800 font-sans leading-relaxed text-xl font-light tracking-tight italic">
                  "{note.content}"
                </p>
              </div>
              <div className="mt-8 text-right">
                <span className="font-handwritten text-2xl text-peach">With love always.</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
