import type { Metadata } from "next";
export const metadata: Metadata = { title: "Resources", description: "Production tools, workflows, and selected artist resources from SIIOR 3D." };
const resources = [
  ["Motion & performance", "Production notes from motion capture, voice performance, and character work.", "Candid mocap session plus one clean capture-screen image"],
  ["Facial animation", "A developing workflow for translating captured performance into production-ready facial animation.", "Before-and-after facial capture and retargeted rig controls"],
  ["Maya tools", "Scripts and utilities created to solve practical production problems.", "The facial-retargeting script interface inside Maya"],
  ["Artist resources", "Selected original models, scenes, and tools available for other artists.", "A contact sheet of original, redistribution-safe assets"],
];
const process = [["Performance","Motion-capture performance in progress"],["Voice","A candid voice-recording session"],["Animation","A genuine Maya viewport or animation pass"],["Worldbuilding","An environment progressing from blockout to final"]];
export default function ResourcesPage() { return <>
  <header className="page-intro resources-intro"><p className="section-label">Resources</p><h1>Tools, process, and things worth sharing.</h1></header>
  <section className="resources-grid">{resources.map(([title,body,shot])=><article key={title}><div className="resource-image placeholder-frame"><span>{title}</span><small>Requested shot: {shot}</small></div><h2>{title}</h2><p>{body}</p></article>)}</section>
  <section className="resources-process"><div><p className="section-label">Inside the work</p><h2>How the work takes shape.</h2></div><div className="process-grid">{process.map(([label,request])=><div className="process-shot placeholder-frame" key={label}><span>{label}</span><small>{request}</small></div>)}</div></section>
  </>; }
