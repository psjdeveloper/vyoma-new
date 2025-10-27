"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // only animate once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen text-center 
                 bg-gradient-to-b from-[#0a0f24] via-[#0b183d] to-[#021029] text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,122,255,0.25),transparent_70%)]"></div>

      {/* Content */}
      <motion.h1
        data-aos="fade-up"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-7xl font-extrabold leading-tight 
                   bg-clip-text text-transparent bg-gradient-to-r 
                   from-blue-400 via-cyan-400 to-indigo-400 
                   drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]"
      >
        Elevate Your Digital Experience.
      </motion.h1>

      <motion.p
        data-aos="fade-up"
        data-aos-delay="300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="max-w-xl mt-6 text-lg sm:text-xl text-gray-300"
      >
        With Vyoma — an all-in-one toolkit for everything, everyone, everywhere.
      </motion.p>

      <motion.div
        data-aos="zoom-in"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex gap-4 mt-10"
      >
        <a
          href="https://vyoma-os.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 font-semibold text-black 
                     bg-gradient-to-r from-blue-400 to-cyan-400 
                     rounded-full shadow-lg hover:scale-105 
                     hover:shadow-cyan-400/30 transition-transform duration-300"
        >
          Get Started
        </a>

        <button
          className="px-6 py-3 font-semibold border border-cyan-400 
                     text-cyan-400 rounded-full hover:bg-cyan-400 
                     hover:text-black transition-all duration-300"
        >
          Learn More
        </button>
      </motion.div>

      {/* Animated accent lines */}
      <div className="absolute w-[600px] h-[600px] rounded-full 
                      bg-gradient-to-r from-blue-700/30 to-cyan-400/30 
                      blur-3xl animate-pulse"></div>
    </section>
  );
}
