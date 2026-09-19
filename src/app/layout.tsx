import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://siior3d.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SIIOR 3D | Animation Studios",
    template: "%s | SIIOR 3D",
  },
  description:
    "SIIOR 3D is an independent animation and interactive studio creating original characters, cinematic stories, games, and worlds.",
  openGraph: {
    title: "SIIOR 3D | Animation Studios",
    description: "Characters. Stories. Worlds still becoming.",
    url: siteUrl,
    siteName: "SIIOR 3D",
    type: "website",
    images: [{
      url: "https://okssmxntktgzmmvbpuvq.supabase.co/storage/v1/object/public/SIIOR_3D/Logo/Big.png",
      width: 1200,
      height: 630,
    }],
  },
  icons: {
    icon: "https://okssmxntktgzmmvbpuvq.supabase.co/storage/v1/object/public/SIIOR_3D/Logo/68ceee65-1ed3-4cdb-8316-d2710201cd91.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

