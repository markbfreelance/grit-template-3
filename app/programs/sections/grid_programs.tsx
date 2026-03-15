import Image from "next/image";

const programs = [
  {
    number: "01",
    title: "SPEED & AGILITY",
    tag: "All Ages",
    duration: "8 Weeks",
    sessions: "3x / Week",
    description:
      "Build explosive first-step quickness, lateral speed, and elite agility through proven drills and progressive overload.",
    image: "/placeholders/offer1.png",
    featured: true,
  },
  {
    number: "02",
    title: "STRENGTH & POWER",
    tag: "14U+",
    duration: "10 Weeks",
    sessions: "4x / Week",
    description:
      "Science-backed strength programming designed to build functional power without sacrificing athleticism.",
    image: "/placeholders/offer2.jpg",
    featured: false,
  },
  {
    number: "03",
    title: "MENTAL PERFORMANCE",
    tag: "All Ages",
    duration: "6 Weeks",
    sessions: "2x / Week",
    description:
      "Train your mind like you train your body. Focus, confidence, and composure under pressure.",
    image: "/placeholders/offer3.jpg",
    featured: false,
  },
  {
    number: "04",
    title: "ELITE TEAM CAMP",
    tag: "Teams",
    duration: "5 Days",
    sessions: "Intensive",
    description:
      "A full-immersion team camp built around chemistry, communication, and competitive excellence.",
    image: "/placeholders/offer4.jpg",
    featured: false,
  },
  {
    number: "05",
    title: "SKILLS & TECHNIQUE",
    tag: "All Ages",
    duration: "8 Weeks",
    sessions: "3x / Week",
    description:
      "Position-specific skills work focused on technique refinement and game-speed execution.",
    image: "/placeholders/offer1.png",
    featured: false,
  },
  {
    number: "06",
    title: "YEAR-ROUND ELITE",
    tag: "16U+",
    duration: "12 Months",
    sessions: "5x / Week",
    description:
      "Our flagship program. Full-year development across speed, strength, skills, and mental performance.",
    image: "/placeholders/offer2.jpg",
    featured: false,
  },
];

export default function GridPrograms() {
  const featured = programs[0];
  const rest = programs.slice(1);

  return (
    <section className="w-full bg-[#0a0a0a] texture py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-end justify-between border-b border-white/5 pb-8 mb-0">
          <div className="flex items-center gap-4">
            <div className="w-6 h-px bg-[#DA1D3A]" />
            <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
              All Programs
            </span>
          </div>
          <span className="font-body text-[9px] tracking-widest text-white/15 uppercase">
            {programs.length} Programs Available
          </span>
        </div>

        {/* Featured */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/5">
          <div className="relative h-100 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
            <div className="absolute inset-0 bg-[#DA1D3A]/5" />

            {/* HUD corners */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#DA1D3A]/30" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#DA1D3A]/30" />

            {/* Featured stamp */}
            <div className="absolute top-6 right-6 border border-[#DA1D3A]/40 bg-[#0a0a0a]/80 backdrop-blur-sm px-3 py-1.5">
              <span className="font-body text-[9px] tracking-widest text-[#DA1D3A] uppercase">
                Featured
              </span>
            </div>

            {/* Ghost number */}
            <div className="absolute bottom-6 left-6">
              <span
                className="font-display text-white/6 leading-none"
                style={{ fontSize: "clamp(5rem, 10vw, 9rem)" }}
              >
                {featured.number}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between px-8 lg:px-12 py-12 gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="font-body text-[9px] tracking-widest text-[#DA1D3A] border border-[#DA1D3A]/30 px-2 py-1 uppercase">
                  {featured.tag}
                </span>
                <span className="font-body text-[9px] text-white/20">
                  {featured.duration}
                </span>
                <span className="w-px h-3 bg-white/10" />
                <span className="font-body text-[9px] text-white/20">
                  {featured.sessions}
                </span>
              </div>

              <h3
                className="font-display text-white leading-none"
                style={{ fontSize: "clamp(2.5rem, 4vw, 4.5rem)" }}
              >
                {featured.title}
              </h3>

              <p className="font-body text-sm text-white/30 leading-relaxed">
                {featured.description}
              </p>
            </div>
            <a
              href="/register"
              className="font-body text-xs font-semibold tracking-widest text-white bg-[#DA1D3A] px-8 py-4 text-center hover:bg-[#b01730] transition-all duration-200 uppercase glow-red self-start"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Rest — list rows */}
        <div className="flex flex-col">
          {rest.map((program, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 md:grid-cols-12 border-b border-white/5 hover:bg-[#111111] transition-colors duration-300 cursor-pointer relative"
            >
              {/* Red left border */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#DA1D3A] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

              {/* Number */}
              <div className="md:col-span-1 flex items-center py-8 pl-4">
                <span className="font-display text-white/10 group-hover:text-white/20 transition-colors duration-300 text-3xl">
                  {program.number}
                </span>
              </div>

              {/* Image */}
              <div className="md:col-span-2 flex items-center py-4">
                <div
                  className="w-full h-20 bg-cover bg-center opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${program.image})` }}
                />
              </div>

              {/* Title */}
              <div className="md:col-span-3 flex items-center px-8 py-4">
                <h3
                  className="font-display text-white leading-none group-hover:text-[#DA1D3A] transition-colors duration-300"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}
                >
                  {program.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-4 flex items-center py-4">
                <p className="font-body text-sm text-white/25 leading-relaxed line-clamp-2">
                  {program.description}
                </p>
              </div>

              {/* Meta */}
              <div className="md:col-span-2 flex items-center justify-end gap-4 py-4 pr-4">
                <div className="hidden lg:flex flex-col items-end gap-1">
                  <span className="font-body text-[9px] tracking-widest text-white/20 uppercase">
                    {program.duration}
                  </span>
                  <span className="font-body text-[9px] tracking-widest text-[#DA1D3A]/60 uppercase">
                    {program.tag}
                  </span>
                </div>
                <span className="font-body text-white/15 group-hover:text-[#DA1D3A] transition-colors duration-300">
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
