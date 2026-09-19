import type { Metadata } from "next";
import { LegalHeading, LegalLayout } from "@/components/legal-layout";
export const metadata: Metadata = { title: "Cookie Policy" };
export default function CookiesPage() { return <LegalLayout title="Cookie Policy">
  <p>This policy explains how the SIIOR 3D website uses cookies and similar browser storage.</p>
  <LegalHeading>Essential storage</LegalHeading><p>The site may use essential storage to remember choices such as your cookie preference and to support security and reliable delivery. These functions do not require consent where permitted by law.</p>
  <LegalHeading>Optional analytics</LegalHeading><p>If analytics are added, they will remain disabled until you select &quot;Accept&quot; in the cookie notice. We do not currently use advertising cookies.</p>
  <LegalHeading>Embedded media</LegalHeading><p>Playing video embedded from YouTube, Vimeo, or another provider may allow that provider to set cookies or collect technical information under its own policies. Where practical, embedded media will use privacy-conscious settings.</p>
  <LegalHeading>Managing your choice</LegalHeading><p>You can clear this site&apos;s storage in your browser to reset your selection. You can also control cookies through your browser settings, although blocking essential storage may affect site behavior.</p>
  <LegalHeading>Contact</LegalHeading><p>Questions may be sent to <a href="mailto:studio@siior3d.com">studio@siior3d.com</a>.</p>
</LegalLayout>; }
