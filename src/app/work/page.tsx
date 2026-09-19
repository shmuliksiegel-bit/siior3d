import type { Metadata } from "next";

export const metadata: Metadata = { title: "Work" };

const projects = [
  { id: "my-social-corner", type: "Interactive world", title: "My Social Corner", body: "An evolving 3D world where stories, activities, characters, and playful practice come together. Developed with Social Academics, it explores how interactive spaces can make learning feel like discovery.", image: "https://www.social-academics.com/studio/still-village.png" },
  { id: "social-circles", type: "Original series", title: "Social Circles", body: "An original animated universe about friendship, communication, emotional regulation, and everyday problem-solving—told through character, comedy, conflict, and heart.", image: "https://www.social-academics.com/studio/still-window.png" },
  { id: "games", type: "Games & interactive", title: "Social Games", body: "Experiments in play, choice, cooperation, and perspective. Some are designed to teach. Others may simply be designed to make people laugh, compete, wonder, or stay up later than intended.", image: "https://www.social-academics.com/brand/hero-banner.png" },
];

export default function WorkPage() {
  return (
    <>
      <section className="page-hero"><p className="eyebrow">Selected work</p><h1 className="display">Worlds in motion.</h1><p className="prose">Original stories, interactive spaces, characters, games, and the first chapters of a much larger studio.</p></section>
      {projects.map((project, index) => (
        <section className={index % 2 ? "section light" : "section"} id={project.id} key={project.id}>
          <div className="section-head"><p className="eyebrow">{project.type}</p><div><h2 className="display">{project.title}</h2><p>{project.body}</p></div></div>
          <div className="work-card" style={{minHeight:"70vh"}}><img src={project.image} alt={project.title + " visual development"} /></div>
        </section>
      ))}
      <section className="future"><p className="eyebrow">In development</p><h2 className="display">Shorts. Experiments. New originals.</h2><p>Future productions will live here as they become ready to meet the world.</p></section>
    </>
  );
}
