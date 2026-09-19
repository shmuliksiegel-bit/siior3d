"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "siior-cookie-consent-v2";
type Settings = { functional: boolean; analytics: boolean; marketing: boolean; doNotSell: boolean };
const essential: Settings = { functional: false, analytics: false, marketing: false, doNotSell: true };

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(essential);
  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    const gpc = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
    if (saved) { try { setSettings({ ...essential, ...JSON.parse(saved) }); } catch {} }
    setOpen(!saved && !gpc);
    const handler = (event: Event) => { const action = (event as CustomEvent<{ action?: string }>).detail?.action; if (action === "do-not-sell") setSettings(essential); setOpen(true); };
    window.addEventListener("siior:privacy", handler);
    return () => window.removeEventListener("siior:privacy", handler);
  }, []);
  const save = (next: Settings) => { localStorage.setItem(KEY, JSON.stringify(next)); setSettings(next); setOpen(false); };
  if (!open) return null;
  return <aside className="cookie-banner" role="dialog" aria-label="Privacy preferences">
    <div className="cookie-copy"><p className="cookie-kicker">Your privacy</p><h2>Cookie choices</h2><p>Essential storage supports site security and remembers your choices. Optional analytics and marketing tools are currently inactive and stay off unless you allow them. <Link href="/legal/cookies">Cookie policy</Link></p></div>
    <div className="cookie-options"><label><input type="checkbox" checked={settings.functional} onChange={(e) => setSettings({ ...settings, functional:e.target.checked })} /> Functional</label><label><input type="checkbox" checked={settings.analytics} onChange={(e) => setSettings({ ...settings, analytics:e.target.checked })} /> Analytics</label><label><input type="checkbox" checked={settings.marketing} onChange={(e) => setSettings({ ...settings, marketing:e.target.checked })} /> Marketing</label></div>
    <div className="cookie-actions"><button onClick={() => save(essential)}>Essential only</button><button className="accept" onClick={() => save({ ...settings, doNotSell:false })}>Save choices</button></div>
  </aside>;
}

export function PrivacyFooterControls() {
  const open = (action: "settings" | "do-not-sell") => window.dispatchEvent(new CustomEvent("siior:privacy", { detail:{ action } }));
  return <><button type="button" onClick={() => open("settings")}>Privacy choices</button><button type="button" onClick={() => open("do-not-sell")}>Do not sell or share my information</button></>;
}
