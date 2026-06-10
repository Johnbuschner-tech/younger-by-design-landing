export function Author() {
  return (
    <section id="author" className="py-24 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(29,122,122,0.4) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Photo */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Decorative outer glow ring */}
              <div className="absolute -inset-6 rounded-full opacity-15 blur-lg" style={{ background: "conic-gradient(from 0deg, #c8973a, #1d7a7a, #c8973a)" }} />
              {/* Dark bg ring */}
              <div className="absolute -inset-3 rounded-full bg-[#0a1628]" />
              {/* Gold border ring */}
              <div className="absolute -inset-1 rounded-full" style={{ background: "linear-gradient(135deg, rgba(200,151,58,0.5), rgba(29,122,122,0.3), rgba(200,151,58,0.5))" }} />

              {/* Photo */}
              <div className="relative rounded-full overflow-hidden bg-[#1a2c4e]" style={{ width: 268, height: 268 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://galaxy-prod.tlcdn.com/view/user_35cxGzZba9uxfzJ3oAxqL0bs4ND/ae343edd3cf743a99520d4a7c4690dfc.png"
                  alt="John Buschner"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                />
                <div className="absolute inset-0 rounded-full pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(10,22,40,0.3) 100%)" }} />
              </div>

              {/* Credentials badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 card-glass px-5 py-2 text-center whitespace-nowrap">
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#c8973a]" style={{ fontFamily: "var(--font-raleway)" }}>
                  MA · CPRS · CRSP
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Bio */}
          <div className="space-y-6">
            <div>
              <span className="section-label">About the Author</span>
              <div className="gold-rule mt-2" />
            </div>

            <h2 className="text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
              John Buschner
            </h2>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#1d7a7a]" style={{ fontFamily: "var(--font-raleway)" }}>
              Founder · Recovery Life Collective LLC
            </div>

            <div className="space-y-4 text-[#7a9ab8] text-sm leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>
              <p>
                John Buschner spent years at the intersection of behavioral health and human potential — watching people reclaim their lives from addiction. What he observed changed how he thought about aging: the same cellular pathways that drive dependency and disease are the ones longevity science targets.
              </p>
              <p>
                As a Certified Peer Recovery Specialist and founder of Recovery Life Collective LLC, John brings a unique lens to the science of aging — one rooted in transformation, resilience, and the biology of change.
              </p>
              <p>
                <em className="text-[#c8c2b2]">&ldquo;My clients in recovery taught me that the body has an extraordinary capacity for renewal at any age. This book is the science that proves it.&rdquo;</em>
              </p>
            </div>

            <div className="flex flex-col gap-2 text-xs" style={{ fontFamily: "var(--font-raleway)" }}>
              {[
                ["Credential",    "MA, CPRS, CRSP"],
                ["Specialty",     "Addiction & Behavioral Recovery"],
                ["Organization",  "Recovery Life Collective LLC"],
                ["Website",       "www.recoverylifecollective.com"],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3">
                  <span className="text-[#c8973a] tracking-wider uppercase text-[10px] w-28 shrink-0 pt-0.5">{label}</span>
                  <span className="text-[#c8c2b2]">{value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
