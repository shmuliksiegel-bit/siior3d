import Link from "next/link";
import { PrivacyFooterControls } from "@/components/cookie-consent";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-intro"><p className="footer-mark">SIIOR <span>3D</span></p><p>Animation Studios · Los Angeles</p></div>
      <div className="footer-links"><Link href="/">Home</Link><Link href="/projects">Projects</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></div>
      <div className="footer-legal"><Link href="/legal/privacy">Privacy</Link><Link href="/legal/terms">Terms</Link><Link href="/legal/cookies">Cookies</Link><Link href="/legal/accessibility">Accessibility</Link><PrivacyFooterControls /></div>
      <p className="copyright">© {new Date().getFullYear()} Social Academics Inc. SIIOR 3D is a DBA of Social Academics Inc.</p>
    </footer>
  );
}
