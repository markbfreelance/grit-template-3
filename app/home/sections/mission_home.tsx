import Image from "next/image";

export default function MissionHome() {
  return (
    <section className="w-full bg-[#0a0a0a] texture overflow-hidden">
      {/* Label bar */}
      <div className="border-y border-white/5 px-8 py-3 flex items-center gap-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#DA1D3A] animate-pulse" />
        <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
          Our Mission
        </span>
        <span className="flex-1 h-px bg-white/5" />
        <span className="font-body text-[9px] tracking-widest text-white/15 uppercase">
          Est. 2014
        </span>
      </div>

      {/* Split */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ minHeight: "85vh" }}
      >
        {/* Image */}
        <div
          className="relative overflow-hidden"
          style={{ minHeight: "350px" }}
        >
          <Image
            src="/placeholders/player1.png"
            alt="Mission"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0a0a0a] lg:bg-linear-to-r lg:from-transparent lg:to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[#DA1D3A]/5" />

          {/* Ghost year */}
          <div className="absolute bottom-8 left-8 hidden lg:block">
            <span
              className="font-display text-white/4 leading-none"
              style={{ fontSize: "clamp(5rem, 10vw, 10rem)" }}
            >
              2026
            </span>
          </div>

          {/* HUD corners on image */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#DA1D3A]/30" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#DA1D3A]/30" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-24 gap-8 border-t lg:border-t-0 lg:border-l border-white/5">
          <h2
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 5vw, 6rem)" }}
          >
            WE DON'T
            <br />
            JUST TRAIN.
            <br />
            <span className="text-[#DA1D3A] glow-text-red">WE FORGE</span>
            <br />
            CHAMPIONS.
          </h2>

          <p className="font-body text-sm text-white/35 leading-relaxed max-w-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa cum sociis natoque
            penatibus.
          </p>

          <ul className="flex flex-col gap-3">
            {[
              "Elite 1-on-1 & group coaching",
              "Science-backed performance methodology",
              "Mental toughness & leadership development",
              "Year-round programming for all levels",
            ].map((p, i) => (
              <li
                key={i}
                className="flex items-center gap-3 font-body text-sm text-white/35"
              >
                <span className="text-[#DA1D3A] text-xs shrink-0">◆</span>
                {p}
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/5">
            {[
              { value: "500+", label: "Athletes" },
              { value: "12+", label: "Programs" },
              { value: "98%", label: "Satisfaction" },
              { value: "10+", label: "Years" },
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
    </section>
  );
}
