"use client";

import { useState } from "react";
import Image from "next/image";

const teams = [
  {
    name: "GRIT ELITE 18U",
    division: "18U",
    season: "SPRING 2026",
    record: "12 — 3",
    players: 18,
    coach: "COACH DREW",
    status: "ACTIVE",
    image: "/placeholders/offer1.png",
    coachImage: "/placeholders/coach3.png",
    number: "01",
    win: 12,
    loss: 3,
  },
  {
    name: "GRIT ELITE 16U",
    division: "16U",
    season: "SPRING 2026",
    record: "9 — 4",
    players: 16,
    coach: "COACH JORDAN",
    status: "ACTIVE",
    image: "/placeholders/offer2.jpg",
    coachImage: "/placeholders/coach2.png",
    number: "02",
    win: 9,
    loss: 4,
  },
  {
    name: "GRIT ELITE 14U",
    division: "14U",
    season: "SPRING 2026",
    record: "11 — 2",
    players: 15,
    coach: "COACH PHIL",
    status: "ACTIVE",
    image: "/placeholders/offer3.jpg",
    coachImage: "/placeholders/coach1.png",
    number: "03",
    win: 11,
    loss: 2,
  },
  {
    name: "GRIT ELITE 12U",
    division: "12U",
    season: "SPRING 2026",
    record: "8 — 5",
    players: 14,
    coach: "COACH ISAIAH",
    status: "ACTIVE",
    image: "/placeholders/offer4.jpg",
    coachImage: "/placeholders/coach4.png",
    number: "04",
    win: 8,
    loss: 5,
  },
  {
    name: "GRIT FUTURE 10U",
    division: "10U",
    season: "SPRING 2026",
    record: "7 — 3",
    players: 12,
    coach: "COACH PHIL",
    status: "ACTIVE",
    image: "/placeholders/offer1.png",
    coachImage: "/placeholders/coach1.png",
    number: "05",
    win: 7,
    loss: 3,
  },
  {
    name: "GRIT FUTURE 8U",
    division: "8U",
    season: "SPRING 2026",
    record: "6 — 4",
    players: 12,
    coach: "COACH ISAIAH",
    status: "RECRUITING",
    image: "/placeholders/offer2.jpg",
    coachImage: "/placeholders/coach4.png",
    number: "06",
    win: 6,
    loss: 4,
  },
];

const filters = ["ALL", "18U", "16U", "14U", "12U", "10U", "8U"];

export default function GridTeams() {
  const [active, setActive] = useState("ALL");
  const filtered =
    active === "ALL" ? teams : teams.filter((t) => t.division === active);

  return (
    <section className="w-full bg-[#0a0a0a] texture py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Scoreboard header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-0">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#DA1D3A]" />
              <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
                Season Roster
              </span>
            </div>
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              ALL
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
              >
                TEAMS.
              </span>
            </h2>
          </div>

          {/* Filter pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-body text-[9px] font-medium tracking-widest px-4 py-2 border transition-all duration-200 uppercase ${
                  active === f
                    ? "bg-[#DA1D3A] border-[#DA1D3A] text-white glow-red"
                    : "border-white/10 text-white/25 hover:border-[#DA1D3A]/40 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Scoreboard column headers */}
        <div className="hidden md:grid grid-cols-12 border-b border-white/5 py-3 mt-8 px-4">
          <span className="col-span-1 font-body text-[9px] tracking-widest text-white/15 uppercase">
            #
          </span>
          <span className="col-span-3 font-body text-[9px] tracking-widest text-white/15 uppercase">
            Team
          </span>
          <span className="col-span-2 font-body text-[9px] tracking-widest text-white/15 uppercase">
            Division
          </span>
          <span className="col-span-2 font-body text-[9px] tracking-widest text-white/15 uppercase text-center">
            W — L
          </span>
          <span className="col-span-2 font-body text-[9px] tracking-widest text-white/15 uppercase">
            Coach
          </span>
          <span className="col-span-1 font-body text-[9px] tracking-widest text-white/15 uppercase">
            Roster
          </span>
          <span className="col-span-1 font-body text-[9px] tracking-widest text-white/15 uppercase text-right">
            Status
          </span>
        </div>

        {/* Teams */}
        <div className="flex flex-col">
          {filtered.map((team, i) => (
            <div
              key={i}
              className="group relative border-b border-white/5 hover:bg-[#111111] transition-colors duration-300 cursor-pointer"
            >
              {/* Red left border sweep */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#DA1D3A] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

              {/* Mobile layout */}
              <div className="md:hidden p-4 flex gap-4">
                <div className="relative w-16 h-16 overflow-hidden shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: `url(${team.image})` }}
                  />
                  <div className="absolute inset-0 bg-[#DA1D3A]/0 group-hover:bg-[#DA1D3A]/10 transition-colors duration-300" />
                  <div className="absolute top-1 left-1">
                    <span className="font-display text-white/30 text-xs">
                      {team.number}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-body text-[9px] tracking-widest text-[#DA1D3A] uppercase">
                      {team.division}
                    </span>
                    {team.status === "RECRUITING" && (
                      <span className="font-body text-[8px] tracking-widest text-[#DA1D3A] border border-[#DA1D3A]/30 px-1.5 py-0.5 uppercase">
                        Recruiting
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-white text-base leading-none group-hover:text-[#DA1D3A] transition-colors duration-300 truncate">
                    {team.name}
                  </h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="font-body text-[9px] text-white/25">
                      {team.record}
                    </span>
                    <span className="font-body text-[9px] text-white/25">
                      {team.coach}
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop scoreboard row */}
              <div className="hidden md:grid grid-cols-12 items-center px-4 py-5 gap-2">
                {/* Number */}
                <div className="col-span-1">
                  <span className="font-display text-white/10 group-hover:text-white/25 transition-colors duration-300 text-2xl">
                    {team.number}
                  </span>
                </div>

                {/* Team name + image */}
                <div className="col-span-3 flex items-center gap-3">
                  <div className="relative w-10 h-10 overflow-hidden shrink-0">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                      style={{ backgroundImage: `url(${team.image})` }}
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <h3 className="font-display text-white text-sm leading-none group-hover:text-[#DA1D3A] transition-colors duration-300 truncate">
                      {team.name}
                    </h3>
                    <span className="font-body text-[9px] text-white/20">
                      {team.season}
                    </span>
                  </div>
                </div>

                {/* Division */}
                <div className="col-span-2">
                  <span className="font-body text-[9px] tracking-widest text-[#DA1D3A] border border-[#DA1D3A]/30 px-2 py-1 uppercase">
                    {team.division}
                  </span>
                </div>

                {/* Record */}
                <div className="col-span-2 flex items-center justify-center gap-3">
                  <span className="font-display text-white text-xl leading-none">
                    {team.win}
                  </span>
                  <span className="font-body text-white/20 text-xs">—</span>
                  <span className="font-display text-white/40 text-xl leading-none">
                    {team.loss}
                  </span>
                </div>

                {/* Coach */}
                <div className="col-span-2 flex items-center gap-2">
                  <div className="relative w-7 h-7 overflow-hidden rounded-full border border-white/10 shrink-0">
                    <Image
                      src={team.coachImage}
                      alt={team.coach}
                      fill
                      className="object-cover object-top grayscale"
                    />
                  </div>
                  <span className="font-body text-[10px] text-white/30 truncate">
                    {team.coach}
                  </span>
                </div>

                {/* Roster */}
                <div className="col-span-1">
                  <span className="font-body text-[10px] text-white/25">
                    {team.players}
                  </span>
                </div>

                {/* Status + arrow */}
                <div className="col-span-1 flex items-center justify-end gap-3">
                  {team.status === "RECRUITING" ? (
                    <span className="font-body text-[8px] tracking-widest text-[#DA1D3A] border border-[#DA1D3A]/30 px-2 py-1 uppercase">
                      Recruiting
                    </span>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#DA1D3A] transition-colors duration-300" />
                  )}
                  <span className="font-body text-white/10 group-hover:text-[#DA1D3A] transition-colors duration-300">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
