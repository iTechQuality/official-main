"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface PremiumButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  arrow?: boolean;
  className?: string;
  external?: boolean;
}

const variants = {
  primary:
    "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02]",
  secondary:
    "bg-white/10 text-white border border-white/10 hover:bg-white/15 hover:border-white/20",
  outline:
    "border border-violet-500/50 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400",
  ghost:
    "text-slate-300 hover:text-white hover:bg-white/5",
  gold:
    "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02]",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
  md: "px-6 py-3 text-sm rounded-xl gap-2",
  lg: "px-8 py-4 text-base rounded-xl gap-2.5",
};

export function PremiumButton({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  arrow = false,
  className,
  external,
}: PremiumButtonProps) {
  const baseClass = cn(
    "inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer select-none",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: variant === "ghost" ? 1 : 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="group">
        <Link
          href={href}
          className={baseClass}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
      className={cn(baseClass, "group")}
    >
      {content}
    </motion.button>
  );
}
