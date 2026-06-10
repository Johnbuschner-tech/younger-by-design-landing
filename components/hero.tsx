"use client";
import { useState } from "react";

export function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      {/* Navy blue background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1e3a] to-[#0e2045]" />
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(ellipse 55% 50% at 75% 50%, rgba(26,44,78,0.9) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse 40% 60% at 15% 60%, rgba(200,151,58,0.15) 0%, transparent 55%)" }} />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(135deg, #c8973a 0px, #c8973a 1px, transparent 1px, transparent 60px)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Text */}
          <div className="space-y-8">
            <div className="space-y-3 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
              <span className="section-label">Now Available for Pre-Order</span>
              <div className="gold-rule mt-2" />
            </div>

            <div className="animate-fade-up" style={{ animationDelay: "0.25s", opacity: 0 }}>
              <h1 className="text-5xl md:text-6xl xl:text-7xl leading-[1.05] font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                Younger
                <br />
                <span className="animate-shimmer">By Design</span>
              </h1>
              <p className="mt-4 text-[#7a9ab8] text-base md:text-lg leading-relaxed max-w-md" style={{ fontFamily: "var(--font-lora)" }}>
                The Science-Backed Playbook for<br />
                <em>Reclaiming Your Youth at Any Age</em>
              </p>
            </div>

            <div className="text-[#c8c2b2] text-sm leading-relaxed max-w-sm border-l-2 border-[rgba(200,151,58,0.3)] pl-4 animate-fade-up" style={{ fontFamily: "var(--font-lora)", animationDelay: "0.4s", opacity: 0 }}>
              <em>&ldquo;The most exciting discovery of the 21st century is that you have far more control over how you age than anyone ever told you.&rdquo;</em>
              <div className="mt-2 text-[11px] tracking-widest uppercase text-[#c8973a]" style={{ fontFamily: "var(--font-raleway)" }}>
                — John Buschner, MA, CPRS, CRSP
              </div>
            </div>

            {/* Email form */}
            <div className="animate-fade-up" style={{ animationDelay: "0.55s", opacity: 0 }}>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <p className="text-[11px] tracking-[0.18em] uppercase text-[#7a9ab8]" style={{ fontFamily: "var(--font-raleway)" }}>
                    Join the early access list — get notified at launch
                  </p>
                  <div className="flex gap-0 max-w-sm">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" required className="flex-1 px-4 py-3 text-sm rounded-l-sm rounded-r-none border-r-0" />
                    <button type="submit" className="btn-gold px-6 py-3 rounded-l-none rounded-r-sm text-[11px] whitespace-nowrap">Notify Me</button>
                  </div>
                  <p className="text-[10px] text-[#4a6a88]" style={{ fontFamily: "var(--font-raleway)" }}>
                    No spam. Unsubscribe anytime. Launch price: <strong className="text-[#c8973a]">$27.99</strong>
                  </p>
                </form>
              ) : (
                <div className="card-glass p-5 max-w-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[rgba(29,122,122,0.3)] flex items-center justify-center">
                      <span className="text-[#1d7a7a] text-lg">✓</span>
                    </div>
                    <div>
                      <p className="text-[#f0ebe0] text-sm font-medium" style={{ fontFamily: "var(--font-raleway)" }}>You&apos;re on the list!</p>
                      <p className="text-[#7a9ab8] text-xs">We&apos;ll notify you when the book launches.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.7s", opacity: 0 }}>
              {["14 Chapters", "55,000+ Words", "90-Day Plan Included", "Peer-Reviewed Science"].map((b) => (
                <span key={b} className="text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border border-[rgba(200,151,58,0.2)] text-[#7a9ab8] rounded-sm" style={{ fontFamily: "var(--font-raleway)" }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — Book cover */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <div className="relative animate-float">
              {/* Glow */}
              <div className="absolute -inset-8 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(ellipse, rgba(26,44,78,0.8) 0%, rgba(200,151,58,0.2) 60%, transparent 80%)" }} />
              {/* Shadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 blur-xl opacity-60" style={{ background: "rgba(200,151,58,0.2)" }} />
              {/* Cover */}
              <div className="relative" style={{ filter: "drop-shadow(0 32px 48px rgba(0,0,0,0.8))" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://galaxy-prod.tlcdn.com/gen/user_35cxGzZba9uxfzJ3oAxqL0bs4ND/1d57229d-ec67-4193-b158-cbac2e425306.png"
                  alt="Younger By Design — Book Cover"
                  width={340}
                  height={510}
                  className="rounded-sm"
                  style={{ width: 340, height: "auto" }}
                />
                <div className="absolute inset-0 rounded-sm pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 40%, rgba(200,151,58,0.06) 100%)" }} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
