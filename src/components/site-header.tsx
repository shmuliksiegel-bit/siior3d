"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const productions = [["My Social Corner", "/productions#my-social-corner"], ["Social Circles", "/productions#social-circles"], ["Social Circles Interactive", "/productions#social-circles-interactive"], ["SIIOR Shorts", "/productions#siior-shorts"], ["All Productions", "/productions"]];
const more = [["History", "/studio#history"], ["People", "/studio#people"], ["Join Us", "/join"]];
function Dropdown({ label, items }: { label: string; items: string[][] }) { return <div className="nav-dropdown"><button type="button">{label}<ChevronDown size={13} aria-hidden="true" /></button><div className="dropdown-panel">{items.map(([text, href]) => <Link href={href} key={href}>{text}</Link>)}</div></div>; }
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="SIIOR 3D home"><span className="brand-ring" aria-hidden="true" /><span className="brand-type">SIIOR <b>3D</b></span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation"><Dropdown label="Productions" items={productions} /><Link href="/technology">Technology</Link><Link href="/studio">Studio</Link><Link href="/contact">Contact</Link><Dropdown label="More" items={more} /></nav>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X size={21} /> : <Menu size={21} />}</button>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{[["Home","/"],["Productions","/productions"],["Technology","/technology"],["Studio","/studio"],["Contact","/contact"],["Join Us","/join"]].map(([text,href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{text}</Link>)}</nav>}
  </header>;
}
