const values = [
  {
    number: "01",
    title: "GRIT OVER GLORY",
    description:
      "We believe the grind matters more than the spotlight. Every rep, every drill, every early morning builds the foundation of a champion.",
  },
  {
    number: "02",
    title: "ATHLETE FIRST",
    description:
      "Every decision starts with the athlete. Programs, coaching, environment — all designed around your development.",
  },
  {
    number: "03",
    title: "ELITE STANDARDS",
    description:
      "We don't settle for average. Our coaches hold every athlete to the highest standard because that's what it takes.",
  },
  {
    number: "04",
    title: "COMMUNITY & CHARACTER",
    description:
      "Champions aren't just built in the gym. We develop leaders, teammates, and people of strong character on and off the field.",
  },
];

export default function ValuesAbout() {
  return (
    <section className="w-full bg-[#111111] texture py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-end justify-between border-b border-white/5 pb-8 mb-0">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#DA1D3A]" />
              <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
                What We Stand For
              </span>
            </div>
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              OUR
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
              >
                VALUES.
              </span>
            </h2>
          </div>
        </div>

        {/* Values list */}
        <div className="flex flex-col divide-y divide-white/5">
          {values.map((value, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-10 hover:bg-[#161616] transition-colors duration-300 cursor-default px-4 -mx-4"
            >
              {/* Number */}
              <div className="md:col-span-1 flex items-start pt-1">
                <span className="font-display text-white/10 group-hover:text-[#DA1D3A]/30 transition-colors duration-300 text-3xl leading-none">
                  {value.number}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-4 flex items-center">
                <h3
                  className="font-display text-white leading-none group-hover:text-[#DA1D3A] transition-colors duration-300"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)" }}
                >
                  {value.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6 flex items-center">
                <p className="font-body text-sm text-white/30 leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex md:col-span-1 items-center justify-end">
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
