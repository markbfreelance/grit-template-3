"use client";

import { useEffect, useState } from "react";

export default function HeroContact() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-[#0a0a0a] texture overflow-hidden">
      {/* HUD corners */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#DA1D3A]/30 z-10 hidden md:block" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#DA1D3A]/30 z-10 hidden md:block" />

      {/* Top bar */}
      <div className="relative z-10 border-b border-white/5 px-6 md:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DA1D3A] animate-pulse shrink-0" />
          <span className="font-body text-[9px] tracking-widest text-[#DA1D3A]/60 uppercase">
            Signal — Contact
          </span>
        </div>
        <span className="font-body text-[9px] tracking-widest text-white/15 tabular-nums hidden sm:block">
          {time}
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <div className="w-6 h-px bg-[#DA1D3A] shrink-0" />
          <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
            Get In Touch
          </span>
          <span className="font-display text-white/4 text-5xl leading-none ml-4 hidden lg:block">
            01
          </span>
        </div>

        {/* 2-col on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
          {/* Left — headline */}
          <h1
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(4rem, 10vw, 10rem)", lineHeight: 0.88 }}
          >
            LET'S
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
            >
              TALK.
            </span>
          </h1>

          {/* Right — contact info */}
          <div className="flex flex-col gap-8 lg:pb-4">
            <p className="font-body text-sm text-white/35 leading-relaxed max-w-sm">
              Whether you have questions about programs, want to register your
              athlete, or just want to connect — our team is ready.
            </p>

            <div className="flex flex-col gap-4 pt-6 border-t border-white/5">
              {[
                { label: "Email", value: "info@gritperformance.com" },
                { label: "Phone", value: "+1 (555) 000-0000" },
                { label: "Location", value: "123 Grit Ave, Performance City" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="font-body text-[9px] tracking-widest text-[#DA1D3A] uppercase w-16 shrink-0">
                    {item.label}
                  </span>
                  <div className="w-4 h-px bg-white/10 shrink-0" />
                  <span className="font-body text-xs text-white/30">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#form"
              className="font-body text-[10px] tracking-widest text-white/25 hover:text-white transition-colors uppercase border-b border-white/10 pb-1 self-start"
            >
              Send A Message →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
