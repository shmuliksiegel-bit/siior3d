import { ProductionMontage, type Production } from "@/components/production-montage";

const logo = "https://okssmxntktgzmmvbpuvq.supabase.co/storage/v1/object/public/SIIOR_3D/Logo/Logo_Wide.png";
const productions: Production[] = [
  { id:"my-social-corner", format:"Interactive world", title:"My Social Corner", description:"An interactive world built around stories, play, and everyday discovery.", shot:"Wide environment or recognizable destination from the real production", href:"https://mysocialcorner.com" },
  { id:"social-circles", format:"Original series", title:"Social Circles", description:"An original animated series about friendship, communication, conflict, and the funny complications of being human.", shot:"Finished story frame with principal characters interacting" },
  { id:"social-circles-interactive", format:"Interactive production", title:"Social Circles Interactive", description:"The characters and situations of Social Circles extended through play, choice, and shared experience.", shot:"Gameplay frame, interface study, or player-view scene" },
  { id:"siior-shorts", format:"Short-form animation", title:"SIIOR Shorts", description:"Short stories, character moments, comedy, and studio experiments.", shot:"A frame from a completed short, animation test, or studio experiment" },
];

export default function HomePage() {
  return <>
    <section className="home-hero" aria-labelledby="hero-title"><img className="hero-logo" src={logo} alt="SIIOR 3D Animation Studios" /><div className="hero-copy"><h1 id="hero-title">Bringing Imagination to Life.</h1></div></section>
    <section className="montage" aria-label="SIIOR 3D production montage"><div className="montage-wide placeholder-frame"><span>Opening montage</span><small>Real production hero or environment render</small></div><div className="montage-stack"><div className="placeholder-frame"><span>Performance</span><small>Mocap in progress</small></div><div className="placeholder-frame"><span>Animation</span><small>Genuine working viewport</small></div></div></section>
    <section className="productions-section home-productions" aria-labelledby="productions-title"><div className="section-heading"><p className="section-label">Productions</p><h2 id="productions-title">Original worlds.</h2><p>Click a production to learn more.</p></div><ProductionMontage productions={productions} compact /></section>
  </>;
}
