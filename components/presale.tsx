"use client";
import { useState } from "react";

export function Presale() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (email) setSubmitted(true); };

  return (
    <section id="presale" className="py-24 bg-[#0d1b35] relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,151,58,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-14 space-y-4">
          <span className="section-label">Pre-Order Today</span>
          <div className="gold-rule mx-auto mt-2" />
          <h2 className="text-4xl md:text-5xl font-bold mt-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Everything You Need to Start<br />
            <span className="animate-shimmer">Aging Backwards</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch max-w-3xl mx-auto">
          {/* Package card */}
          <div className="card-glass p-8 flex flex-col">
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#1d7a7a] mb-4" style={{ fontFamily: "var(--font-raleway)" }}>Complete Package</div>
            <div className="flex items-start gap-5 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://galaxy-prod.tlcdn.com/gen/user_35cxGzZba9uxfzJ3oAxqL0bs4ND/1d57229d-ec67-4193-b158-cbac2e425306.png"
                alt="Book Cover"
                style={{ width: 80, height: 120, objectFit: "cover", borderRadius: 2, boxShadow: "0 8px 24px rgba(0,0,0,0.5)" }}
              />
              <div>
                <h3 className="text-xl font-bold text-[#f0ebe0] leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>Younger By Design</h3>
                <p className="text-[#7a9ab8] text-xs mt-1 leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>The Science-Backed Playbook for Reclaiming Your Youth at Any Age</p>
                <div className="flex items-baseline gap-2 mt-3">
                  <span className="text-2xl font-bold text-[#c8973a]" style={{ fontFamily: "var(--font-playfair)" }}>$27.99</span>
                  <span className="text-[10px] text-[#4a6a88] line-through" style={{ fontFamily: "var(--font-raleway)" }}>$34.99</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 mb-6 flex-1">
              {["14 full chapters — 55,000+ words","90-Day Action Plan (bonus)","Full bibliography & citations","Instant digital download at launch","Free updates included"].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="text-[#1d7a7a] text-xs">✓</span>
                  <span className="text-[#7a9ab8] text-xs" style={{ fontFamily: "var(--font-lora)" }}>{item}</span>
                </div>
              ))}
            </div>
            <div className="text-[10px] tracking-[0.12em] uppercase text-center text-[#4a6a88] border-t border-[rgba(200,151,58,0.1)] pt-4" style={{ fontFamily: "var(--font-raleway)" }}>
              Recovery Life Collective LLC
            </div>
          </div>

          {/* Email CTA */}
          <div className="card-glass p-8 flex flex-col justify-between border-[rgba(200,151,58,0.2)]">
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#c8973a] mb-4" style={{ fontFamily: "var(--font-raleway)" }}>Get Early Access</div>
              <h3 className="text-2xl font-bold text-[#f0ebe0] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>Join the Launch List</h3>
              <p className="text-[#7a9ab8] text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-lora)" }}>
                Be the first to know when the book launches. Early subscribers receive the pre-order discount automatically — no code required.
              </p>
            </div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" required className="w-full px-4 py-3 text-sm rounded-sm" />
                <button type="submit" className="btn-gold w-full px-6 py-3.5 rounded-sm text-[12px]">Reserve My Copy — $27.99</button>
                <p className="text-[10px] text-center text-[#4a6a88]" style={{ fontFamily: "var(--font-raleway)" }}>Secure · No charge until launch · Unsubscribe anytime</p>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[rgba(29,122,122,0.2)] border border-[rgba(29,122,122,0.4)] flex items-center justify-center mx-auto">
                  <span className="text-[#1d7a7a] text-xl">✓</span>
                </div>
                <p className="text-[#f0ebe0] font-medium" style={{ fontFamily: "var(--font-playfair)" }}>You&apos;re reserved!</p>
                <p className="text-[#7a9ab8] text-xs" style={{ fontFamily: "var(--font-lora)" }}>We&apos;ll email you at launch with your exclusive pre-order discount.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
