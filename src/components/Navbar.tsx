import { motion } from "motion/react";
import { 
  Home, 
  Users, 
  History, 
  Camera, 
  MessageSquare, 
  Heart,
  Sparkles
} from "lucide-react";
import { cn } from "@/src/lib/utils";

const navItems = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "The Icons", icon: Users, href: "#icons" },
  { name: "Photo Dump", icon: Camera, href: "#photos" },
  { name: "Messages", icon: MessageSquare, href: "#messages" },
  { name: "Wishes", icon: Sparkles, href: "#wishes" },
  { name: "Forever", icon: Heart, href: "#forever" },
];

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.8 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-fit"
    >
      <div className="glass px-6 py-3 rounded-full flex items-center gap-2 md:gap-6 shadow-lg shadow-peach/10">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group flex flex-col items-center gap-1 transition-all"
          >
            <div className="p-2 rounded-full group-hover:bg-peach/20 transition-colors">
              <item.icon size={20} className="text-gray-600 group-hover:text-peach transition-colors" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-medium text-gray-500 group-hover:text-gray-900 hidden md:block">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
};
