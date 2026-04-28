import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Waitlist from "@/components/landing/Waitlist";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      
      {/* Social Proof Bar */}
      <div className="w-full border-y border-white/5 py-16 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-wrap items-center justify-center gap-16 md:gap-32">
                  {[
                      { label: "Games Hosted", val: "12,400+" },
                      { label: "Active Players", val: "50,000+" },
                      { label: "Indian Cities", val: "12" },
                      { label: "Rating Average", val: "4.8/5" }
                  ].map((stat, i) => (
                      <div key={i} className="text-center">
                          <div className="text-3xl font-black text-white tracking-tighter">{stat.val}</div>
                          <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 mt-2">{stat.label}</div>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      <Features />
      
      {/* Brand Ethos Section */}
      <section className="py-40 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-none">
                STOP THE COORDINATION <br />
                <span className="text-primary italic">NIGHTMARE.</span>
            </h3>
            <p className="text-xl text-white/40 font-bold leading-relaxed">
                ShowUp replaces the fragmented WhatsApp groups and the uncertainty of local sports. 
                One map. One community. Total clarity.
            </p>
        </div>
      </section>

      <Waitlist />
      
      <footer className="py-32 border-t border-white/5 bg-black">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20">
              <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 bg-primary rounded-full" />
                      <span className="text-2xl font-black tracking-tighter text-white uppercase italic">ShowUp</span>
                  </div>
                  <p className="text-white/30 font-bold max-w-xs leading-relaxed">
                      The premier social layer for recreational sports in India.
                  </p>
              </div>
              
              <div>
                  <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">Platform</h4>
                  <ul className="space-y-4 text-xs font-bold text-white/30 tracking-widest">
                      <li><a href="#" className="hover:text-primary transition-colors">Find Games</a></li>
                      <li><a href="#" className="hover:text-primary transition-colors">For Venues</a></li>
                      <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                  </ul>
              </div>

              <div>
                  <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">Legal</h4>
                  <ul className="space-y-4 text-xs font-bold text-white/30 tracking-widest">
                      <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                      <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                      <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
                  </ul>
              </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">© 2026 ShowUp Technologies. All rights reserved.</p>
              <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                  <a href="#" className="hover:text-white transition-colors">Instagram</a>
                  <a href="#" className="hover:text-white transition-colors">Twitter</a>
              </div>
          </div>
      </footer>
    </main>
  );
}
