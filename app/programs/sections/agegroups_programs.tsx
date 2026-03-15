const groups = [
  {
    age: "KINDER — 6U",
    title: "LITTLE GRINDERS",
    description:
      "Fun-first fundamentals. We introduce young athletes to movement, coordination, and the love of sport.",
    features: [
      "Basic motor skills",
      "Fun & games-based",
      "Confidence building",
      "Team interaction",
    ],
    image: "/placeholders/offer3.jpg",
    number: "01",
  },
  {
    age: "8U — 10U",
    title: "JUNIOR ATHLETES",
    description:
      "Start building real athletic habits. Speed, agility, and sport-specific skills at the right intensity.",
    features: [
      "Speed fundamentals",
      "Agility ladders",
      "Sport intro skills",
      "Character development",
    ],
    image: "/placeholders/offer4.jpg",
    number: "02",
  },
  {
    age: "12U — 14U",
    title: "DEVELOPING ATHLETES",
    description:
      "The critical window. We accelerate development with structured programming across speed, strength, and skills.",
    features: [
      "Strength intro",
      "Position skills",
      "Competition prep",
      "Mental performance",
    ],
    image: "/placeholders/offer1.png",
    number: "03",
  },
  {
    age: "16U — 18U",
    title: "ELITE ATHLETES",
    description:
      "Prepare for the next level. High-intensity training for athletes serious about collegiate and professional pursuits.",
    features: [
      "Elite strength",
      "Film & IQ sessions",
      "Recruiting prep",
      "Leadership training",
    ],
    image: "/placeholders/offer2.jpg",
    number: "04",
  },
];

export default function AgeGroupsPrograms() {
  return (
    <section className="w-full bg-[#0a0a0a] texture py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-end justify-between border-b border-white/5 pb-8 mb-0">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#DA1D3A]" />
              <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
                Age Groups
              </span>
            </div>
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              FIND YOUR
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
              >
                DIVISION.
              </span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col divide-y divide-white/5">
          {groups.map((group, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 lg:grid-cols-12 hover:bg-[#111111] transition-colors duration-300 cursor-pointer relative"
            >
              {/* Red left border */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#DA1D3A] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

              {/* Image */}
              <div
                className="lg:col-span-3 relative overflow-hidden"
                style={{ minHeight: "200px" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${group.image})` }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0a0a0a] group-hover:to-[#111111] transition-colors duration-300" />

                {/* Age badge */}
                <div className="absolute top-4 left-4 border border-[#DA1D3A]/30 bg-[#0a0a0a]/80 px-3 py-1.5 backdrop-blur-sm">
                  <span className="font-body text-[9px] tracking-widest text-[#DA1D3A] uppercase">
                    {group.age}
                  </span>
                </div>

                {/* Ghost number */}
                <div className="absolute bottom-4 right-4">
                  <span className="font-display text-white/6 text-5xl leading-none">
                    {group.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6 flex flex-col justify-center px-8 py-10 gap-3 border-t lg:border-t-0 lg:border-l border-white/5">
                <h3
                  className="font-display text-white leading-none group-hover:text-[#DA1D3A] transition-colors duration-300"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
                >
                  {group.title}
                </h3>
                <p className="font-body text-sm text-white/30 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Features */}
              <div className="lg:col-span-3 flex flex-col justify-center px-8 py-10 border-t lg:border-t-0 lg:border-l border-white/5 gap-2">
                {group.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <span className="text-[#DA1D3A] text-xs shrink-0">◆</span>
                    <span className="font-body text-xs text-white/25">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
