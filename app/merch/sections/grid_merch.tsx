"use client";

import { useState } from "react";

const categories = ["ALL", "TOPS", "BOTTOMS", "HEADWEAR", "OUTERWEAR"];

const products = [
  {
    name: "GRIT ELITE TEE",
    category: "TOPS",
    price: "$34.99",
    image: "/placeholders/offer2.jpg",
    tag: "BESTSELLER",
  },
  {
    name: "PERFORMANCE SHORTS",
    category: "BOTTOMS",
    price: "$44.99",
    image: "/placeholders/offer3.jpg",
    tag: "NEW",
  },
  {
    name: "GRIT SNAPBACK",
    category: "HEADWEAR",
    price: "$29.99",
    image: "/placeholders/offer4.jpg",
    tag: null,
  },
  {
    name: "TRAINING JOGGERS",
    category: "BOTTOMS",
    price: "$59.99",
    image: "/placeholders/offer1.png",
    tag: "NEW",
  },
  {
    name: "GRIT QUARTER-ZIP",
    category: "OUTERWEAR",
    price: "$74.99",
    image: "/placeholders/offer2.jpg",
    tag: null,
  },
  {
    name: "COMPRESSION LONG SLEEVE",
    category: "TOPS",
    price: "$39.99",
    image: "/placeholders/offer3.jpg",
    tag: "BESTSELLER",
  },
];

export default function GridMerch() {
  const [active, setActive] = useState("ALL");
  const filtered =
    active === "ALL" ? products : products.filter((p) => p.category === active);

  return (
    <section className="w-full bg-[#0a0a0a] texture py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-0">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#DA1D3A]" />
              <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
                All Products
              </span>
            </div>
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              THE
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
              >
                COLLECTION.
              </span>
            </h2>
          </div>

          {/* Category filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`font-body text-[9px] font-medium tracking-widest px-4 py-2 border transition-all duration-200 uppercase ${
                  active === c
                    ? "bg-[#DA1D3A] border-[#DA1D3A] text-white glow-red"
                    : "border-white/10 text-white/25 hover:border-[#DA1D3A]/40 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Item count */}
        <div className="border-b border-white/5 pb-4 mt-8 mb-0 flex items-center justify-between">
          <span className="font-body text-[9px] tracking-widest text-white/15 uppercase">
            {filtered.length} Items
          </span>
          <span className="font-body text-[9px] tracking-widest text-white/15 uppercase">
            Spring 2026 Collection
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 mt-0">
          {filtered.map((product, i) => (
            <div
              key={i}
              className="group relative bg-[#0a0a0a] overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[#DA1D3A]/0 group-hover:bg-[#DA1D3A]/5 transition-colors duration-500" />

                {/* HUD corners on hover */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#DA1D3A]/0 group-hover:border-[#DA1D3A]/60 transition-colors duration-500" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#DA1D3A]/0 group-hover:border-[#DA1D3A]/60 transition-colors duration-500" />

                {/* Tag */}
                {product.tag && (
                  <div className="absolute top-4 left-4">
                    <span className="font-body text-[8px] tracking-widest text-[#DA1D3A] border border-[#DA1D3A]/40 bg-[#0a0a0a]/80 backdrop-blur-sm px-2 py-1 uppercase">
                      {product.tag}
                    </span>
                  </div>
                )}

                {/* Quick shop */}
                <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="font-body text-[9px] font-semibold tracking-widest text-white bg-[#DA1D3A] px-6 py-2.5 hover:bg-[#b01730] transition-colors uppercase glow-red">
                    Quick Shop
                  </button>
                </div>

                {/* Red bottom sweep */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#DA1D3A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>

              {/* Info */}
              <div className="p-4 flex items-center justify-between border-t border-white/5">
                <div className="flex flex-col gap-1">
                  <span className="font-body text-[9px] tracking-widest text-white/20 uppercase">
                    {product.category}
                  </span>
                  <h3 className="font-display text-white text-sm leading-none group-hover:text-[#DA1D3A] transition-colors duration-300">
                    {product.name}
                  </h3>
                </div>
                <span className="font-display text-white/60 text-sm group-hover:text-white transition-colors duration-300">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
