import type { Metadata } from "next";
export const metadata: Metadata = { title: "Technology", description: "Tools, workflows, and production resources from SIIOR 3D." };
const disciplines = [
  ["Motion & performance", "Production documentation from motion capture, voice performance, and character work.", "Candid mocap session plus one clean capture-screen image"],
  ["Facial animation", "A developing workflow for translating captured performance into production-ready facial animation.", "Before-and-after facial capture and retargeted rig controls"],
  ["Maya tools", "Scripts and utilities created to solve practical production problems.", "Your facial-retargeting script interface inside Maya"],
  ["Artist resources", "Selected original models, scenes, and tools will be shared when they are ready for release.", "A contact sheet of original, redistribution-safe assets"],
];
export default function TechnologyPage() { return <>
  <header className="page-intro"><p className="section-label">Technology</p><h1>Tools in service of the work.</h1></header>
  <section className="technology-grid">{disciplines.map(([title,body,shot]) => <article key={title}><div className="tech-image placeholder-frame"><span>{title}</span><small>Requested shot: {shot}</small></div><h2>{title}</h2><p>{body}</p></article>)}</section>
  <section className="resources-band"><div><p className="section-label">SIIOR Tools</p><h2>Resources will live here.</h2></div><p>Every public tool will include compatibility details, documentation, version history, and a clear license. Only original or redistribution-approved material will be offered.</p></section>
  </>; }
