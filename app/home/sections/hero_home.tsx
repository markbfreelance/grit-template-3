"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroHome() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
      setDate(
        now
          .toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
          .toUpperCase(),
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] texture overflow-hidden flex flex-col scanlines">
      {/* Full bleed BG */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholders/player1.png"
          alt="Hero"
          fill
          className="object-cover object-top opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/60" />
        <div className="absolute inset-0 bg-[#DA1D3A]/5" />
      </div>

      {/* HUD corners */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#DA1D3A]/40 z-20" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#DA1D3A]/40 z-20" />
      <div className="absolute bottom-16 left-4 w-8 h-8 border-b border-l border-[#DA1D3A]/40 z-20" />
      <div className="absolute bottom-16 right-4 w-8 h-8 border-b border-r border-[#DA1D3A]/40 z-20" />

      {/* HUD top bar */}
      <div className="relative z-10 flex items-center justify-between px-8 py-4 border-b border-white/5">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DA1D3A] animate-pulse" />
            <span className="font-body text-[9px] tracking-widest text-[#DA1D3A]/70 uppercase">
              Live
            </span>
          </div>
          <span className="w-px h-3 bg-white/10" />
          <span className="font-body text-[9px] tracking-widest text-white/20 uppercase">
            Grit Digital Performance
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-body text-[9px] tracking-widest text-white/20 uppercase hidden md:block">
            {date}
          </span>
          <span className="w-px h-3 bg-white/10 hidden md:block" />
          <span className="font-body text-[9px] tracking-widest text-white/20 tabular-nums">
            {time}
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end max-w-7xl mx-auto w-full px-8 pb-0">
        {/* Side label — vertical */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
          <div className="w-px h-16 bg-white/10" />
          <span
            className="font-body text-[9px] tracking-widest text-white/20 uppercase"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Spring 2026 — Est. 2014
          </span>
          <div className="w-px h-16 bg-white/10" />
        </div>

        {/* Headline */}
        <div className="mb-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-[#DA1D3A]" />
            <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
              Performance Training
            </span>
          </div>

          <h1
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(5rem, 15vw, 15rem)", lineHeight: 0.88 }}
          >
            BUILT
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
            >
              FOR THE
            </span>
            <br />
            <span className="text-[#DA1D3A] glow-text-red">ELITE.</span>
          </h1>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/5 mt-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <p className="font-body text-sm text-white/35 leading-relaxed max-w-xs">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Built for
            athletes who refuse to settle.
          </p>

          <div className="flex justify-start md:justify-center">
            <a
              href="/register"
              className="font-body text-xs font-semibold tracking-widest text-white bg-[#DA1D3A] px-10 py-4 hover:bg-[#b01730] transition-all duration-200 uppercase glow-red"
            >
              Register Now
            </a>
          </div>

          <div className="flex items-center justify-start md:justify-end gap-8">
            {[
              { value: "500+", label: "Athletes" },
              { value: "12+", label: "Programs" },
              { value: "98%", label: "Satisfaction" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-1 text-right">
                <span className="font-display text-white text-2xl leading-none">
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

      {/* Ticker */}
      <div className="relative z-10 border-t border-white/5 bg-[#DA1D3A]/5 py-2 overflow-hidden">
        <div
          className="flex gap-12 whitespace-nowrap w-max"
          style={{ animation: "ticker 20s linear infinite" }}
        >
          {Array(14)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                className="font-body text-[9px] tracking-[0.3em] text-white/15 uppercase shrink-0"
              >
                {i % 2 === 0 ? "Grit Digital Performance" : "◆"}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
