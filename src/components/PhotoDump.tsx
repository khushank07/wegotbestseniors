import { motion } from "motion/react";

const photos = [
  { url: "https://lh3.googleusercontent.com/d/1DtIzS55i1DznrOxBzxYbQyUKWVZFTqyA", caption: "New horizons ahead 🎓", rotation: -3 },
  { url: "https://lh3.googleusercontent.com/d/1DlXVpODiqlch7dEK9G2gVpTiEsDrpeHg", caption: "The best is yet to come ✨", rotation: 2 },
];

export const PhotoDump = () => {
  return (
    <section id="photos" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <span className="font-handwritten text-3xl text-peach">Sneak peek into our lives</span>
          <h2 className="font-serif text-5xl md:text-6xl text-gray-900">Photo Dump</h2>
        </div>
        <p className="text-gray-500 max-w-xs font-sans text-sm italic">
          "Just some nice snapshots from our time together."
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {photos.map((photo, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 0,
              zIndex: 20
            }}
            style={{ rotate: photo.rotation }}
            className="polaroid break-inside-avoid relative group cursor-pointer"
          >
            <div className="overflow-hidden bg-gray-100 aspect-[4/5] mb-4">
              <img 
                src={photo.url} 
                alt="Memory" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <p className="font-handwritten text-xl text-gray-700 text-center">
              {photo.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
