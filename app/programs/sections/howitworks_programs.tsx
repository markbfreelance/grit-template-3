const steps = [
  {
    number: "01",
    title: "CHOOSE YOUR PROGRAM",
    description:
      "Browse our programs and find the one that fits your age group, goals, and schedule.",
  },
  {
    number: "02",
    title: "REGISTER & ENROLL",
    description:
      "Complete your registration online. Our team will confirm your spot within 24 hours.",
  },
  {
    number: "03",
    title: "GET ASSESSED",
    description:
      "Every athlete starts with a baseline assessment so we can track progress from day one.",
  },
  {
    number: "04",
    title: "TRAIN & DOMINATE",
    description:
      "Show up, put in the work, and watch your game transform under our elite coaching staff.",
  },
];

export default function HowItWorksPrograms() {
  return (
    <section className="w-full bg-[#111111] texture py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Label bar */}
        <div className="border-y border-white/5 -mx-8 px-8 py-3 flex items-center gap-4 mb-16">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DA1D3A] animate-pulse" />
          <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
            How It Works
          </span>
          <span className="flex-1 h-px bg-white/5" />
          <span className="font-body text-[9px] tracking-widest text-white/15 uppercase">
            4 Steps
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative bg-[#111111] hover:bg-[#161616] transition-colors duration-500 p-10 flex flex-col gap-6 cursor-pointer overflow-hidden"
            >
              {/* Red left border */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#DA1D3A] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

              {/* Ghost number */}
              <span
                className="font-display text-white/4 group-hover:text-white/[0.07] leading-none transition-colors duration-500"
                style={{ fontSize: "clamp(4rem, 6vw, 6rem)" }}
              >
                {step.number}
              </span>

              <div className="w-6 h-px bg-[#DA1D3A]/40" />

              <h3 className="font-display text-white group-hover:text-[#DA1D3A] text-lg tracking-wide leading-tight transition-colors duration-300">
                {step.title}
              </h3>

              <p className="font-body text-xs text-white/25 leading-relaxed">
                {step.description}
              </p>

              {/* HUD corner */}
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#DA1D3A]/0 group-hover:border-[#DA1D3A]/40 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
