import type { Metadata } from "next";
export const metadata: Metadata = { title: "Studio" };
const history = [
  { year:"2005", title:"An early ambition", text:"SIGGRAPH helped turn a long-standing interest in animation and digital worldbuilding into a direction worth pursuing.", shot:"A genuine photo, badge, program, or personal artifact from SIGGRAPH 2005" },
  { year:"Early work", title:"Learning by making", text:"Experiments in environments, characters, animation, and interactive ideas became the foundation for what followed.", shot:"Early original model, environment, or Sam’s Place render" },
  { year:"Social Circles", title:"Characters meet story", text:"An original cast and a growing collection of stories created a world with room for humor, conflict, and connection.", shot:"Early character sheet beside a current production frame" },
  { year:"My Social Corner", title:"A world becomes interactive", text:"Story, environments, activities, and play came together in an experience designed to be entered.", shot:"Blockout-to-render comparison from My Social Corner" },
  { year:"SIIOR 3D", title:"The studio takes its name", text:"The animation, game, and interactive work received a dedicated studio identity—and space to grow beyond any single kind of story.", shot:"First real SIIOR 3D production-day photograph" },
];
export default function StudioPage() { return <>
  <header className="page-intro studio-intro"><p className="section-label">The studio</p><h1>Bringing Imagination to Life.</h1></header>
  <section className="studio-mission"><p>We create original animation, interactive experiences, games, tools, and worlds.</p></section>
  <section className="history-section" id="history"><div className="history-heading"><p className="section-label">History</p><h2>Frames along the way.</h2><p>Scroll through the reel <span aria-hidden="true">→</span></p></div><div className="film-reel" tabIndex={0} aria-label="SIIOR 3D history timeline">{history.map((frame) => <article className="history-frame" key={frame.year}><div className="history-image placeholder-frame"><small>Requested archive: {frame.shot}</small></div><p className="history-year">{frame.year}</p><h3>{frame.title}</h3><p>{frame.text}</p></article>)}</div></section>
  <section className="people-section" id="people"><div className="people-photo placeholder-frame"><span>Founder portrait</span><small>A candid working portrait at the animation workstation—not a staged corporate headshot</small></div><div><p className="section-label">People</p><h2>Shmulik Siegel</h2><p className="role">Founder & Creative Director</p><p>SIIOR 3D is being built at the intersection of storytelling, human behavior, performance, animation, and interactive technology.</p><p className="collaboration">The studio works with artists, performers, developers, and creative collaborators as each production requires.</p></div></section>
  </>; }
