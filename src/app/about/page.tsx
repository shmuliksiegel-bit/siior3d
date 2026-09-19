import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <header className="page-intro about-intro"><p className="section-label">About SIIOR 3D</p><h1>Imagination makes room for possibility.</h1></header>
      <section className="about-body">
        <p className="about-lead">SIIOR 3D was created from a love of the creative process and a belief that imagination can make almost anything possible.</p>
        <div className="about-columns"><p>We develop animation, stories, games, and interactive worlds. Some begin with a purpose. Others begin with a character, a place, or a question worth following.</p><p>Whatever the starting point, the aim is the same: to create places people can enter and feel something—wonder, laughter, recognition, comfort, or simply the sense that they have arrived somewhere worth staying.</p></div>
      </section>
      <section className="principles"><div><span>01</span><h2>Story before spectacle.</h2></div><div><span>02</span><h2>Technology in service of feeling.</h2></div><div><span>03</span><h2>Room for the unexpected.</h2></div></section>
      <section className="company-note"><p className="section-label">The company</p><p>SIIOR 3D is the animation-studio DBA of Social Academics Inc. It produces original work and collaborates on the visual worlds developed across the Social Academics ecosystem.</p></section>
    </>
  );
}
