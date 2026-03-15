const divisions = [
  {
    age: "KINDER — 6U",
    label: "LITTLE GRINDERS",
    number: "01",
    description:
      "Introduction to team sports and movement. Fun-first environment focused on building love for the game.",
    focus: ["Coordination", "Fun & play", "Basic rules", "Teamwork"],
    spots: "12 spots per team",
  },
  {
    age: "8U — 10U",
    label: "FUTURE ELITE",
    number: "02",
    description:
      "Athletes begin developing real skills and competitive instincts in a supportive team environment.",
    focus: ["Fundamentals", "Position intro", "Agility", "Competition"],
    spots: "14 spots per team",
  },
  {
    age: "12U — 14U",
    label: "DEVELOPING ELITE",
    number: "03",
    description:
      "The bridge between youth and competitive play. High-level skill development and team systems.",
    focus: ["Team systems", "Strength intro", "Film review", "Leadership"],
    spots: "16 spots per team",
  },
  {
    age: "16U — 18U",
    label: "GRIT ELITE",
    number: "04",
    description:
      "Our flagship competitive division. Built for athletes serious about playing at the next level.",
    focus: [
      "Elite training",
      "Recruiting support",
      "Film study",
      "College prep",
    ],
    spots: "18 spots per team",
  },
];

export default function DivisionsTeams() {
  return (
    <section className="w-full bg-[#111111] texture py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Label bar */}
        <div className="border-y border-white/5 -mx-6 md:-mx-8 px-6 md:px-8 py-3 flex items-center gap-4 mb-16">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DA1D3A] animate-pulse" />
          <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
            Age Divisions
          </span>
          <span className="flex-1 h-px bg-white/5" />
          <span className="font-body text-[9px] tracking-widest text-white/15 uppercase">
            4 Divisions
          </span>
        </div>

        <div className="flex flex-col divide-y divide-white/5">
          {divisions.map((div, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 lg:grid-cols-12 hover:bg-[#161616] transition-colors duration-300 cursor-pointer relative py-8"
            >
              {/* Red left border */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#DA1D3A] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

              {/* Number */}
              <div className="hidden lg:flex lg:col-span-1 items-start pt-1 pl-4">
                <span className="font-display text-white/6 group-hover:text-white/15 transition-colors duration-300 text-4xl leading-none">
                  {div.number}
                </span>
              </div>

              {/* Age + label */}
              <div className="lg:col-span-3 flex flex-col gap-3 mb-4 lg:mb-0">
                <div className="self-start border border-[#DA1D3A]/30 bg-[#DA1D3A]/5 px-3 py-1.5">
                  <span className="font-body text-[9px] tracking-widest text-[#DA1D3A] uppercase">
                    {div.age}
                  </span>
                </div>
                <h3
                  className="font-display text-white leading-none group-hover:text-[#DA1D3A] transition-colors duration-300"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)" }}
                >
                  {div.label}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-4 flex items-center lg:px-8 mb-4 lg:mb-0">
                <p className="font-body text-sm text-white/30 leading-relaxed">
                  {div.description}
                </p>
              </div>

              {/* Focus + spots */}
              <div className="lg:col-span-3 flex flex-col justify-center gap-2 lg:px-8 border-t lg:border-t-0 lg:border-l border-white/5 pt-4 lg:pt-0">
                {div.focus.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <span className="text-[#DA1D3A] text-xs shrink-0">◆</span>
                    <span className="font-body text-xs text-white/25">{f}</span>
                  </div>
                ))}
                <p className="font-body text-[9px] tracking-widest text-white/15 uppercase mt-2">
                  {div.spots}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex lg:col-span-1 items-center justify-end pr-4">
                <span className="font-body text-white/10 group-hover:text-[#DA1D3A] transition-colors duration-300 text-lg">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
