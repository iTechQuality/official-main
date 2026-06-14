"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className, hover = true, glow = false, onClick }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className={cn(
        "glass rounded-2xl p-6 relative overflow-hidden transition-all duration-300",
        hover && "cursor-pointer hover:border-white/15 hover:bg-white/[0.06]",
        glow && "hover:shadow-[0_0_40px_rgba(124,58,237,0.2)]",
        className
      )}
    >
      {/* Subtle inner gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none rounded-2xl" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
