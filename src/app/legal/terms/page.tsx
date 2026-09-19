import type { Metadata } from "next";
import { LegalHeading, LegalLayout } from "@/components/legal-layout";
export const metadata: Metadata = { title: "Terms of Use" };
export default function TermsPage() { return <LegalLayout title="Terms of Use">
  <p>These Terms govern your use of the SIIOR 3D website. By using the site, you agree to these Terms.</p>
  <LegalHeading>Studio information</LegalHeading><p>The site provides information about SIIOR 3D, its projects, and work in development. Materials may change, and descriptions of unreleased projects are not promises of release dates, features, or availability.</p>
  <LegalHeading>Intellectual property</LegalHeading><p>Unless otherwise stated, the site&apos;s names, logos, artwork, animation, characters, writing, design, and other materials are owned by or licensed to Social Academics Inc. and SIIOR 3D. They may not be copied, distributed, modified, or used commercially without written permission.</p>
  <LegalHeading>Permitted use</LegalHeading><p>You may view and share links to public pages for personal, informational, and noncommercial purposes. You may not interfere with the site, attempt unauthorized access, scrape it at scale, or misrepresent an affiliation with SIIOR 3D.</p>
  <LegalHeading>External links and media</LegalHeading><p>Links and embedded media from third parties are provided for convenience. We do not control those services and are not responsible for their content, availability, or privacy practices.</p>
  <LegalHeading>Ideas and submissions</LegalHeading><p>Please do not send confidential or unsolicited story ideas, scripts, characters, or other creative materials unless SIIOR 3D has expressly agreed in writing to receive them. General inquiries do not create a confidential, fiduciary, or creative-development relationship.</p>
  <LegalHeading>Disclaimer</LegalHeading><p>The site is provided on an &quot;as is&quot; and &quot;as available&quot; basis to the extent permitted by law. We do not guarantee that every page or feature will always be available or error-free.</p>
  <LegalHeading>Contact</LegalHeading><p>Questions about these Terms may be sent to <a href="mailto:studio@siior3d.com">studio@siior3d.com</a>.</p>
</LegalLayout>; }
