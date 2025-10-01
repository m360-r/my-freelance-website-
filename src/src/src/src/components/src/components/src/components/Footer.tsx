import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/6 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-semibold text-white">GrowMost</div>
          <div className="text-sm text-muted">Premium Freelance Marketplace — Bangladesh</div>
        </div>

        <div className="text-sm text-muted text-right">
          <div>Contact: +8801780829028</div>
          <div className="mt-1">Email: <a className="text-accent" href="mailto:growmostit@gmail.com">growmostit@gmail.com</a></div>
        </div>
      </div>
    </footer>
  );
}
