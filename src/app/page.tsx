import Link from "next/link";

const logo = "https://okssmxntktgzmmvbpuvq.supabase.co/storage/v1/object/public/SIIOR_3D/Logo/Logo_Wide.png";
const reel = "https://www.social-academics.com/studio/logo-reel.mp4";

const projects = [
  { id: "my-social-corner", number: "01", type: "Interactive world", title: "My Social Corner", line: "A place for stories, play, discovery, and connection." },
  { id: "social-circles", number: "02", type: "Original series", title: "Social Circles", line: "Animated stories about the complicated, funny work of being human." },
  { id: "social-circles-game", number: "03", type: "Game project", title: "Social Circles: The Game", line: "A developing interactive extension of the Social Circles world." },
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="hero-mark"><img src={logo} alt="SIIOR 3D Animation Studios" /></div>
        <video className="hero-reel" autoPlay muted playsInline aria-hidden="true"><source src={reel} type="video/mp4" /></video>
        <div className="hero-statement">
          <p className="kicker">Animation · Games · Original worlds</p>
          <h1 id="hero-title">We create worlds.</h1>
          <p>Places shaped by imagination—made to be entered, remembered, and felt.</p>
        </div>
      </section>

      <section className="intro-section">
        <p className="section-label">SIIOR 3D</p>
        <div className="intro-copy">
          <h2>Creativity gives an idea somewhere to live.</h2>
          <p>SIIOR 3D is an animation studio developing original stories, characters, games, and interactive experiences.</p>
        </div>
      </section>

      <section className="projects-section" aria-labelledby="projects-title">
        <div className="section-title-row">
          <div><p className="section-label">Projects</p><h2 id="projects-title">Worlds in development</h2></div>
          <Link href="/projects" className="text-link">View all projects <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <Link href={`/projects#${project.id}`} className="project-row" key={project.title}>
              <span className="project-number">{project.number}</span><span className="project-type">{project.type}</span>
              <span className="project-title">{project.title}</span><span className="project-line">{project.line}</span>
              <span className="project-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="shorts-teaser">
        <div><p className="section-label">Short films</p><h2>A small screen for new ideas.</h2></div>
        <p>Original shorts and studio experiments will appear here as they are completed.</p>
      </section>
    </>
  );
}
