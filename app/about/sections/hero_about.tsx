"use client";

import { useEffect, useState } from "react";

export default function HeroAbout() {
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
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#DA1D3A]/30 z-10" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#DA1D3A]/30 z-10" />

      {/* Top bar */}
      <div className="relative z-10 border-b border-white/5 px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DA1D3A] animate-pulse" />
          <span className="font-body text-[9px] tracking-widest text-[#DA1D3A]/60 uppercase">
            Signal — About
          </span>
        </div>
        <span className="font-body text-[9px] tracking-widest text-white/15 tabular-nums">
          {time}
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        {/* Section index */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-display text-white/5 text-8xl leading-none">
            00
          </span>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[#DA1D3A]" />
              <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
                About Us
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <h1
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(5rem, 12vw, 12rem)", lineHeight: 0.88 }}
          >
            BUILT
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
            >
              ON
            </span>
            <br />
            <span className="text-[#DA1D3A] glow-text-red">GRIT.</span>
          </h1>

          <div className="flex flex-col gap-6 pb-2">
            <p className="font-body text-sm text-white/35 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </p>
            <div className="flex items-center gap-8 pt-4 border-t border-white/5">
              {[
                { value: "500+", label: "Athletes" },
                { value: "10+", label: "Years" },
                { value: "98%", label: "Satisfaction" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="font-display text-white text-3xl leading-none">
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
      </div>
    </section>
  );
}
