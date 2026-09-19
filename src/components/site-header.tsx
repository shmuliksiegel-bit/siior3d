"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const nav = [{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }, { label: "About", href: "/about" }];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="SIIOR 3D home">
        <span className="brand-ring" aria-hidden="true" /><span className="brand-type">SIIOR <b>3D</b></span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X size={21} /> : <Menu size={21} />}</button>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav>}
    </header>
  );
}
