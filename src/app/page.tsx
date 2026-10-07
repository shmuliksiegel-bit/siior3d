import Link from "next/link";

const logo = "https://okssmxntktgzmmvbpuvq.supabase.co/storage/v1/object/public/SIIOR_3D/Logo/Logo_Wide.png";
const productions = [
  { id: "my-social-corner", format: "Interactive world", title: "My Social Corner", shot: "A finished wide view of a welcoming street, room, or gathering place from the world." },
  { id: "social-circles", format: "Original series", title: "Social Circles", shot: "A genuine story frame with two or more characters in a moment of connection, conflict, or comedy." },
  { id: "social-circles-interactive", format: "Interactive production", title: "Social Circles Interactive", shot: "A gameplay frame or development view that clearly shows the player experience." },
  { id: "siior-shorts", format: "Short-form animation", title: "SIIOR Shorts", shot: "A frame from a completed short, animation test, or studio experiment." },
];
const processShots = [
  { label: "Performance", request: "Motion-capture performance in progress" },
  { label: "Voice", request: "A candid voice-recording session" },
  { label: "Animation", request: "A genuine Maya viewport or animation pass" },
  { label: "Worldbuilding", request: "An environment progressing from blockout to final" },
];

export default function HomePage() {
  return <>
    <section className="home-hero" aria-labelledby="hero-title">
      <img className="hero-logo" src={logo} alt="SIIOR 3D Animation Studios" />
      <div className="hero-copy"><h1 id="hero-title">Bringing Imagination to Life.</h1></div>
    </section>
    <section className="montage" aria-label="SIIOR 3D production montage">
      <div className="montage-wide placeholder-frame"><span>Opening montage</span><small>Replace with a real production hero or environment render</small></div>
      <div className="montage-stack"><div className="placeholder-frame"><span>Performance</span><small>Mocap in progress</small></div><div className="placeholder-frame"><span>Animation</span><small>Genuine working viewport</small></div></div>
    </section>
    <section className="productions-section" aria-labelledby="productions-title">
      <div className="section-heading"><p className="section-label">Productions</p><h2 id="productions-title">Original worlds. In motion.</h2><Link href="/productions" className="text-link">View all productions <span aria-hidden="true">→</span></Link></div>
      <div className="production-grid">{productions.map((production) => <Link href={`/productions#${production.id}`} className="production-card" key={production.id}><div className="production-art placeholder-frame"><small>{production.shot}</small></div><p>{production.format}</p><h3>{production.title}</h3></Link>)}</div>
    </section>
    <section className="process-section" aria-labelledby="process-title">
      <div className="process-intro"><p className="section-label">Inside the work</p><h2 id="process-title">Story, performance, and technology—one frame at a time.</h2></div>
      <div className="process-grid">{processShots.map((shot) => <div className="process-shot placeholder-frame" key={shot.label}><span>{shot.label}</span><small>{shot.request}</small></div>)}</div>
    </section>
    <section className="technology-teaser"><div><p className="section-label">Technology</p><h2>Tools built in the course of making.</h2></div><div><p>Production workflows, motion and facial performance, Maya tools, and selected resources created at SIIOR 3D.</p><Link href="/technology" className="light-link">Explore technology <span aria-hidden="true">→</span></Link></div></section>
  </>;
}
