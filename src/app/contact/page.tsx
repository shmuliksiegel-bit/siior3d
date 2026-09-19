import type { Metadata } from "next";
export const metadata: Metadata = { title: "Contact" };
export default function ContactPage() {
  return <section className="simple-page"><p className="section-label">Contact</p><h1>Start a conversation.</h1><p className="page-lead">For production inquiries, creative collaborations, or studio information:</p><a className="contact-email" href="mailto:studio@siior3d.com">studio@siior3d.com</a></section>;
}
