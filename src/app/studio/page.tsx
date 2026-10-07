import type { Metadata } from "next";
export const metadata: Metadata = { title: "Studio" };
export default function StudioPage() { return <>
  <header className="page-intro studio-intro"><p className="section-label">The studio</p><h1>Bringing Imagination to Life.</h1></header>
  <section className="studio-statement"><p>SIIOR 3D creates original animation, interactive experiences, games, and worlds.</p></section>
  <section className="studio-fields"><article><span>01</span><h2>Animation</h2><p>Characters, stories, short films, and original series.</p></article><article><span>02</span><h2>Interactive</h2><p>Games and digital experiences designed to be entered and explored.</p></article><article><span>03</span><h2>Worlds</h2><p>Places with their own character, atmosphere, and reason to exist.</p></article></section>
  </>; }
