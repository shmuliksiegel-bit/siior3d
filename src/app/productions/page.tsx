import type { Metadata } from "next";
export const metadata: Metadata = { title: "Productions", description: "Original animation, interactive worlds, games, and shorts from SIIOR 3D." };
const productions = [
  { id:"my-social-corner", format:"Interactive world", title:"My Social Corner", status:"In development", description:"An interactive world built around stories, play, and everyday discovery.", shot:"Wide environment or recognizable destination from the real production" },
  { id:"social-circles", format:"Original series", title:"Social Circles", status:"In development", description:"An original animated series about friendship, communication, conflict, and the funny complications of being human.", shot:"Finished story frame with principal characters interacting" },
  { id:"social-circles-interactive", format:"Interactive production", title:"Social Circles Interactive", status:"In development", description:"The characters and situations of Social Circles extended through play, choice, and shared experience.", shot:"Gameplay frame, interface study, or player-view scene" },
  { id:"siior-shorts", format:"Short-form animation", title:"SIIOR Shorts", status:"Ongoing", description:"Short stories, character moments, comedy, and studio experiments—educational and otherwise.", shot:"A contact sheet of frames from completed shorts and tests" },
];
export default function ProductionsPage() { return <>
  <header className="page-intro"><p className="section-label">Productions</p><h1>Worlds taking shape.</h1></header>
  <div className="production-editorial">{productions.map((item, index) => <article className="production-entry" id={item.id} key={item.id}>
    <div className="production-index">{String(index+1).padStart(2,"0")}</div>
    <div className="production-copy"><p className="section-label">{item.format}</p><h2>{item.title}</h2><p>{item.description}</p><dl><div><dt>Status</dt><dd>{item.status}</dd></div><div><dt>Studio</dt><dd>SIIOR 3D</dd></div></dl></div>
    <div className="production-hero placeholder-frame"><span>{item.title}</span><small>Requested shot: {item.shot}</small></div>
  </article>)}</div>
  <section className="development-note"><p className="section-label">In development</p><h2>More is being made than is ready to be shown.</h2><p>This page will grow with the work.</p></section>
  </>; }
