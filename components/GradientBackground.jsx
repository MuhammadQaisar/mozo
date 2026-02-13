"use client";

import React from "react";

/**
 * GradientBackground
 * 
 * An animated rotating gradient background component
 * using Mozo Technologies' coral brand colors.
 */
export function GradientBackground({ children, className = "" }) {
    return (
        <div
            className={`relative w-full h-full overflow-hidden ${className}`}
            style={{
                background: "linear-gradient(135deg, #fff5f5, #ffffff, #fff0ed)",
            }}
        >
            <style jsx>{`
        @keyframes rotate {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes rotate-reverse {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }
        .gradient-layer-1 {
          background: conic-gradient(
            from 0deg,
            #f06a6a,
            #ff8a8a,
            #ffb4a2,
            #ffd6cc,
            #ffffff,
            #fff0ed,
            #ffb4a2,
            #ff8a8a,
            #f06a6a
          );
          animation: rotate 12s linear infinite;
        }
        .gradient-layer-2 {
          background: conic-gradient(
            from 180deg,
            #f06a6a,
            #ffd6cc,
            #ffffff,
            #ffb4a2,
            #ff8a8a,
            #f06a6a,
            #ffd6cc,
            #ffffff,
            #f06a6a
          );
          animation: rotate-reverse 16s linear infinite;
        }
      `}</style>

            {/* Soft radial overlay for depth */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 240, 237, 0.2) 100%)",
                }}
            />

            {/* Rotating gradient layer 1 */}
            <div
                className="gradient-layer-1 absolute top-1/2 left-1/2 w-[250%] h-[250%] pointer-events-none opacity-30"
                style={{ filter: "blur(80px)" }}
            />

            {/* Rotating gradient layer 2 */}
            <div
                className="gradient-layer-2 absolute top-1/2 left-1/2 w-[200%] h-[200%] pointer-events-none opacity-20"
                style={{ filter: "blur(60px)" }}
            />

            {/* Content */}
            <div className="relative z-10 w-full h-full">{children}</div>
        </div>
    );
}

export default GradientBackground;
