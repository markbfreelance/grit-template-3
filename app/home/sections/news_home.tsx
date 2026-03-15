const news = [
  {
    tag: "Announcement",
    date: "Mar 5, 2026",
    title: "Grit Opens New State-of-the-Art Training Facility",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa.",
    image: "/placeholders/offer1.png",
    index: "001",
  },
  {
    tag: "Program",
    date: "Feb 28, 2026",
    title: "Spring Speed Camp Now Open for Registration",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.",
    image: "/placeholders/offer2.jpg",
    index: "002",
  },
  {
    tag: "Athlete",
    date: "Feb 20, 2026",
    title: "Alumni Spotlight: From Grit to the Pros",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.",
    image: "/placeholders/offer3.jpg",
    index: "003",
  },
  {
    tag: "Training",
    date: "Feb 10, 2026",
    title: "Why Mental Reps Are As Important As Physical Ones",
    excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing.",
    image: "/placeholders/offer4.jpg",
    index: "004",
  },
];

export default function NewsHome() {
  return (
    <section className="w-full bg-[#111111] texture py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#DA1D3A]" />
              <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
                Latest News
              </span>
            </div>
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
            >
              STAY IN
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
              >
                THE LOOP.
              </span>
            </h2>
          </div>
          <a
            href="/news"
            className="hidden md:block font-body text-[10px] tracking-widest text-white/25 hover:text-white transition-colors uppercase border-b border-white/10 pb-1"
          >
            All News →
          </a>
        </div>

        {/* Mobile stacked */}
        <div className="flex flex-col gap-px bg-white/5 lg:hidden">
          {news.map((item, i) => (
            <div
              key={i}
              className="group bg-[#111111] cursor-pointer relative overflow-hidden hover:bg-[#161616] transition-colors duration-300"
            >
              <div
                className="w-full h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-body text-[9px] tracking-widest text-[#DA1D3A] uppercase">
                    {item.tag}
                  </span>
                  <span className="w-px h-2.5 bg-white/10" />
                  <span className="font-body text-[9px] text-white/20">
                    {item.date}
                  </span>
                </div>
                <h3
                  className="font-display text-white leading-tight group-hover:text-[#DA1D3A] transition-colors duration-300"
                  style={{ fontSize: "1.3rem" }}
                >
                  {item.title}
                </h3>
                <p className="font-body text-xs text-white/25 leading-relaxed">
                  {item.excerpt}
                </p>
                <span className="font-body text-[10px] tracking-widest text-white/15 group-hover:text-[#DA1D3A] transition-colors uppercase">
                  Read →
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-[#DA1D3A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Desktop featured + list */}
        <div
          className="hidden lg:grid gap-px bg-white/5"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Featured */}
          <div
            className="group bg-[#111111] cursor-pointer relative overflow-hidden flex flex-col"
            style={{ gridRow: "span 3" }}
          >
            <div
              className="relative overflow-hidden shrink-0"
              style={{ height: "380px" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${news[0].image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#111111] via-[#111111]/20 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="font-display text-white/6 text-6xl leading-none">
                  {news[0].index}
                </span>
              </div>
              <div className="absolute bottom-5 left-5">
                <span className="font-body text-[9px] tracking-widest text-[#DA1D3A] border border-[#DA1D3A]/40 px-3 py-1.5 uppercase bg-[#111111]/60 backdrop-blur-sm">
                  {news[0].tag}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-8 flex-1">
              <span className="font-body text-[11px] text-white/20 tracking-widest">
                {news[0].date}
              </span>
              <h3
                className="font-display text-white leading-tight group-hover:text-[#DA1D3A] transition-colors duration-300"
                style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)" }}
              >
                {news[0].title}
              </h3>
              <p className="font-body text-sm text-white/30 leading-relaxed">
                {news[0].excerpt}
              </p>
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="font-body text-[10px] tracking-widest text-white/15 group-hover:text-[#DA1D3A] transition-colors uppercase">
                  Read more →
                </span>
                <span className="font-display text-white/4 text-3xl">
                  {news[0].index}
                </span>
              </div>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#DA1D3A] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
          </div>

          {/* Side cards */}
          {news.slice(1).map((item, i) => (
            <div
              key={i}
              className="group bg-[#111111] cursor-pointer relative overflow-hidden hover:bg-[#161616] transition-colors duration-300"
            >
              <div
                className="grid grid-cols-[140px_1fr] h-full"
                style={{ minHeight: "160px" }}
              >
                <div className="relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-[#0a0a0a]/30 group-hover:bg-[#DA1D3A]/10 transition-colors duration-500" />
                </div>
                <div className="flex flex-col justify-between p-6 gap-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="font-body text-[9px] tracking-widest text-[#DA1D3A] uppercase">
                        {item.tag}
                      </span>
                      <span className="w-px h-2.5 bg-white/10" />
                      <span className="font-body text-[9px] text-white/20">
                        {item.date}
                      </span>
                    </div>
                    <h3
                      className="font-display text-white leading-tight group-hover:text-[#DA1D3A] transition-colors duration-300"
                      style={{ fontSize: "clamp(1rem, 1.5vw, 1.3rem)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-white/20 leading-relaxed line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-[10px] tracking-widest text-white/15 group-hover:text-[#DA1D3A] transition-colors uppercase">
                      Read →
                    </span>
                    <span className="font-display text-white/4 text-xl">
                      {item.index}
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-[#DA1D3A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
