import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const village = "https://www.social-academics.com/studio/still-village.png";
const windowStill = "https://www.social-academics.com/studio/still-window.png";
const worldBanner = "https://www.social-academics.com/brand/hero-banner.png";
const reel = "https://www.social-academics.com/studio/logo-reel.mp4";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <img className="hero-image" src={worldBanner} alt="" />
        <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
          <source src={reel} type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">SIIOR 3D · Animation Studios</p>
          <h1>Worlds begin<br />with a spark.</h1>
          <p>We create characters, stories, games, and cinematic worlds with heart, humor, and an unreasonable amount of imagination.</p>
          <div className="hero-actions">
            <Link href="/work" className="button primary">Explore our work <ArrowRight size={16} /></Link>
            <a href="https://youtube.com" className="button" target="_blank" rel="noopener noreferrer">Watch the reel <Play size={15} /></a>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="section-head">
          <p className="eyebrow">Featured worlds</p>
          <div>
            <h2 className="display">Stories you can enter. Characters you remember.</h2>
            <p>Our first worlds grew from a desire to help people connect. They are only the beginning. SIIOR is built for original entertainment, interactive experiences, shorts, games, and whatever comes next.</p>
          </div>
        </div>
        <div className="work-grid">
          <Link href="/work#my-social-corner" className="work-card">
            <img src={village} alt="My Social Corner world" />
            <div className="work-copy"><span>Interactive world</span><h3>My Social Corner</h3><p>A living world of stories, play, practice, and discovery.</p></div>
          </Link>
          <Link href="/work#social-circles" className="work-card">
            <img src={windowStill} alt="Social Circles story world" />
            <div className="work-copy"><span>Original series</span><h3>Social Circles</h3><p>Friendship, feeling, humor, and the wonderfully complicated business of being human.</p></div>
          </Link>
          <Link href="/work#games" className="work-card">
            <img src={worldBanner} alt="Original animated characters and environments" />
            <div className="work-copy"><span>Games & interactive</span><h3>Play changes the story.</h3><p>Social games and interactive experiments where audiences do more than watch.</p></div>
          </Link>
        </div>
      </section>

      <section className="manifesto">
        <blockquote>We don&apos;t make content.<br />We build <em>places worth returning to.</em></blockquote>
      </section>

      <section className="section light">
        <div className="section-head">
          <p className="eyebrow">What we do</p>
          <h2 className="display">One studio. Many ways to make something unforgettable.</h2>
        </div>
        <div className="disciplines">
          {[
            ["Animation", "Characters, shorts, series, visual development, and cinematic storytelling."],
            ["Games", "Playful systems, social games, interactive worlds, and new forms of participation."],
            ["Original IP", "Stories and characters designed to grow across screens, formats, and generations."],
            ["Creative production", "A flexible studio for meaningful collaborations, experiments, and ambitious ideas."],
          ].map(([title, body]) => <div className="discipline" key={title}><strong>{title}</strong><span>{body}</span></div>)}
        </div>
      </section>

      <section className="future">
        <p className="eyebrow">Still becoming</p>
        <h2 className="display">The next world has not been named yet.</h2>
        <p>That is the point. SIIOR was built with room for feature stories, unexpected partnerships, strange little shorts, games no one has played before, and ideas we cannot see from here.</p>
        <Link href="/contact" className="button primary" style={{marginTop:"2rem"}}>Make something with us <ArrowRight size={16} /></Link>
      </section>
    </>
  );
}
