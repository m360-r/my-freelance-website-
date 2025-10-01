import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      {/* animated gradient background band */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-56 -top-20 w-[720px] h-[720px] rounded-full bg-gradient-to-br from-primary/20 to-accent/10 opacity-40 blur-[80px]" />
        <div className="absolute -right-56 -bottom-20 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-success/15 to-primary/8 opacity-40 blur-[60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:0.8}}>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
            বাংলাদেশের জন্য <span className="text-accent">প্রিমিয়াম</span> ফ্রিল্যান্স মার্কেটপ্লেস
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl">
            ক্লায়েন্ট → এসক্রো → ফ্রিল্যান্সার। AI matching, milestone delivery, multi-currency ও শক্তিশালী KYC — সব এক প্ল্যাটফর্মে।
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a whileHover={{ scale: 1.03 }} href="#pricing" className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg">
              Get Started
            </motion.a>
            <motion.a whileHover={{ scale: 1.03 }} href="#features" className="px-6 py-3 rounded-xl glass border border-white/6 text-white">
              Learn More
            </motion.a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <motion.div initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2}} className="glass p-3 rounded-xl flex flex-col">
              <span className="text-xs text-muted">Active</span>
              <span className="text-lg font-bold">2.3k+</span>
            </motion.div>

            <motion.div initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.3}} className="glass p-3 rounded-xl flex flex-col">
              <span className="text-xs text-muted">Projects</span>
              <span className="text-lg font-bold">1k+</span>
            </motion.div>

            <motion.div initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.4}} className="glass p-3 rounded-xl flex flex-col">
              <span className="text-xs text-muted">Secure</span>
              <span className="text-lg font-bold">Escrow</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: large 3D-esque dashboard card */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }}>
          <div className="relative">
            <div className="glass rounded-3xl p-5 shadow-glass-xl">
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">GM</div>
                <div>
                  <div className="text-sm text-muted">Project Overview</div>
                  <div className="text-white font-semibold">Website Redesign — Dashboard</div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="bg-[linear-gradient(180deg,#0b1220,#071025)] rounded-xl p-4">
                  <div className="text-xs text-muted">Milestone</div>
                  <div className="text-white font-semibold">Design Phase</div>
                </div>
                <div className="bg-[linear-gradient(180deg,#071025,#06101b)] rounded-xl p-4">
                  <div className="text-xs text-muted">Budget</div>
                  <div className="text-white font-semibold">৳25,000</div>
                </div>
              </div>

              <div className="mt-5">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=b1c2f8b2f8d0b6b6a5f6f6c3d8e7e9f3" alt="mock" className="w-full rounded-xl shadow-lg" />
              </div>
            </div>

            {/* floating orbs */}
            <motion.div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent opacity-70 blur-3xl" animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} />
            <motion.div className="absolute -bottom-8 left-6 w-24 h-24 rounded-full bg-gradient-to-tr from-success to-accent opacity-60 blur-3xl" animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
