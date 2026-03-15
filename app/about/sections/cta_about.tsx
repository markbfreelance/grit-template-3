export default function CtaAbout() {
  return (
    <section className="w-full bg-[#111111] texture border-t border-[#DA1D3A]/20 relative overflow-hidden">
      {/* HUD corners */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#DA1D3A]/20" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#DA1D3A]/20" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#DA1D3A]/20" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#DA1D3A]/20" />

      {/* Ghost text bg */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="font-display text-white/2 leading-none whitespace-nowrap"
          style={{ fontSize: "clamp(6rem, 15vw, 15rem)" }}
        >
          REGISTER NOW
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#DA1D3A]" />
              <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
                Join The Program
              </span>
            </div>
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
            >
              READY TO
              <br />
              START YOUR
              <br />
              <span className="text-[#DA1D3A] glow-text-red">JOURNEY?</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-5">
            <p className="font-body text-sm text-white/30 leading-relaxed">
              Join hundreds of athletes already training with Grit. Spring 2026
              registration is open now.
            </p>
            <a
              href="/register"
              className="font-body text-xs font-semibold tracking-widest text-white bg-[#DA1D3A] px-8 py-4 text-center hover:bg-[#b01730] transition-all duration-200 uppercase glow-red"
            >
              Register Now
            </a>
            <a
              href="/programs"
              className="font-body text-xs tracking-widest text-white/25 hover:text-white transition-colors uppercase border-b border-white/10 pb-1 self-start"
            >
              View Programs →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
