import React from "react";
import Link from "next/link";
import { Orbit, Handshake, Camera, CalendarRange } from "lucide-react";

type DepartmentType = "srad" | "corporate" | "media" | "logistics";

interface DepartmentCardProps {
  name: string;
  description: string;
  type: DepartmentType;
  details?: string;
  variant?: "summary" | "detailed";
}

const iconMap = {
  srad: Orbit,
  corporate: Handshake,
  media: Camera,
  logistics: CalendarRange,
};

export default function DepartmentCard({
  name,
  description,
  type,
  details,
  variant = "summary",
}: DepartmentCardProps) {
  const IconComponent = iconMap[type] || Orbit;

  if (variant === "detailed") {
    return (
      <div className="relative group overflow-hidden rounded-2xl border border-white/5 bg-slate-950/40 p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:border-violet-500/20 hover:bg-slate-950/60 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
        {/* Glow effect on hover */}
        <div className="absolute -inset-px bg-gradient-to-r from-violet-600/0 via-violet-600/0 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:from-violet-600/10 group-hover:via-violet-600/5 group-hover:to-blue-500/10 transition-all duration-700 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 border border-violet-500/20 text-violet-400 group-hover:text-violet-300 group-hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
            <IconComponent className="w-8 h-8" />
          </div>
          <div className="flex-1 space-y-3">
            <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
              {name}
            </h3>
            <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed">
              {description}
            </p>
            {details && (
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed pt-2 border-t border-white/5">
                {details}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href="/about" className="block h-full group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-slate-950/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-violet-500/30 hover:bg-slate-950/60 hover:-translate-y-1.5 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_30px_rgba(139,92,246,0.12)] h-full flex flex-col justify-between">
        {/* Subtle border glow */}
        <div className="absolute -inset-px bg-gradient-to-r from-violet-500/0 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:from-violet-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="flex-1 flex flex-col">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-600/10 to-blue-600/10 border border-violet-500/15 text-violet-400 mb-4 group-hover:scale-105 transition-all duration-300 self-start">
              <IconComponent className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
              {name}
            </h3>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed flex-1">
              {description}
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-white/5 flex items-center text-xs text-violet-400 font-semibold tracking-wider uppercase group-hover:text-violet-300 transition-colors duration-300">
            <span>Learn More</span>
            <span className="ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
