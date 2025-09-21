'use client';

import React, { useEffect, useRef } from 'react';
import { poppins } from './ui/font';
import Link from 'next/link';

const HomeHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = canvas.parentElement.offsetHeight;

    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 1,
      });
    }

    let mouse = {
      x: null,
      y: null,
      radius: 150
    }

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }
    window.addEventListener('mousemove', handleMouseMove);


    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fill();

        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 120})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        
        const dxMouse = p.x - mouse.x;
        const dyMouse = p.y - mouse.y;
        const distanceMouse = Math.sqrt(dxMouse*dxMouse + dyMouse*dyMouse);
        if(distanceMouse < mouse.radius){
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(240, 106, 106, ${1 - distanceMouse/mouse.radius})`;
            ctx.lineWidth = 1;
            ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-[#212121] to-[#F06A6A] py-32 md:py-48">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-50"></canvas>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-5xl md:text-5xl font-extrabold text-[#F06A6A] ${poppins.className}`}>
          Empowering  <span className="text-white">Your Digital Future</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          We build innovative software solutions that drive growth and efficiency. Let's build the future together.
        </p>
        <div className="mt-10">
            <Link href="/get-started" className="inline-block bg-[#F06A6A] text-white font-semibold rounded-lg px-8 py-4 text-lg hover:bg-[#C04F4F] transition-colors duration-300 ease-in-out">
                Get Started
            </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;