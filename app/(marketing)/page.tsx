"use client";

import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Waitlist from "@/components/landing/Waitlist";
import BackgroundEffects from "@/components/landing/BackgroundEffects";
import SportyCharacters from "@/components/landing/SportyCharacters";
import AnimatedSection from "@/components/landing/AnimatedSection";
import { useCountUp } from "@/lib/hooks/useCountUp";

function StatCounter({
  end,
  suffix,
  label,
  decimals = 0,
}: {
  end: number;
  suffix: string;
  label: string;
  decimals?: number;
}) {
  const { ref, formatted } = useCountUp({ end, duration: 2500, suffix, decimals });
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-black text-white tracking-tighter">
        {formatted}
      </div>
      <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 mt-2">
        {label}
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black relative">
      <BackgroundEffects />
      <SportyCharacters />
      <div className="relative z-10">
        <Navbar />
        <Hero />

        {/* Social Proof Bar */}
        <div className="w-full border-y border-white/5 py-16 md:py-20 bg-white/[0.01] relative overflow-hidden">
          {/* Subtle side glows */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative">
            <AnimatedSection animation="fadeIn" duration={0.8}>
              <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 lg:gap-32">
                <StatCounter end={12400} suffix="+" label="Games Hosted" />
                <StatCounter end={50000} suffix="+" label="Active Players" />
                <StatCounter end={12} suffix="" label="Indian Cities" />
                <StatCounter end={4.8} suffix="/5" label="Rating Average" decimals={1} />
              </div>
            </AnimatedSection>
          </div>
        </div>

        <Features />

        {/* Brand Ethos Section */}
        <section className="py-32 md:py-40 px-6 border-t border-white/5 relative overflow-hidden">
          {/* Decorative side elements */}
          <div className="absolute left-[2%] top-1/4 w-24 h-24 border border-primary/10 rounded-full hidden xl:block" />
          <div className="absolute right-[3%] bottom-1/4 w-16 h-16 border border-white/5 rotate-45 hidden xl:block" />

          <div className="max-w-4xl mx-auto text-center relative">
            <AnimatedSection animation="slideUp" duration={0.8}>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-none">
                STOP THE COORDINATION <br />
                <span className="text-primary italic">NIGHTMARE.</span>
              </h3>
            </AnimatedSection>
            <AnimatedSection animation="slideUp" delay={0.15} duration={0.8}>
              <p className="text-lg md:text-xl text-white/40 font-bold leading-relaxed max-w-2xl mx-auto">
                ShowUp replaces the fragmented WhatsApp groups and the
                uncertainty of local sports. One map. One community. Total
                clarity.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <Waitlist />

        <footer className="py-24 md:py-32 border-t border-white/5 bg-black relative">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-primary rounded-full shadow-lg shadow-primary/30" />
                <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                  ShowUp
                </span>
              </div>
              <p className="text-white/30 font-bold max-w-xs leading-relaxed">
                The premier social layer for recreational sports in India.
              </p>
            </div>

            <div>
              <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">
                Platform
              </h4>
              <ul className="space-y-4 text-xs font-bold text-white/30 tracking-widest">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Find Games
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    For Venues
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">
                Legal
              </h4>
              <ul className="space-y-4 text-xs font-bold text-white/30 tracking-widest">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-20 md:mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
              © 2026 ShowUp Technologies. All rights reserved.
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
