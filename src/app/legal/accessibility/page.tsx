import type { Metadata } from "next";
import { LegalHeading, LegalLayout } from "@/components/legal-layout";
export const metadata: Metadata = { title: "Accessibility" };
export default function AccessibilityPage() { return <LegalLayout title="Accessibility Statement">
  <p>SIIOR 3D is committed to making this website usable by as many people as possible, including people who use assistive technologies.</p>
  <LegalHeading>Our approach</LegalHeading><p>We aim to provide keyboard-accessible navigation, readable contrast, meaningful headings, text alternatives for informative images, captions or transcripts for published video where available, and layouts that remain usable when text is enlarged.</p>
  <LegalHeading>Work in progress</LegalHeading><p>Accessibility is an ongoing part of the creative and technical process. Some third-party media or older materials may not yet meet every accessibility goal, and we will work to improve them as projects are published.</p>
  <LegalHeading>Feedback</LegalHeading><p>If you encounter an accessibility barrier, email <a href="mailto:studio@siior3d.com">studio@siior3d.com</a> and describe the page and issue. We will make a reasonable effort to provide the information in another format and address the problem.</p>
</LegalLayout>; }
