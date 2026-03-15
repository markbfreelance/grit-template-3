"use client";

import { useState } from "react";
import Image from "next/image";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export default function FeaturedMerch() {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <section className="w-full bg-[#111111] texture">
      {/* Label bar */}
      <div className="border-y border-white/5 px-6 md:px-8 py-3 flex items-center gap-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#DA1D3A] animate-pulse" />
        <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
          Featured Drop
        </span>
        <span className="flex-1 h-px bg-white/5" />
        <span className="font-body text-[9px] tracking-widest text-white/15 uppercase">
          Spring 2026
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div
          className="relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5 scanlines"
          style={{ minHeight: "560px" }}
        >
          <Image
            src="/placeholders/offer1.png"
            alt="Featured Product"
            fill
            className="object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#111111] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[#DA1D3A]/5" />

          {/* HUD corners */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#DA1D3A]/40" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#DA1D3A]/40" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#DA1D3A]/40" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#DA1D3A]/40" />

          {/* NEW DROP badge */}
          <div className="absolute top-6 left-6 border border-[#DA1D3A] bg-[#DA1D3A]/10 backdrop-blur-sm px-4 py-2">
            <span className="font-body text-[9px] tracking-widest text-[#DA1D3A] uppercase">
              New Drop
            </span>
          </div>

          {/* Ghost year */}
          <div className="absolute bottom-6 right-6">
            <span
              className="font-display text-white/4 leading-none"
              style={{ fontSize: "clamp(4rem, 8vw, 8rem)" }}
            >
              '26
            </span>
          </div>
        </div>

        {/* Product info */}
        <div className="flex flex-col justify-between px-8 lg:px-12 py-12 gap-8">
          <div className="flex flex-col gap-6">
            {/* Meta row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-body text-[9px] tracking-widest text-[#DA1D3A] border border-[#DA1D3A]/30 px-2 py-1 uppercase">
                  Hoodie
                </span>
                <span className="w-px h-3 bg-white/10" />
                <span className="font-body text-[9px] text-white/20">
                  Spring 2026
                </span>
              </div>
              <span className="font-display text-white text-2xl leading-none">
                $89.99
              </span>
            </div>

            {/* Name */}
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
            >
              GRIT ELITE
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
              >
                PULLOVER
              </span>
            </h2>

            <p className="font-body text-sm text-white/30 leading-relaxed max-w-sm">
              Heavyweight cotton blend. Embroidered Grit crest. Built for the
              grind and the stands.
            </p>

            {/* Size selector */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="font-body text-[9px] tracking-widest text-white/25 uppercase">
                  Select Size
                </p>
                <span className="font-body text-[9px] text-white/15 underline cursor-pointer">
                  Size Guide
                </span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`font-body text-[10px] font-medium tracking-widest px-4 py-2.5 border transition-all duration-200 uppercase ${
                      selectedSize === size
                        ? "bg-[#DA1D3A] border-[#DA1D3A] text-white glow-red"
                        : "border-white/10 text-white/30 hover:border-[#DA1D3A]/40 hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <button className="font-body text-xs font-semibold tracking-widest text-white bg-[#DA1D3A] px-8 py-4 hover:bg-[#b01730] transition-all duration-200 uppercase glow-red">
              Add To Cart
            </button>
            <button className="font-body text-xs font-medium tracking-widest text-white/25 border border-white/10 px-8 py-4 hover:border-white/30 hover:text-white transition-all duration-200 uppercase">
              View Full Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
