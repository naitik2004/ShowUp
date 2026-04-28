"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Waitlist() {
  return (
    <section id="waitlist" className="py-32 md:py-40 px-6 relative overflow-hidden">
      {/* Side decorative elements */}
      <div className="absolute left-[2%] top-1/3 w-20 h-20 border border-primary/10 rounded-full hidden xl:block" />
      <div className="absolute right-[3%] bottom-1/3 w-12 h-12 border border-white/5 rotate-45 hidden xl:block" />

      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[3rem] md:rounded-[4rem] border border-white/5 bg-white/[0.02] p-10 md:p-20 lg:p-32 text-center">
        {/* Deep Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-primary/10 blur-[160px] rounded-full -z-10" />

        {/* Floating side orbs inside the card */}
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 top-1/4 w-40 h-40 bg-primary/20 rounded-full blur-[60px] pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -right-20 bottom-1/4 w-48 h-48 bg-primary/15 rounded-full blur-[70px] pointer-events-none"
        />

        <AnimatedSection animation="zoomIn" duration={0.8}>
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">
              Limited Access
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-10 md:mb-12 tracking-tighter leading-none">
              READY TO <br />
              <span className="italic">SHOW UP?</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} duration={0.8}>
          <form className="flex flex-col sm:flex-row gap-3 md:gap-4 p-2 glass-pro rounded-full border-white/10 max-w-xl mx-auto relative z-10">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="flex-1 bg-transparent border-none px-6 md:px-8 py-4 text-white focus:outline-none font-black text-xs tracking-widest placeholder:text-white/20"
            />
            <button className="bg-primary text-white px-8 md:px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-primary/40 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(26,86,219,0.6)] transition-all duration-300">
              Claim Access
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
