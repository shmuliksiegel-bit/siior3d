import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div>
        <p className="footer-mark">SIIOR 3D</p>
        <p>Animation Studios · Los Angeles</p>
      </div>
      <div className="footer-links">
        <Link href="/work">Work</Link>
        <Link href="/studio">Studio</Link>
        <Link href="/contact">Contact</Link>
        <a href="https://social-academics.com" target="_blank" rel="noopener noreferrer">Social Academics</a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Social Academics Inc. SIIOR 3D is a DBA of Social Academics Inc.</p>
    </footer>
  );
}

