const chapters = [
  { num: "01", title: "The Birthday Lie",       sub: "Epigenetic Clocks & Biological Age",     desc: "Your birth year doesn't determine your fate. Discover the 12 Hallmarks of Aging and why your biological age can be decades younger than your birth certificate." },
  { num: "02", title: "Zombie Cells",            sub: "Senolytics & Cellular Cleanup",          desc: "Senescent cells silently drive inflammation and disease. Learn how senolytics like fisetin and quercetin can clear them — and what that means for your longevity." },
  { num: "03", title: "The Longevity Kitchen",   sub: "Blue Zones & Precision Nutrition",       desc: "From the PREDIMED study to Blue Zone superfoods — a science-backed eating framework that fights disease, not just calories." },
  { num: "04", title: "The Fasting Factor",      sub: "Autophagy & Cellular Renewal",           desc: "The Nobel Prize-winning discovery that changed everything about eating. How time-restricted eating triggers your cells' self-cleaning system." },
  { num: "05", title: "The Supplement Stack",    sub: "NMN, Resveratrol & Beyond",              desc: "NMN, NR, omega-3s, urolithin A — which supplements actually have human trial evidence, and exactly how to take them." },
  { num: "06", title: "Zone 2 & Your VO₂ Max",  sub: "The Fitness Biomarkers That Matter",     desc: "JAMA data shows VO₂ max predicts longevity better than almost any other biomarker. The exact training protocol to raise it." },
  { num: "07", title: "Muscle as Medicine",      sub: "Sarcopenia, Myokines & Grip Strength",   desc: "Muscle mass is your largest endocrine organ. Discover how it produces BDNF, myokines, and the hormones that keep your brain and body young." },
  { num: "08", title: "The Sleep Architecture",  sub: "Glymphatic System & HGH",                desc: "Your brain literally cleans itself at night. The 8 science-backed sleep hacks that protect against cognitive decline and boost growth hormone." },
  { num: "09", title: "The Mindset Molecule",    sub: "Becca Levy's 7.5 Extra Years",           desc: "Harvard research shows a positive attitude about aging adds an average of 7.5 years to your life. The neuroscience of perception and telomere length." },
  { num: "10", title: "Heat, Cold & Hormesis",   sub: "Sauna & Cold Exposure Protocols",        desc: "Finnish studies show regular sauna use cuts cardiovascular mortality by 65%. The exact temperature and frequency protocols that trigger hormetic benefits." },
  { num: "11", title: "Your Inner Ecosystem",    sub: "Gut Microbiome & the 30-Plant Rule",     desc: "Stanford's Cell study proves fermented foods reshape your microbiome faster than fiber alone. The 30-plant-a-week framework for gut diversity." },
  { num: "12", title: "Connection is Medicine",  sub: "The Harvard 85-Year Study",              desc: "The longest human study ever conducted reveals: close relationships are the single greatest predictor of health and happiness in later life." },
];

export function Chapters() {
  return (
    <section id="chapters" className="py-24 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center space-y-4">
          <span className="section-label">What&apos;s Inside</span>
          <div className="gold-rule mx-auto mt-2" />
          <h2 className="text-4xl md:text-5xl font-bold mt-6" style={{ fontFamily: "var(--font-playfair)" }}>
            14 Chapters. One Complete<br />
            <span className="animate-shimmer">Science Playbook.</span>
          </h2>
          <p className="text-[#7a9ab8] max-w-xl mx-auto mt-4 text-base leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>
            Every chapter distills the latest peer-reviewed research into clear, actionable protocols — no PhD required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((ch) => (
            <div key={ch.num} className="chapter-card card-glass p-6 group cursor-default">
              <div className="flex items-start gap-4">
                <span className="text-[28px] font-bold text-[rgba(200,151,58,0.2)] leading-none shrink-0 group-hover:text-[rgba(200,151,58,0.5)] transition-colors duration-300" style={{ fontFamily: "var(--font-playfair)" }}>
                  {ch.num}
                </span>
                <div>
                  <h3 className="text-[#f0ebe0] text-base font-bold leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>{ch.title}</h3>
                  <p className="text-[#c8973a] text-[10px] tracking-[0.14em] uppercase mt-0.5 mb-2" style={{ fontFamily: "var(--font-raleway)" }}>{ch.sub}</p>
                  <p className="text-[#7a9ab8] text-xs leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>{ch.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#7a9ab8] text-sm" style={{ fontFamily: "var(--font-lora)" }}>
            <em>Plus 2 additional chapters on skincare science &amp; emerging longevity technologies — including cellular reprogramming, GLP-1, and biological age testing.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
