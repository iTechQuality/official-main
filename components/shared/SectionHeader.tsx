"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={cn("flex flex-col gap-4", alignClass, className)}
    >
      {eyebrow && (
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/5 border border-white/10 text-violet-400">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        variants={fadeUp}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="gradient-text">{titleHighlight}</span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "text-base sm:text-lg text-slate-400 leading-relaxed",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
