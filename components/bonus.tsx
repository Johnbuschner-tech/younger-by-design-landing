const phases = [
  { phase: "Phase 1", title: "Foundation",    weeks: "Weeks 1–4",  color: "#1d7a7a", items: ["Lab baseline & biological age testing", "Sleep architecture reset", "Longevity nutrition framework", "Zone 2 cardio protocol begins"] },
  { phase: "Phase 2", title: "Optimization",  weeks: "Weeks 5–8",  color: "#c8973a", items: ["Supplement stack introduction", "Fasting protocol (16:8 TRE)", "Strength training progression", "Sauna & cold exposure"] },
  { phase: "Phase 3", title: "Transformation",weeks: "Weeks 9–12", color: "#5a9a6a", items: ["Senolytic protocol cycle", "VO₂ max testing & Norwegian 4×4", "Gut microbiome optimization", "Full biological age re-test"] },
];

export function Bonus() {
  return (
    <section id="bonus" className="py-24 bg-[#0d1b35] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{ background: "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(200,151,58,0.4) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div>
              <span className="section-label">Exclusive Bonus</span>
              <div className="gold-rule mt-2" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              The 90-Day<br /><span className="animate-shimmer">Action Plan</span>
            </h2>
            <p className="text-[#7a9ab8] text-base leading-relaxed max-w-md" style={{ fontFamily: "var(--font-lora)" }}>
              Every pre-order includes the complete 90-Day <em>Younger By Design</em> Action Plan — a week-by-week protocol that maps everything in the book to a daily checklist you can actually follow.
            </p>
            <div className="space-y-3">
              {["Daily check-in prompts & habit trackers","Weekly biometric assessment milestones","Phase-by-phase supplement introduction schedule","Lab test timing recommendations"].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full border border-[#c8973a] flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8973a]" />
                  </div>
                  <span className="text-[#c8c2b2] text-sm" style={{ fontFamily: "var(--font-lora)" }}>{item}</span>
                </div>
              ))}
            </div>
            <div className="inline-block text-[10px] tracking-[0.2em] uppercase border border-[rgba(200,151,58,0.3)] px-4 py-2 text-[#c8973a]" style={{ fontFamily: "var(--font-raleway)" }}>
              Valued at $19 — Free with every pre-order
            </div>
          </div>

          <div className="space-y-4">
            {phases.map((p) => (
              <div key={p.phase} className="card-glass p-5 hover:border-[rgba(200,151,58,0.35)] transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center text-[10px] font-bold tracking-wider" style={{ background: `${p.color}22`, border: `1px solid ${p.color}44`, color: p.color, fontFamily: "var(--font-raleway)" }}>
                    {p.phase.replace("Phase ", "P")}
                  </div>
                  <div>
                    <div className="text-[#f0ebe0] font-bold text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{p.title}</div>
                    <div className="text-[10px] tracking-wider uppercase" style={{ color: p.color, fontFamily: "var(--font-raleway)" }}>{p.weeks}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {p.items.map((item, i) => (
                    <div key={i} className="text-[#7a9ab8] text-xs flex items-center gap-1.5" style={{ fontFamily: "var(--font-lora)" }}>
                      <span style={{ color: p.color, fontSize: "8px" }}>▶</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
