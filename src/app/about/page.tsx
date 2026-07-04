"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import DepartmentCard from "@/components/DepartmentCard";
import { Orbit, Compass, Users, Sparkles, BookOpen, GraduationCap, Telescope } from "lucide-react";

export default function About() {
  const focuses = [
    { text: "Cosmology", icon: Orbit },
    { text: "Astronomy", icon: Telescope },
    { text: "Space Science", icon: Compass },
    { text: "Scientific Curiosity", icon: Sparkles },
    { text: "Research Culture", icon: BookOpen },
    { text: "Community Learning", icon: Users },
  ];

  const whatWeDoList = [
    {
      title: "Workshops",
      desc: "Hands-on sessions covering observational techniques, rocket physics, astro-photography, and computational astrophysics tools.",
    },
    {
      title: "Speaker Sessions",
      desc: "Inviting leading scientists, astrophysicists, and aerospace engineers to share their research and industry insights with students.",
    },
    {
      title: "Technical Discussions",
      desc: "Regular forums where members debate recent findings in deep-space, general relativity, quantum mechanics, and cosmology.",
    },
    {
      title: "Astronomy Events",
      desc: "Star-gazing camps, planetarium visits, telescope setups, and meteor shower watch-parties organized for students.",
    },
    {
      title: "Research Activities",
      desc: "Collaborative student projects, data-analysis runs on public sky surveys, and writing research papers for space journals.",
    },
    {
      title: "Technical Fest Participation",
      desc: "Developing space-themed models, rocket simulators, and hosting quiz events during DTU's annual tech fests.",
    },
    {
      title: "Community Learning",
      desc: "Peer-to-peer mentorship programs that make advanced physics and cosmology approachable for students of all branches.",
    },
  ];

  const departmentsDetailed = [
    {
      name: "Space Research & Development (SRAD)",
      description: "Focused on space research, astronomy, cosmology, scientific learning, projects and innovation.",
      details: "The SRAD department is the academic heart of the Cosmology Club. Members dive deep into astrophysical calculations, astronomical data processing, and hardware projects like model rocket launches and custom telescope building. Our aim is to foster a rigorous research environment where students learn to construct scientific models, analyze astronomical events, and publish technical papers.",
      type: "srad" as const,
    },
    {
      name: "Corporate",
      description: "Responsible for sponsorships, collaborations, partnerships and external relations for workshops, events and club activities.",
      details: "Corporate handles the business, networking, and outreach wings of the club. They establish alliances with space startups, astronomy academies, and guest lecturers. By securing corporate sponsorships, they provide the resources necessary to host large-scale stargazing events, workshops, and exhibitions, serving as the bridge between academic curiosity and industry execution.",
      type: "corporate" as const,
    },
    {
      name: "Media",
      description: "Responsible for social media management, branding, photography, videography, graphic design and promotional content across platforms such as Instagram and LinkedIn.",
      details: "Our Media department translates the beauty of the cosmos into captivating visual stories. Graphic designers, content writers, photographers, and branding strategists work together to promote club events, design educational astronomy posts, capture astronomical sessions on camera, and maintain a stellar digital presence that makes complex cosmic sciences appealing to the public.",
      type: "media" as const,
    },
    {
      name: "Logistics",
      description: "Responsible for planning, organizing and ensuring the smooth execution of club events, workshops and technical sessions.",
      details: "Logistics keeps the club running smoothly on the ground. From securing campus venues and managing telescope setup areas to coordinating session schedules, public safety, and equipment transportation, this team ensures that every stargazing night, speaker forum, and workshop is executed without a hitch.",
      type: "logistics" as const,
    },
  ];

  return (
    <div className="flex-1 w-full text-white relative pt-24">
      {/* Starry bg dust */}
      <div className="star-dust absolute inset-0 mix-blend-screen pointer-events-none" />

      {/* Floating Nebula Glows */}
      <div className="nebula-glow-1 top-[10%] right-[5%] animate-pulse-slow" />
      <div className="nebula-glow-2 top-[50%] left-[5%] animate-pulse-slow" style={{ animationDelay: "3s" }} />

      {/* Page Header Banner */}
      <section className="relative py-20 overflow-hidden border-b border-white/5">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-color-dodge"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=1200&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#040407]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-3 py-1 inline-block rounded-full bg-violet-600/20 border border-violet-500/30 text-xs font-semibold tracking-wider text-violet-400 uppercase mb-3">
              About the Club
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-white uppercase"
          >
            Unveiling the Cosmos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto font-medium"
          >
            Dedicated to promoting astronomy, astrophysics, and research culture among the student community at Delhi Technological University.
          </motion.p>
        </div>
      </section>

      {/* About & Vision Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Mission/About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
                <GraduationCap className="text-violet-400 w-7 h-7" />
                <span>Our Mission</span>
              </h2>
              <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed">
                The Cosmology Club at DTU is a student-led organization focused on building an active, collaborative community for Space Science enthusiasts. We focus on bridging the gap between theoretical physics and real-world astronomical observations.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                By offering access to observation equipment, star charts, computational astrophysics materials, and industry links, we empower students to lead scientific discussions, present research, and build core projects.
              </p>
            </div>

            {/* Focus areas grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {focuses.map((focus, index) => {
                const Icon = focus.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-violet-500/20 hover:bg-white/10 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-violet-400 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-semibold text-slate-200">{focus.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex"
          >
            <div className="w-full relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/30 p-8 flex flex-col justify-center backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              {/* Highlight border decoration */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-violet-600 to-blue-500" />
              
              <div className="space-y-6 pl-4">
                <div className="inline-flex p-3 rounded-xl bg-violet-600/10 border border-violet-500/25 text-violet-400">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white">
                  Our Vision
                </h2>
                <blockquote className="text-lg md:text-xl text-slate-100 font-medium italic leading-relaxed">
                  "To inspire the next generation of space explorers and research scientists by building a collaborative community that seeks to understand the origins, evolution, and ultimate fate of the universe."
                </blockquote>
                <p className="text-slate-400 text-xs md:text-sm">
                  We strive to establish DTU as a prominent node for student astrophysics research, showing that curiosity knows no boundaries.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* What We Do Detail Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <SectionTitle subtitle="Activities" title="What We Do" align="left" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatWeDoList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-slate-950/60 border border-white/5 hover:border-violet-500/20 hover:bg-slate-900/30 transition-all duration-300 shadow-md group"
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-violet-500 group-hover:scale-125 transition-transform" />
                <h3 className="font-display text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Departments Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Operations" title="Departments In-Depth" align="center" />

        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {departmentsDetailed.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <DepartmentCard 
                name={dept.name}
                description={dept.description}
                details={dept.details}
                type={dept.type}
                variant="detailed"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
