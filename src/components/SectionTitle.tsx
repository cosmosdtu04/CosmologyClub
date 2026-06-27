import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignmentClass = align === "center" ? "text-center items-center" : "text-left items-start";
  
  return (
    <div className={`flex flex-col mb-12 md:mb-16 ${alignmentClass} ${className}`}>
      {subtitle && (
        <span className="text-violet-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-white relative">
        {title}
      </h2>
      <div 
        className={`h-[2px] w-20 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mt-4 shadow-[0_0_8px_rgba(139,92,246,0.5)]`}
      />
    </div>
  );
}
