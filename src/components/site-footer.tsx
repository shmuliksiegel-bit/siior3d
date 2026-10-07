import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { PrivacyFooterControls } from "@/components/cookie-consent";
export function SiteFooter() {
  return <footer className="footer">
    <div className="footer-brand"><p className="footer-mark">SIIOR <span>3D</span></p><p>Bringing Imagination to Life.</p></div>
    <div className="footer-column"><p>Explore</p><Link href="/productions">Productions</Link><Link href="/resources">Resources</Link><Link href="/studio">Studio</Link><Link href="/contact">Contact</Link></div>
    <div className="footer-column"><p>Studio</p><Link href="/join">Join Us</Link></div>
    <div className="footer-social" aria-label="Social media"><a href="#" aria-label="Instagram placeholder"><Instagram size={19} /></a><a href="#" aria-label="LinkedIn placeholder"><Linkedin size={19} /></a><a href="#" aria-label="YouTube placeholder"><Youtube size={21} /></a></div>
    <div className="footer-bottom"><div className="footer-legal"><Link href="/legal/privacy">Privacy</Link><Link href="/legal/terms">Terms</Link><Link href="/legal/cookies">Cookies</Link><Link href="/legal/accessibility">Accessibility</Link><PrivacyFooterControls /></div><p>© {new Date().getFullYear()} Social Academics Inc. SIIOR 3D is a DBA of Social Academics Inc.</p></div>
  </footer>;
}
