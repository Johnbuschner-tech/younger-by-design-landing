export function Footer() {
  return (
    <footer className="border-t border-[rgba(200,151,58,0.12)] bg-[#0a1628] py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#c8973a]" style={{ fontFamily: "var(--font-raleway)" }}>Recovery Life Collective LLC</div>
            <div className="text-xl font-bold text-[#f0ebe0]" style={{ fontFamily: "var(--font-playfair)" }}>Younger By Design</div>
            <p className="text-[#4a6a88] text-xs leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>The science-backed longevity playbook for everyone who refuses to accept aging as inevitable.</p>
          </div>
          <div className="space-y-3">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#c8973a] mb-2" style={{ fontFamily: "var(--font-raleway)" }}>Quick Links</div>
            {[["What's Inside","chapters"],["About the Author","author"],["The 90-Day Bonus","bonus"],["Pre-Order","presale"]].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="block text-[#7a9ab8] text-xs hover:text-[#c8973a] transition-colors duration-200" style={{ fontFamily: "var(--font-lora)" }}>{label}</a>
            ))}
          </div>
          <div className="space-y-3">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#c8973a] mb-2" style={{ fontFamily: "var(--font-raleway)" }}>Contact</div>
            <div className="space-y-2 text-xs text-[#7a9ab8]" style={{ fontFamily: "var(--font-lora)" }}>
              <p>John Buschner, MA, CPRS, CRSP</p>
              <a href="mailto:John@recoverylifecollective.com" className="block hover:text-[#c8973a] transition-colors">John@recoverylifecollective.com</a>
              <a href="https://www.recoverylifecollective.com" target="_blank" rel="noopener noreferrer" className="block hover:text-[#c8973a] transition-colors">www.recoverylifecollective.com</a>
              <p className="text-[#3a5a78]">New Jersey &amp; Eastern Pennsylvania</p>
            </div>
          </div>
        </div>
        <div className="border-t border-[rgba(200,151,58,0.08)] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-[#3a5a78] tracking-wider" style={{ fontFamily: "var(--font-raleway)" }}>© 2025 Recovery Life Collective LLC. All rights reserved.</p>
          <p className="text-[10px] text-[#3a5a78]" style={{ fontFamily: "var(--font-raleway)" }}>Information in this book is for educational purposes and does not constitute medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
