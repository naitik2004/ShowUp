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
import Link from "next/link";

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

        <footer className="pt-20 pb-16 bg-black relative overflow-hidden">
          {/* Final CTA / Bridge Section */}
          <div className="max-w-7xl mx-auto px-6 mb-32">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative bg-white/[0.03] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none italic uppercase">
                  READY TO <span className="text-primary">SHOWUP?</span>
                </h2>
                <p className="text-lg md:text-xl text-white/40 font-bold mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of players across India who have already upgraded their sporting life. No more coordination nightmares.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link href="/explore">
                    <button className="px-10 py-5 bg-primary text-white font-black uppercase tracking-widest text-sm rounded-full shadow-2xl shadow-primary/40 hover:scale-105 transition-all">
                      Find a Game Now
                    </button>
                  </Link>
                  <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all">
                    Register Venue
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 border-b border-white/5 pb-20">
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-12 h-12 bg-primary rounded-2xl rotate-12 flex items-center justify-center shadow-xl shadow-primary/30">
                    <div className="w-5 h-5 border-2 border-white rounded-full" />
                  </div>
                  <span className="text-3xl font-black tracking-tighter text-white uppercase italic">
                    ShowUp
                  </span>
                </div>
                <p className="text-white/40 font-bold max-w-sm leading-relaxed text-lg mb-10">
                  The premier social layer for recreational sports in India. Discover games, build your reputation, and connect with players nearby.
                </p>
                <div className="flex gap-6">
                  {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                    <a key={social} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 hover:text-primary hover:border-primary transition-all text-xs font-black uppercase tracking-widest">
                      {social[0]}
                    </a>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 md:col-start-7">
                <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10 opacity-30">
                  Platform
                </h4>
                <ul className="space-y-6 text-sm font-bold text-white/40 tracking-widest">
                  <li><a href="#" className="hover:text-primary transition-all">Find Games</a></li>
                  <li><a href="#" className="hover:text-primary transition-all">For Venues</a></li>
                  <li><a href="#" className="hover:text-primary transition-all">Community</a></li>
                  <li><a href="#" className="hover:text-primary transition-all">Waitlist</a></li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10 opacity-30">
                  Company
                </h4>
                <ul className="space-y-6 text-sm font-bold text-white/40 tracking-widest">
                  <li><a href="#" className="hover:text-primary transition-all">About Us</a></li>
                  <li><a href="#" className="hover:text-primary transition-all">Careers</a></li>
                  <li><a href="#" className="hover:text-primary transition-all">Contact</a></li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10 opacity-30">
                  Legal
                </h4>
                <ul className="space-y-6 text-sm font-bold text-white/40 tracking-widest">
                  <li><a href="#" className="hover:text-primary transition-all">Privacy</a></li>
                  <li><a href="#" className="hover:text-primary transition-all">Terms</a></li>
                  <li><a href="#" className="hover:text-primary transition-all">Cookies</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                © 2026 ShowUp Technologies. Built for the next billion players.
              </p>
              <div className="flex items-center gap-4 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Network Status: Optimal</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
