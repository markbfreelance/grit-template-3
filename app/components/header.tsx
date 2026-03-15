"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Teams", href: "/teams" },
  { label: "Merch", href: "/merch" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    };
    update();
    const interval = setInterval(update, 1000);
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 10));
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 texture transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#DA1D3A]/20"
          : "bg-[#0a0a0a] border-b border-white/5"
      }`}
    >
      {/* Top micro bar */}
      <div className="border-b border-white/5 px-6 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DA1D3A] animate-pulse" />
          <span className="font-body text-[9px] tracking-widest text-white/20 uppercase">
            Signal Active — Spring 2026
          </span>
        </div>
        <span className="font-body text-[9px] tracking-widest text-white/15 tabular-nums">
          {time}
        </span>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/home">
          <Image
            src="/logo/gritLogo2.webp"
            alt="Grit"
            width={110}
            height={40}
            className="h-8 w-auto object-contain brightness-0 invert"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[11px] font-medium tracking-widest text-white/35 hover:text-white transition-colors duration-200 uppercase relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#DA1D3A] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/register"
            className="font-body text-[11px] font-semibold tracking-widest text-white bg-[#DA1D3A] px-5 py-2 hover:bg-[#b01730] transition-all duration-200 uppercase glow-red"
          >
            Register
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-t border-white/5 ${menuOpen ? "max-h-80" : "max-h-0"}`}
      >
        <nav className="flex flex-col px-6 py-4 bg-[#0a0a0a] texture">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-xs font-medium tracking-widest text-white/35 hover:text-white py-3.5 border-b border-white/5 transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/register"
            onClick={() => setMenuOpen(false)}
            className="font-body text-xs font-semibold tracking-widest text-white bg-[#DA1D3A] px-6 py-3 text-center mt-4 hover:bg-[#b01730] transition-colors uppercase glow-red"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
