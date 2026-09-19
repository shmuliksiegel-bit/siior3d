import type { Metadata } from "next";
import { Mail, Play } from "lucide-react";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero"><p className="eyebrow">Contact</p><h1 className="display">Let&apos;s make something impossible.</h1></section>
      <section className="section">
        <div className="contact-grid">
          <div className="contact-card"><Mail color="#d4a74d" /><h2 className="display" style={{fontSize:"3rem"}}>Studio inquiries</h2><p className="prose">Original productions, creative collaborations, animation, interactive projects, and ambitious ideas.</p><a className="button primary" href="mailto:studio@siior3d.com">studio@siior3d.com</a></div>
          <div className="contact-card"><Play color="#d4a74d" /><h2 className="display" style={{fontSize:"3rem"}}>Watch our work</h2><p className="prose">Our YouTube channel is coming here next. For now, the screen is warming up.</p><span className="button" aria-disabled="true">YouTube · Coming soon</span></div>
        </div>
      </section>
    </>
  );
}

