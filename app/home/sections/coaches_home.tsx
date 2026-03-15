import Image from "next/image";

const coaches = [
  {
    name: "COACH PHIL",
    role: "Head Coach — 8U-10U",
    image: "/placeholders/coach1.png",
    number: "01",
  },
  {
    name: "COACH JORDAN",
    role: "Strength — 12U-14U",
    image: "/placeholders/coach2.png",
    number: "02",
  },
  {
    name: "COACH DREW",
    role: "Skills — 16U-18U",
    image: "/placeholders/coach3.png",
    number: "03",
  },
  {
    name: "COACH ISAIAH",
    role: "Youth — Kinder-6U",
    image: "/placeholders/coach4.png",
    number: "04",
  },
];

export default function CoachesHome() {
  return (
    <section className="w-full bg-[#0a0a0a] texture py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#DA1D3A]" />
              <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
                Our Staff
              </span>
            </div>
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
            >
              MEET THE
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
              >
                COACHES.
              </span>
            </h2>
          </div>
          <a
            href="/coaches"
            className="hidden md:block font-body text-[10px] tracking-widest text-white/25 hover:text-white transition-colors uppercase border-b border-white/10 pb-1"
          >
            All Coaches →
          </a>
        </div>

        {/* Staggered grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {coaches.map((coach, i) => (
            <div
              key={i}
              className="group relative bg-[#0a0a0a] overflow-hidden cursor-pointer"
              style={{ marginTop: i % 2 === 1 ? "3rem" : "0" }}
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "2/3" }}
              >
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[#DA1D3A]/0 group-hover:bg-[#DA1D3A]/5 transition-colors duration-500" />

                {/* Number */}
                <div className="absolute top-4 right-4">
                  <span className="font-display text-white/10 text-2xl">
                    {coach.number}
                  </span>
                </div>

                {/* HUD corner */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#DA1D3A]/0 group-hover:border-[#DA1D3A]/60 transition-colors duration-500" />

                {/* Red bottom sweep */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#DA1D3A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>

              <div className="p-4 flex flex-col gap-1">
                <h3 className="font-display text-white text-lg leading-none group-hover:text-[#DA1D3A] transition-colors duration-300">
                  {coach.name}
                </h3>
                <p className="font-body text-xs text-white/25">{coach.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
