import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsent } from "@/components/cookie-consent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://siior3d.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SIIOR 3D | Animation Studios",
    template: "%s | SIIOR 3D",
  },
  description:
    "SIIOR 3D is an animation studio creating original stories, games, characters, and worlds.",
  openGraph: {
    title: "SIIOR 3D | Animation Studios",
    description: "We create worlds.",
    url: siteUrl,
    siteName: "SIIOR 3D",
    type: "website",
    images: [{
      url: "https://okssmxntktgzmmvbpuvq.supabase.co/storage/v1/object/public/SIIOR_3D/Logo/Big.png",
      width: 1200,
      height: 630,
    }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f6f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
