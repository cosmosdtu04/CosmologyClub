"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Button from "./Button";
import { ChevronDown, Orbit } from "lucide-react";

export default function Hero() {
  const inspiringLines = [
    "Exploring the mysteries beyond our world.",
    "Where curiosity meets the cosmos.",
    "Inspiring the next generation of astronomers.",
    "Looking beyond the stars toward the future.",
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent">

      {/* Dark overlay for text readability and cinematic outer space style */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(4,4,7,0.7)_95%)]" />

      {/* Dynamic Star Overlays */}
      <div className="star-dust absolute inset-0 mix-blend-screen pointer-events-none" />
      <div className="stars-layer-1 absolute inset-0 mix-blend-screen pointer-events-none" />
      <div className="stars-layer-2 absolute inset-0 mix-blend-screen pointer-events-none" />

      {/* Floating Nebula Glows - subtle, softened */}
      <div className="nebula-glow-1 -top-40 -left-40 animate-pulse-slow" />
      <div className="nebula-glow-2 -bottom-40 -right-40 animate-pulse-slow" style={{ animationDelay: "4s" }} />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-violet-400"
          >
            <Orbit className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.08)] px-4"
          >
            Cosmology Club
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            variants={itemVariants}
            className="font-display text-base sm:text-xl md:text-3xl font-semibold tracking-wider text-slate-300 uppercase px-4"
          >
            Delhi Technological University
          </motion.h2>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 mx-auto rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"
          />

          {/* Inspiring Lines */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto mt-6 py-4 px-4 sm:px-6 rounded-2xl bg-slate-950/45 border border-white/5 backdrop-blur-sm"
          >
            <ul className="space-y-2 md:space-y-3">
              {inspiringLines.map((line, index) => (
                <li
                  key={index}
                  className="text-xs sm:text-sm md:text-base text-slate-300 font-medium tracking-wide flex items-center justify-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 opacity-60 flex-shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="pt-6 flex justify-center"
          >
            <Button href="/about" variant="primary" className="group flex items-center space-x-2 text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4">
              <span>Learn More</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
