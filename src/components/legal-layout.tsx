export function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="legal-page"><p className="section-label">Legal</p><h1>{title}</h1><p className="effective">Effective September 19, 2026</p><div className="legal-copy">{children}</div></section>;
}
export function LegalHeading({ children }: { children: React.ReactNode }) { return <h2>{children}</h2>; }
