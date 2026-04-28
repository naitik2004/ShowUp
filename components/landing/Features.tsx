"use client";

import React from "react";
import { motion } from "framer-motion";
import { Map, Users, ShieldCheck, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";
import ScrollRevealText from "./ScrollRevealText";

const features = [
  {
    title: "Real-time Map",
    desc: "Discover active games in your sector instantly with our live interactive map interface.",
    icon: <Map className="text-primary" size={28} />,
    span: "md:col-span-2",
  },
  {
    title: "Ghost Groups",
    desc: "Temporary groups that vanish after play. No chat clutter.",
    icon: <Users className="text-primary" size={28} />,
    span: "md:col-span-1",
  },
  {
    title: "Pro Reputation",
    desc: "Built-in rating system for skill and reliability. Know who you play with.",
    icon: <Star className="text-primary" size={28} />,
    span: "md:col-span-1",
  },
  {
    title: "Incognito Privacy",
    desc: "Coordinate matches without ever exposing your private contact details.",
    icon: <ShieldCheck className="text-primary" size={28} />,
    span: "md:col-span-2",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-black relative">
      {/* Side decorative gradient blobs */}
      <div className="absolute -left-[250px] top-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -right-[250px] bottom-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <ScrollRevealText 
        subtitle="The Platform"
        lines={[
          "BUILT FOR PERFORMANCE.",
          "DEFINED BY COMMUNITY."
        ]}
        className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] uppercase"
      />

      <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 relative">
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {features.map((f, i) => (
            <StaggerItem key={i} animation="scaleUp">
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`card-pro flex flex-col justify-between min-h-[320px] md:min-h-[340px] ${f.span} group relative overflow-hidden`}
              >
                {/* Hover glow effect */}
                <div className="absolute -inset-px bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500 group-hover:shadow-[0_0_30px_-5px_rgba(26,86,219,0.3)]">
                    {f.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase italic tracking-tighter">
                    {f.title}
                  </h3>
                  <p className="text-white/40 font-bold text-sm leading-relaxed max-w-sm">
                    {f.desc}
                  </p>
                </div>
                <div className="flex justify-end relative z-10">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/30 transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:shadow-[0_0_8px_rgba(26,86,219,0.8)] transition-shadow duration-300" />
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
