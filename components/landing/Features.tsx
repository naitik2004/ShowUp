"use client";

import React from "react";
import { motion } from "framer-motion";
import { Map, Users, ShieldCheck, Star } from "lucide-react";

const features = [
  {
    title: "Real-time Map",
    desc: "Discover active games in your sector instantly with our live interactive map interface.",
    icon: <Map className="text-primary" />,
    span: "md:col-span-2"
  },
  {
    title: "Ghost Groups",
    desc: "Temporary groups that vanish after play. No chat clutter.",
    icon: <Users className="text-primary" />,
    span: "md:col-span-1"
  },
  {
    title: "Pro Reputation",
    desc: "Built-in rating system for skill and reliability. Know who you play with.",
    icon: <Star className="text-primary" />,
    span: "md:col-span-1"
  },
  {
    title: "Incognito Privacy",
    desc: "Coordinate matches without ever exposing your private contact details.",
    icon: <ShieldCheck className="text-primary" />,
    span: "md:col-span-2"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-40 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">The Platform</span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none max-w-3xl">
            BUILT FOR PERFORMANCE. <br />
            <span className="text-white/20">DEFINED BY COMMUNITY.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className={`card-pro flex flex-col justify-between min-h-[340px] ${f.span}`}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-3 uppercase italic tracking-tighter">{f.title}</h3>
                <p className="text-white/40 font-bold text-sm leading-relaxed max-w-sm">{f.desc}</p>
              </div>
              <div className="flex justify-end">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
