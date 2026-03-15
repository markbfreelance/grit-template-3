export default function MapContact() {
  return (
    <section className="w-full bg-[#0a0a0a] texture">
      {/* Label bar */}
      <div className="border-y border-white/5 px-6 md:px-8 py-3 flex items-center gap-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#DA1D3A] animate-pulse" />
        <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
          Find Us
        </span>
        <span className="flex-1 h-px bg-white/5" />
        <span className="font-body text-[9px] tracking-widest text-white/15 uppercase">
          123 Grit Ave, Performance City
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Address panel */}
        <div className="lg:col-span-4 flex flex-col justify-center px-6 md:px-8 lg:px-12 py-16 gap-8 border-b lg:border-b-0 lg:border-r border-white/5">
          <h3
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(2rem, 3vw, 3rem)" }}
          >
            VISIT OUR
            <br />
            <span className="text-[#DA1D3A] glow-text-red">FACILITY.</span>
          </h3>

          <div className="flex flex-col gap-6">
            {[
              {
                label: "Address",
                lines: ["123 Grit Avenue", "Performance City, ST 00000"],
              },
              {
                label: "Hours",
                lines: ["Mon–Fri: 6am–9pm", "Sat: 7am–5pm", "Sun: Closed"],
              },
              {
                label: "Contact",
                lines: ["+1 (555) 000-0000", "info@gritperformance.com"],
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-[#DA1D3A] text-xs">◆</span>
                  <span className="font-body text-[9px] tracking-widest text-[#DA1D3A]/60 uppercase">
                    {item.label}
                  </span>
                </div>
                {item.lines.map((line, j) => (
                  <span
                    key={j}
                    className="font-body text-xs text-white/25 pl-5"
                  >
                    {line}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div
          className="lg:col-span-8 relative p-8"
          style={{ minHeight: "400px" }}
        >
          {/* HUD corners */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#DA1D3A]/30 z-10" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#DA1D3A]/30 z-10" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#DA1D3A]/30 z-10" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#DA1D3A]/30 z-10" />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043099761!5m2!1sen!2s"
            width="100%"
            height="100%"
            className="min-h-100"
            style={{
              border: 0,
              filter: "contrast(0.8)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
