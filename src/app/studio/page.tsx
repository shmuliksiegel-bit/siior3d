import type { Metadata } from "next";

export const metadata: Metadata = { title: "Studio" };

export default function StudioPage() {
  return (
    <>
      <section className="page-hero"><p className="eyebrow">The studio</p><h1 className="display">A twenty-year dream.<br />Now in production.</h1></section>
      <section className="section light">
        <div className="section-head"><p className="eyebrow">Our beginning</p><div><h2 className="display">SIIOR began long before it had a name.</h2><p>The idea started with a love of animation, technology, characters, and the magic of seeing an imagined world become real. From SIGGRAPH 2005 to the studio&apos;s first original projects, that fascination never went away. It simply kept gathering tools.</p></div></div>
        <div className="disciplines">
          <div className="discipline"><strong>Story first</strong><span>Technology matters because of what it lets the audience feel.</span></div>
          <div className="discipline"><strong>Built to explore</strong><span>We make room for experiments, mistakes, and unexpected discoveries.</span></div>
          <div className="discipline"><strong>Human at heart</strong><span>Even our strangest worlds begin with something emotionally true.</span></div>
          <div className="discipline"><strong>More to come</strong><span>The studio is intentionally broader than any one genre or audience.</span></div>
        </div>
      </section>
      <section className="manifesto"><blockquote>Ambition without wonder is just a schedule.<br /><em>We choose wonder.</em></blockquote></section>
      <section className="section"><p className="eyebrow">A Social Academics company</p><div className="prose"><p>SIIOR 3D is the animation-studio DBA of Social Academics Inc. Social Academics develops content and technology; SIIOR gives those ideas—and original ideas of its own—visual life.</p></div></section>
    </>
  );
}

