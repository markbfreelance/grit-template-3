import Image from "next/image";

const offers = [
  {
    number: "01",
    title: "SPEED & AGILITY",
    description:
      "Build explosive first-step quickness and elite lateral speed through progressive, science-backed drills.",
    tag: "All Ages",
    image: "/placeholders/offer1.png",
  },
  {
    number: "02",
    title: "STRENGTH TRAINING",
    description:
      "Functional power programming designed for athletes. Build strength without sacrificing speed.",
    tag: "14U+",
    image: "/placeholders/offer2.jpg",
  },
  {
    number: "03",
    title: "MENTAL PERFORMANCE",
    description:
      "Train your mind like you train your body. Focus, composure, and confidence under pressure.",
    tag: "All Ages",
    image: "/placeholders/offer3.jpg",
  },
  {
    number: "04",
    title: "TEAM PROGRAMS",
    description:
      "Full team development camps built around chemistry, communication, and competitive excellence.",
    tag: "Teams",
    image: "/placeholders/offer4.jpg",
  },
];

export default function OfferHome() {
  return (
    <section className="w-full bg-[#0a0a0a] texture py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#DA1D3A]" />
              <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
                What We Offer
              </span>
            </div>
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
            >
              WHAT WE
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
              >
                BRING TO
              </span>
              <br />
              THE TABLE.
            </h2>
          </div>
          <a
            href="/programs"
            className="hidden md:block font-body text-[10px] tracking-widest text-white/25 hover:text-white transition-colors uppercase border-b border-white/10 pb-1"
          >
            All Programs →
          </a>
        </div>

        {/* 2x2 tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {offers.map((offer, i) => (
            <div
              key={i}
              className="group relative bg-[#0a0a0a] overflow-hidden cursor-pointer"
              style={{ minHeight: "380px" }}
            >
              {/* BG image */}
              <div className="absolute inset-0">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover opacity-25 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
              </div>

              {/* Red left border sweep */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#DA1D3A] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

              {/* Content */}
              <div
                className="relative z-10 p-8 flex flex-col justify-between"
                style={{ minHeight: "380px" }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="font-display text-white/5 group-hover:text-white/10 transition-colors duration-500 leading-none"
                    style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
                  >
                    {offer.number}
                  </span>
                  <span className="font-body text-[9px] tracking-widest text-white/20 border border-white/10 px-2 py-1 uppercase">
                    {offer.tag}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <h3
                    className="font-display text-white leading-none group-hover:text-[#DA1D3A] transition-colors duration-300"
                    style={{ fontSize: "clamp(2rem, 3vw, 3rem)" }}
                  >
                    {offer.title}
                  </h3>
                  <p className="font-body text-sm text-white/35 leading-relaxed max-w-sm">
                    {offer.description}
                  </p>
                  <span className="font-body text-[10px] tracking-widest text-white/15 group-hover:text-[#DA1D3A] transition-colors uppercase mt-2">
                    Learn more →
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
