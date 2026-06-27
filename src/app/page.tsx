"use client";

import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import DepartmentCard from "@/components/DepartmentCard";
import Button from "@/components/Button";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  const activities = [
    "Interactive Space & Physics Workshops",
    "Expert Speaker Sessions & Panels",
    "Deep-space Discussions & Debates",
    "Astronomy Events & Stargazing Sessions",
    "Knowledge Sharing & Research Sessions",
    "Tech Fest Activations & Space Competitions",
  ];

  const departments = [
    {
      name: "Space Research & Development (SRAD)",
      description: "Focused on space research, astronomy, cosmology, scientific learning, projects and innovation.",
      type: "srad" as const,
    },
    {
      name: "Corporate",
      description: "Responsible for sponsorships, collaborations, partnerships and external relations for workshops, events and club activities.",
      type: "corporate" as const,
    },
    {
      name: "Media",
      description: "Responsible for social media management, branding, photography, videography, graphic design and promotional content across platforms.",
      type: "media" as const,
    },
    {
      name: "Logistics",
      description: "Responsible for planning, organizing and ensuring the smooth execution of club events, workshops and technical sessions.",
      type: "logistics" as const,
    },
  ];

  return (
    <div className="flex-1 w-full bg-slate-950 text-white relative">
      {/* Hero Section */}
      <Hero />

      {/* Main Content Area */}
      <div className="relative z-10">
        
        {/* Glow Nebula in the middle of page */}
        <div className="nebula-glow-3 top-[30%] left-[20%] animate-pulse-slow" />
        <div className="nebula-glow-1 top-[60%] right-[10%] animate-pulse-slow" style={{ animationDelay: "2s" }} />

        {/* Small Intro Section */}
        <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="space-y-2">
                <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-violet-400">
                  Who We Are
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Unraveling the Cosmos, <br />
                  <span className="gradient-text-purple-blue">One Discovery at a Time.</span>
                </h2>
              </div>

              <div className="space-y-4 text-slate-300 font-medium leading-relaxed text-sm md:text-base">
                <p>
                  The Cosmology Club of Delhi Technological University (DTU) is a student-led community dedicated to exploring cosmology, astronomy, astrophysics, and space science. We bring together enthusiasts, observers, and researchers to delve into the grandest questions of the universe.
                </p>
                <p>
                  Our goal is to foster a vibrant scientific culture, providing a collaborative hub where students can transition from casual stargazers to serious scientific contributors. We aim to break down complex cosmic concepts into engaging discussions and practical experiences.
                </p>
              </div>

              {/* Grid of activities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-medium">{activity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Imagery Panel */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-4/3 sm:aspect-16/10 lg:aspect-square bg-slate-900 shadow-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=80')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="px-3 py-1 inline-block rounded-full bg-slate-950/80 border border-white/5 backdrop-blur-md text-[10px] uppercase tracking-widest text-violet-400 font-bold mb-2">
                    Observation Night
                  </div>
                  <h4 className="text-white font-bold text-lg leading-tight">
                    Star Trails & Observational Astronomy
                  </h4>
                  <p className="text-slate-300 text-xs mt-1">
                    Capturing raw celestial beauty from the heart of DTU.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Departments Preview Section */}
        <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Structure" 
            title="Our Core Departments" 
            align="center"
          />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                className="h-full"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <DepartmentCard 
                  name={dept.name}
                  description={dept.description}
                  type={dept.type}
                  variant="summary"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Department CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mt-12 md:mt-16"
          >
            <Button href="/about" variant="glass" className="group">
              <span>View Department Details</span>
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
