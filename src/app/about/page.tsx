"use client";

import { motion } from "framer-motion";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0f24] text-white px-6 py-16">
      <motion.h1
        className="text-4xl font-bold text-center text-cyan-400 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Founders</h2>
          <Card className="bg-[#0b183d] border border-blue-500/30 hover:border-cyan-400/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-cyan-400">
                Prasoon Jadon
              </CardTitle>
              <CardDescription className="text-gray-400">
                Founder & CTO
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-[#0b183d] border border-blue-500/30 hover:border-cyan-400/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-cyan-400">
                Blessing
              </CardTitle>
              <CardDescription className="text-gray-400">
                Co-Founder & CDO
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
