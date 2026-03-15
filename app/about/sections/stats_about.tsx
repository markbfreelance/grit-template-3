const stats = [
  { value: "500+", label: "Athletes Trained", index: "01" },
  { value: "12+", label: "Programs Offered", index: "02" },
  { value: "98%", label: "Athlete Satisfaction", index: "03" },
  { value: "10+", label: "Years of Excellence", index: "04" },
];

export default function StatsAbout() {
  return (
    <section className="w-full bg-[#0a0a0a] texture border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative bg-[#0a0a0a] px-8 py-12 flex flex-col gap-3 overflow-hidden hover:bg-[#111111] transition-colors duration-300 cursor-default"
            >
              {/* Ghost index */}
              <span className="absolute top-4 right-4 font-display text-white/4 text-4xl leading-none">
                {stat.index}
              </span>

              {/* Red left border sweep */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#DA1D3A] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

              <p
                className="font-display text-white leading-none group-hover:text-[#DA1D3A] transition-colors duration-300"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                {stat.value}
              </p>
              <div className="w-6 h-px bg-[#DA1D3A]/40" />
              <p className="font-body text-xs text-white/30 tracking-widest uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
