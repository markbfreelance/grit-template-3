"use client";

import { useState } from "react";

const subjects = [
  "General Inquiry",
  "Program Registration",
  "Team Programs",
  "Merch Order",
  "Media & Press",
  "Other",
];

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  return (
    <section id="form" className="w-full bg-[#111111] texture">
      {/* Label bar */}
      <div className="border-y border-white/5 px-6 md:px-8 py-3 flex items-center gap-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#DA1D3A] animate-pulse" />
        <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
          Send A Message
        </span>
        <span className="flex-1 h-px bg-white/5" />
        <span className="font-body text-[9px] tracking-widest text-white/15 uppercase">
          Response within 24hrs
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left — terminal info panel */}
        <div className="lg:col-span-4 flex flex-col justify-between px-6 md:px-8 lg:px-12 py-16 gap-12 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="flex flex-col gap-6">
            {/* Terminal header */}
            <div className="border border-white/5 bg-[#0a0a0a] p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-[#DA1D3A]/60" />
                <span className="font-body text-[9px] tracking-widest text-white/15 ml-2 uppercase">
                  signal.contact
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-body text-[9px] text-[#DA1D3A]/60">
                    $
                  </span>
                  <span className="font-body text-[9px] text-white/30">
                    init contact_form
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-body text-[9px] text-[#DA1D3A]/60">
                    →
                  </span>
                  <span className="font-body text-[9px] text-white/20">
                    Form ready. Awaiting input.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-body text-[9px] text-[#DA1D3A]/60">
                    $
                  </span>
                  <span className="font-body text-[9px] text-white/30 cursor-blink">
                    _
                  </span>
                </div>
              </div>
            </div>

            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              WE'D LOVE
              <br />
              TO HEAR
              <br />
              <span className="text-[#DA1D3A] glow-text-red">FROM YOU.</span>
            </h2>

            <p className="font-body text-sm text-white/30 leading-relaxed">
              Fill out the form and a member of our team will get back to you
              within 24 hours.
            </p>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-4 border-t border-white/5 pt-8">
            {[
              { label: "Response Time", value: "Within 24hrs" },
              { label: "Office Hours", value: "Mon–Sat 8am–6pm" },
              { label: "Location", value: "Performance City, USA" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-body text-[9px] tracking-widest text-[#DA1D3A]/40 uppercase">
                  {item.label}
                </span>
                <span className="font-body text-xs text-white/25">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-8 px-6 md:px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="font-body text-[9px] tracking-widest text-white/25 uppercase">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="John Doe"
                className="bg-[#0a0a0a] border border-white/10 text-white text-sm px-4 py-3 font-body placeholder:text-white/15 focus:outline-none focus:border-[#DA1D3A]/50 transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-body text-[9px] tracking-widest text-white/25 uppercase">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="john@email.com"
                className="bg-[#0a0a0a] border border-white/10 text-white text-sm px-4 py-3 font-body placeholder:text-white/15 focus:outline-none focus:border-[#DA1D3A]/50 transition-colors duration-200"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="font-body text-[9px] tracking-widest text-white/25 uppercase">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+1 (555) 000-0000"
                className="bg-[#0a0a0a] border border-white/10 text-white text-sm px-4 py-3 font-body placeholder:text-white/15 focus:outline-none focus:border-[#DA1D3A]/50 transition-colors duration-200"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="font-body text-[9px] tracking-widest text-white/25 uppercase">
                Subject *
              </label>
              <select
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="bg-[#0a0a0a] border border-white/10 text-white/40 text-sm px-4 py-3 font-body focus:outline-none focus:border-[#DA1D3A]/50 transition-colors duration-200 cursor-pointer"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="sm:col-span-2 flex flex-col gap-2">
              <label className="font-body text-[9px] tracking-widest text-white/25 uppercase">
                Message *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell us how we can help..."
                rows={6}
                className="bg-[#0a0a0a] border border-white/10 text-white text-sm px-4 py-3 font-body placeholder:text-white/15 focus:outline-none focus:border-[#DA1D3A]/50 transition-colors duration-200 resize-none"
              />
            </div>

            {/* Submit */}
            <div className="sm:col-span-2">
              <button
                type="button"
                className="font-body text-xs font-semibold tracking-widest text-white bg-[#DA1D3A] px-10 py-4 hover:bg-[#b01730] transition-all duration-200 uppercase glow-red"
              >
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
