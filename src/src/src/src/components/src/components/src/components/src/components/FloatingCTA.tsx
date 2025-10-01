import React from "react";
import { motion } from "framer-motion";

export default function FloatingCTA() {
  return (
    <div className="floating-cta">
      <motion.a whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} href="mailto:growmostit@gmail.com" className="inline-flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg">
        🚀 Start Project
      </motion.a>
    </div>
  );
}
