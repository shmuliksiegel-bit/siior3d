"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
const productions = [["My Social Corner", "https://mysocialcorner.com"], ["Social Circles", "/productions#social-circles"], ["Social Circles Interactive", "/productions#social-circles-interactive"], ["SIIOR Shorts", "/productions#siior-shorts"], ["All Productions", "/productions"]];
function ProductionsDropdown() { return <div className="nav-dropdown"><button type="button">Productions<ChevronDown size={13} aria-hidden="true" /></button><div className="dropdown-panel">{productions.map(([text, href]) => href.startsWith("http") ? <a href={href} target="_blank" rel="noopener noreferrer" key={href}>{text}</a> : <Link href={href} key={href}>{text}</Link>)}</div></div>; }
export function SiteHeader() {
  const [open,setOpen]=useState(false);
  const links=[["Resources","/resources"],["Studio","/studio"],["Contact","/contact"]];
  return <header className="site-header"><Link href="/" className="brand" onClick={()=>setOpen(false)} aria-label="SIIOR 3D home"><span className="brand-ring" aria-hidden="true"/><span className="brand-type">SIIOR <b>3D</b></span></Link><nav className="desktop-nav" aria-label="Primary navigation"><ProductionsDropdown />{links.map(([text,href])=><Link href={href} key={href}>{text}</Link>)}</nav><button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open?<X size={21}/>:<Menu size={21}/>}</button>{open&&<nav className="mobile-nav" aria-label="Mobile navigation">{[["Home","/"],["Productions","/productions"],...links].map(([text,href])=><Link href={href} key={href} onClick={()=>setOpen(false)}>{text}</Link>)}</nav>}</header>;
}
