"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

/**
 * LightBeamButton
 *
 * A high-performance button with a rotating light beam border effect.
 * Tailored for Mozo Technologies with Brand Navy & Coral colors.
 */
export function LightBeamButton({
    children,
    className,
    onClick,
    gradientColors = ["#f06a6a", "#ffffff", "#f06a6a"], // Coral -> White -> Coral
    ...props
}) {
    // Construct the gradient string dynamically based on props
    const gradientString = `conic-gradient(from var(--gradient-angle), transparent 0%, ${gradientColors[0]} 40%, ${gradientColors[1]} 50%, transparent 60%, transparent 100%)`;

    return (
        <>
            <style jsx global>{`
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes border-spin {
          from {
            --gradient-angle: 0deg;
          }
          to {
            --gradient-angle: 360deg;
          }
        }
        .animate-border-spin {
          animation: border-spin 3s linear infinite;
        }
      `}</style>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClick}
                className={cn(
                    "group relative isolate overflow-hidden rounded-xl bg-[#05243D] px-10 py-4 text-base font-bold text-white transition-all hover:bg-[#083050]",
                    "shadow-[0_0_20px_-5px_rgba(240,106,106,0.3)] hover:shadow-[0_0_25px_-5px_rgba(240,106,106,0.5)]",
                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {children}
                </span>

                {/* Gradient Border Simulation */}
                <div
                    className="absolute inset-0 -z-10 rounded-xl p-[2px] animate-border-spin opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        "--gradient-angle": "0deg",
                        background: gradientString,
                    }}
                />

                {/* Inner Background (keeps text readable) */}
                <div className="absolute inset-[2px] -z-10 rounded-[10px] bg-[#05243D]" />

                {/* Shine Effect Overlay */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(240,106,106,0.15)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
        </>
    );
}

export default LightBeamButton;
