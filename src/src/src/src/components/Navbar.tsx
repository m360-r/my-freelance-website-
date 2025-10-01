import React from "react";

export default function Navbar() {
  return (
    <header className="py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary to-accent shadow-lg">
            <span className="text-white font-bold">GM</span>
          </div>
          <div>
            <div className="text-white font-semibold">GrowMost</div>
            <div className="text-sm text-muted">Premium Freelance Marketplace</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-muted hover:text-white transition">ফিচারস</a>
          <a href="#how" className="text-muted hover:text-white transition">কিভাবে কাজ করে</a>
          <a href="#pricing" className="text-muted hover:text-white transition">প্যাকেজ</a>
          <a href="#testimonials" className="text-muted hover:text-white transition">টেস্টিমোনিয়াল</a>
          <a href="mailto:growmostit@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white shadow">Get Started</a>
        </nav>

        <div className="md:hidden">
          <button className="p-2 glass rounded-md">☰</button>
        </div>
      </div>
    </header>
  );
}
