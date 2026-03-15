"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do I register my athlete?",
    a: "Registration is done online through our website. Click the Register button, select your program and age group, and complete the enrollment form. A confirmation email will follow within 24 hours.",
  },
  {
    q: "What age groups do you offer programs for?",
    a: "We offer programs for athletes from Kindergarten through 18U across four divisions: Little Grinders (K-6U), Future Elite (8U-10U), Developing Elite (12U-14U), and Grit Elite (16U-18U).",
  },
  {
    q: "Do you offer team training packages?",
    a: "Yes. We offer customized team training packages for club and school teams. Contact us directly for pricing and availability.",
  },
  {
    q: "Where are you located?",
    a: "Our main facility is located at 123 Grit Avenue, Performance City. We also offer select programs at partner facilities — check the specific program page for location details.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer full refunds up to 7 days before a program start date. After that, credits toward future programs can be issued. Contact us directly to discuss your situation.",
  },
  {
    q: "How do I order team merch?",
    a: "For bulk team orders with custom branding, reach out via our contact form and select 'Merch Order' as your subject. We'll get back to you with pricing and turnaround time.",
  },
];

export default function FaqContact() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#0a0a0a] texture py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between border-b border-white/5 pb-8 mb-0">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#DA1D3A]" />
              <span className="font-body text-[10px] tracking-[0.4em] text-[#DA1D3A] uppercase">
                FAQ
              </span>
            </div>
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              FREQUENTLY
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
              >
                ASKED.
              </span>
            </h2>
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="flex flex-col divide-y divide-white/5">
          {faqs.map((faq, i) => (
            <div key={i} className="group">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full grid grid-cols-12 items-center py-6 text-left cursor-pointer hover:bg-[#111111] transition-colors duration-200 px-4 -mx-4 relative"
              >
                {/* Red left border */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-0.5 bg-[#DA1D3A] transition-transform duration-300 ${open === i ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"} origin-bottom`}
                />

                {/* Index */}
                <span className="col-span-1 font-display text-white/10 text-sm">
                  0{i + 1}
                </span>

                {/* Question */}
                <span
                  className={`col-span-10 font-display text-sm tracking-wide transition-colors duration-200 ${
                    open === i
                      ? "text-[#DA1D3A]"
                      : "text-white/50 group-hover:text-white"
                  }`}
                >
                  {faq.q}
                </span>

                {/* Toggle */}
                <span
                  className={`col-span-1 flex justify-end font-display text-white/20 text-xl transition-all duration-300 ${
                    open === i ? "rotate-45 text-[#DA1D3A]" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-48 pb-6" : "max-h-0"
                }`}
              >
                <div className="grid grid-cols-12 px-4 -mx-4">
                  <div className="col-span-1" />
                  <p className="col-span-10 font-body text-sm text-white/25 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
