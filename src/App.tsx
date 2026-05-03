/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { IconsSection } from "./components/IconsSection";
import { PhotoDump } from "./components/PhotoDump";
import { UnsaidThings } from "./components/UnsaidThings";
import { WishingWell } from "./components/WishingWell";
import { ForeverSection } from "./components/ForeverSection";
import { BackgroundBlobs } from "./components/BackgroundBlobs";
import { SparkleCursor } from "./components/SparkleCursor";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative selection:bg-peach/30 selection:text-gray-900 cursor-default overflow-x-hidden">
      <LoadingScreen onComplete={() => setIsLoaded(true)} />
      
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <BackgroundBlobs />
          <Navbar />
          
          <main>
            <Hero />
            <IconsSection />
            <PhotoDump />
            <UnsaidThings />
            <WishingWell />
            <ForeverSection />
          </main>

          <footer className="py-12 px-6 bg-gray-900 text-center border-t border-white/5">
            <p className="text-gray-500 font-sans text-[10px] tracking-[0.4em] uppercase">
              Designed with love for our special seniors © 2026
            </p>
          </footer>
        </motion.div>
      )}

      <SparkleCursor />

      <style>{`
        .shadow-glow {
          filter: drop-shadow(0 0 4px rgba(255, 218, 185, 0.8));
        }
        
        html {
          scroll-behavior: smooth;
        }

        body::-webkit-scrollbar {
          width: 8px;
        }
        
        body::-webkit-scrollbar-track {
          background: #FFFFF0;
        }
        
        body::-webkit-scrollbar-thumb {
          background: #FFDAB9;
          border-radius: 10px;
        }
        
        body::-webkit-scrollbar-thumb:hover {
          background: #D4AF37;
        }
      `}</style>
    </div>
  );
}
