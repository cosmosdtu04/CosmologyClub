import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "glass" | "outline";
  type?: "button" | "submit";
  href?: string;
}

export default function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
  href,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 text-sm md:text-base cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] border border-violet-500/20 active:scale-98",
    secondary:
      "bg-slate-900/80 hover:bg-slate-800 text-slate-100 border border-slate-700/50 hover:border-slate-600 active:scale-98",
    glass:
      "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 backdrop-blur-md hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-98",
    outline:
      "bg-transparent hover:bg-white/5 text-violet-400 hover:text-violet-300 border border-violet-500/30 hover:border-violet-500/60 active:scale-98",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
