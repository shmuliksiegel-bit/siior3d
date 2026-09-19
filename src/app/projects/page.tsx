import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projects", description: "Original worlds and projects in development at SIIOR 3D." };

const projects = [
  { id: "my-social-corner", number: "01", type: "Interactive world", title: "My Social Corner", body: "A developing 3D world where stories, activities, and playful exploration create opportunities for connection.", request: "A wide environmental still that establishes the world—ideally a welcoming street, gathering place, or recognizable destination." },
  { id: "social-circles", number: "02", type: "Original animated series", title: "Social Circles", body: "An original series built around friendship, communication, humor, conflict, and the everyday work of understanding one another.", request: "A finished frame with two or more principal characters in a story moment. Expression and relationship matter more than model detail." },
  { id: "social-circles-game", number: "03", type: "Game project", title: "Social Circles: The Game", body: "An interactive project that extends the characters and ideas of Social Circles into play, choice, and shared experience.", request: "A genuine gameplay frame, interface study, or staged scene that makes the player’s point of view immediately clear." },
];

export default function ProjectsPage() {
  return (
    <>
      <header className="page-intro"><p className="section-label">Projects</p><h1>Worlds in development.</h1><p>Our first original projects are taking shape across animation, interactive storytelling, and games.</p></header>
      <div className="project-editorial">
        {projects.map((project) => (
          <article className="project-entry" id={project.id} key={project.id}>
            <div className="project-meta"><span>{project.number}</span><p>{project.type}</p></div>
            <div className="project-details"><h2>{project.title}</h2><p>{project.body}</p></div>
            <div className="art-reserve" role="img" aria-label={`Artwork reserved for ${project.title}`}>
              <span>{project.title}</span><small>Original production artwork to come</small>
            </div>
            <details className="art-direction"><summary>Artwork direction</summary><p>{project.request}</p></details>
          </article>
        ))}
      </div>
      <section className="shorts-shelf"><p className="section-label">Short films & experiments</p><h2>A place for smaller stories.</h2><p>This shelf is reserved for original shorts, tests, and independent ideas as they are completed.</p><div className="film-slots"><span>Short 01</span><span>Short 02</span><span>Short 03</span></div></section>
    </>
  );
}
