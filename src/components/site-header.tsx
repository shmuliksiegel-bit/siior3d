"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://okssmxntktgzmmvbpuvq.supabase.co/storage/v1/object/public/SIIOR_3D/Logo/Logo_Wide.png"
          alt="SIIOR 3D Animation Studios"
        />
      </Link>
      <nav className="desktop-nav" aria-label="Primary">
        {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">Watch</a>
      </nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile">
          {nav.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">Watch</a>
        </nav>
      )}
    </header>
  );
}

