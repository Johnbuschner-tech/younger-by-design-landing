export function StatsBar() {
  const stats = [
    { number: "14",  label: "Science-backed chapters" },
    { number: "90",  label: "Day transformation plan" },
    { number: "60+", label: "Peer-reviewed studies cited" },
    { number: "12",  label: "Hallmarks of aging addressed" },
  ];
  return (
    <section className="relative border-y border-[rgba(200,151,58,0.15)] bg-[rgba(13,27,53,0.8)] py-10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "repeating-linear-gradient(90deg, #c8973a 0px, #c8973a 1px, transparent 1px, transparent 80px)" }} />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold animate-shimmer" style={{ fontFamily: "var(--font-playfair)" }}>{s.number}</div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#7a9ab8] mt-1" style={{ fontFamily: "var(--font-raleway)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
