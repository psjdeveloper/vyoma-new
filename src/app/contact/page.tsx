"use client";

import { motion } from "framer-motion";
import Nav from "@/components/nav";

export default function Contact() {
  return (
    <>
      <Nav />

      <motion.div
        className="min-h-screen bg-[#0a0f24] text-white px-6 py-16 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>

        <motion.form
          className="w-full max-w-md space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <input
            type="text"
            placeholder="Your name"
            className="block w-full p-3 rounded-md bg-[#0b183d] border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />

          <input
            type="email"
            placeholder="Your email"
            className="block w-full p-3 rounded-md bg-[#0b183d] border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />

          <textarea
            placeholder="Your message"
            rows={5}
            className="block w-full p-3 rounded-md bg-[#0b183d] border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />

          <motion.button
            type="submit"
            className="w-full py-3 bg-cyan-500 text-black font-semibold rounded-md hover:bg-cyan-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </>
  );
}
