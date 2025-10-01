import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaBolt, FaGlobe, FaMedal } from "react-icons/fa";

const items = [
  { icon: <FaBolt />, title: "AI Matching", desc: "Relevant matches with ML scoring." },
  { icon: <FaShieldAlt />, title: "Escrow Payments", desc: "Multi-layer secure escrow." },
  { icon: <FaGlobe />, title: "Multi-currency", desc: "USD · BDT · EUR · GBP support." },
  { icon: <FaMedal />, title: "Verified Professionals", desc: "KYC & Skill Assessments." }
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <h2 className="text-3xl font-bold text-white">উন্নত ফিচারস</h2>
      <p className="mt-2 text-muted max-w-xl">Upwork-এর ফাংশনালিটি + Fiverr-এর ইউএক্স — লোকালাইজড বাংলা সাপোর্ট সহ।</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, idx) => (
          <motion.div key={it.title} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: idx * 0.12 }} className="glass p-5 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center text-xl">{it.icon}</div>
              <div>
                <h4 className="font-semibold text-white">{it.title}</h4>
                <p className="text-sm text-muted">{it.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
