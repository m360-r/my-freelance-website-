import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Rafi", role: "Designer", text: "GrowMost আমার জন্য কাস্টমার এনগেজমেন্ট বাড়িয়েছে।" },
  { name: "Nusrat", role: "Developer", text: "Escrow system-টি খুবই নির্ভরযোগ্য।" },
  { name: "Hasan", role: "Client", text: "প্রজেক্ট ডেলিভারি প্রসেস দ্রুত ও ট্রান্সপারেন্ট।" }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16">
      <h2 className="text-3xl font-bold text-white">টেস্টিমোনিয়াল</h2>
      <p className="text-muted mt-1">আমাদের ব্যবহারকারীদের অভিজ্ঞতা</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.15 }} className="p-6 rounded-2xl glass">
            <p className="text-white">"{t.text}"</p>
            <div className="mt-4 text-sm text-muted">{t.name} • {t.role}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
