import Image from "next/image";

const timeline = [
  {
    year: "2014",
    title: "THE BEGINNING",
    body: "Founded in a single gym with one coach and a handful of athletes who believed in working harder than everyone else.",
  },
  {
    year: "2017",
    title: "FIRST EXPANSION",
    body: "Grew to three locations and launched our first structured age-division program serving over 100 athletes.",
  },
  {
    year: "2020",
    title: "GOING DIGITAL",
    body: "Launched virtual training during the pandemic — keeping athletes sharp and connected through one of sport's hardest years.",
  },
  {
    year: "2023",
    title: "ELITE STATUS",
    body: "Crossed 500 athletes trained, opened our flagship facility, and launched the Grit Elite 16U-18U competitive program.",
  },
  {
    year: "2026",
    title: "THE SIGNAL",
    body: "Entering our next era. New technology, new programs, same obsession with building complete athletes.",
  },
];

export default function StoryAbout() {
  return (
    <section className="w-full bg-[#111111] texture">
      {/* Label bar */}
      <div className="border-y border-white/5 px-8 py-3 flex items-center gap-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#DA1D3A] animate-pulse" />
        <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
          Our Story
        </span>
        <span className="flex-1 h-px bg-white/5" />
        <span className="font-body text-[9px] tracking-widest text-white/15 uppercase">
          2014 — 2026
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left — image */}
        <div
          className="relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5"
          style={{ minHeight: "500px" }}
        >
          <Image
            src="/placeholders/player1.png"
            alt="Our Story"
            fill
            className="object-cover object-top grayscale"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#111111] via-[#111111]/30 to-transparent" />
          <div className="absolute inset-0 bg-[#DA1D3A]/5" />

          {/* HUD corners */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#DA1D3A]/30" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#DA1D3A]/30" />

          {/* Floating stat */}
          <div className="absolute bottom-8 left-8 border border-[#DA1D3A]/30 bg-[#0a0a0a]/80 backdrop-blur-sm px-6 py-4">
            <p className="font-display text-white text-4xl leading-none">10+</p>
            <p className="font-body text-[9px] tracking-widest text-white/30 uppercase mt-1">
              Years of Excellence
            </p>
          </div>
        </div>

        {/* Right — timeline */}
        <div className="flex flex-col px-8 lg:px-16 py-16 gap-0">
          <h2
            className="font-display text-white leading-none mb-12"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
          >
            MORE THAN
            <br />
            A TRAINING
            <br />
            <span className="text-[#DA1D3A] glow-text-red">PROGRAM.</span>
          </h2>

          {/* Timeline items */}
          <div className="flex flex-col">
            {timeline.map((item, i) => (
              <div key={i} className="group relative flex gap-6 pb-8 last:pb-0">
                {/* Line + dot */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className={`w-2 h-2 rounded-full border mt-1 shrink-0 transition-colors duration-300 ${
                      i === timeline.length - 1
                        ? "bg-[#DA1D3A] border-[#DA1D3A]"
                        : "bg-transparent border-white/20 group-hover:border-[#DA1D3A]"
                    }`}
                  />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-white/5 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1 pb-2">
                  <span className="font-display text-[#DA1D3A] text-sm leading-none">
                    {item.year}
                  </span>
                  <h3 className="font-display text-white text-lg leading-none group-hover:text-[#DA1D3A] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-white/30 leading-relaxed mt-1">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
