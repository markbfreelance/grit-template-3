"use client";

import { useEffect, useState } from "react";

export default function HeroTeams() {
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
            Signal — Teams
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
            Grit Nation
          </span>
          <span className="font-display text-white/4 text-5xl leading-none ml-4 hidden lg:block">
            01
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display text-white leading-none mb-10"
          style={{ fontSize: "clamp(4rem, 12vw, 12rem)", lineHeight: 0.88 }}
        >
          OUR
          <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
          >
            TEAMS.
          </span>
        </h1>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5 max-w-4xl">
          <p className="font-body text-sm text-white/35 leading-relaxed">
            From youth development to elite competition — Grit fields teams
            across every age division. Find your squad and get to work.
          </p>
          <div className="flex items-center gap-8">
            {[
              { value: "6", label: "Active Teams" },
              { value: "4", label: "Divisions" },
              { value: "90+", label: "Athletes" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span
                  className="font-display text-white leading-none"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
                >
                  {s.value}
                </span>
                <span className="font-body text-[9px] tracking-widest text-white/25 uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
