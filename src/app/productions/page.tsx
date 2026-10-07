import type { Metadata } from "next";
import { ProductionMontage, type Production } from "@/components/production-montage";
export const metadata: Metadata = { title: "Productions", description: "Original animation, interactive worlds, games, and shorts from SIIOR 3D." };
const productions: Production[] = [
  { id:"my-social-corner", format:"Interactive world", title:"My Social Corner", description:"An interactive world built around stories, play, and everyday discovery.", shot:"Wide environment or recognizable destination from the real production", href:"https://mysocialcorner.com" },
  { id:"social-circles", format:"Original series", title:"Social Circles", description:"An original animated series about friendship, communication, conflict, and the funny complications of being human.", shot:"Finished story frame with principal characters interacting" },
  { id:"social-circles-interactive", format:"Interactive production", title:"Social Circles Interactive", description:"The characters and situations of Social Circles extended through play, choice, and shared experience.", shot:"Gameplay frame, interface study, or player-view scene" },
  { id:"siior-shorts", format:"Short-form animation", title:"SIIOR Shorts", description:"Short stories, character moments, comedy, and studio experiments.", shot:"A frame from a completed short, animation test, or studio experiment" },
];
export default function ProductionsPage() { return <><header className="page-intro production-intro"><p className="section-label">Productions</p><h1>Original worlds.</h1></header><section className="productions-page"><ProductionMontage productions={productions} /></section></>; }
