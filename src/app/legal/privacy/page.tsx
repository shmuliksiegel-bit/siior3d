import type { Metadata } from "next";
import { LegalHeading, LegalLayout } from "@/components/legal-layout";
export const metadata: Metadata = { title: "Privacy Policy" };
export default function PrivacyPage() { return <LegalLayout title="Privacy Policy">
  <p>This policy explains how SIIOR 3D, a DBA of Social Academics Inc. (&quot;SIIOR 3D,&quot; &quot;we,&quot; or &quot;us&quot;), handles information collected through this website.</p>
  <LegalHeading>Information we collect</LegalHeading><p>We may receive information you choose to provide when contacting the studio, including your name, email address, organization, and message. We may also receive limited technical information necessary to deliver and secure the site.</p>
  <LegalHeading>How we use information</LegalHeading><p>We use submitted information to respond to inquiries, consider collaborations, maintain correspondence, and operate the website. We do not sell personal information.</p>
  <LegalHeading>Cookies and analytics</LegalHeading><p>Essential storage may be used to remember site preferences. Optional analytics will not be enabled before consent. See our <a href="/legal/cookies">Cookie Policy</a>.</p>
  <LegalHeading>Third-party services</LegalHeading><p>The site may link to or embed media from services such as YouTube or Vimeo. Those services operate under their own privacy policies and may collect information when you visit them or play embedded media.</p>
  <LegalHeading>Children&apos;s privacy</LegalHeading><p>This website presents studio and project information to a general audience. It is not designed to collect personal information from children under 13. Please do not submit information about a child through studio inquiries.</p>
  <LegalHeading>Retention and security</LegalHeading><p>We retain information only as reasonably necessary for the purpose for which it was provided and use reasonable safeguards to protect it. No electronic system can be guaranteed completely secure.</p>
  <LegalHeading>Your choices</LegalHeading><p>You may request access to, correction of, or deletion of information you submitted by contacting <a href="mailto:studio@siior3d.com">studio@siior3d.com</a>, subject to applicable law.</p>
  <LegalHeading>Changes</LegalHeading><p>We may update this policy as the studio and website develop. The effective date above will be revised when material changes are made.</p>
</LegalLayout>; }
