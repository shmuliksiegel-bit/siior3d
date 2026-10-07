"use client";

import { useState } from "react";

export type Production = {
  id: string;
  format: string;
  title: string;
  description: string;
  shot: string;
  href?: string;
};

export function ProductionMontage({ productions, compact = false }: { productions: Production[]; compact?: boolean }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className={`production-montage${compact ? " compact" : ""}`}>
      {productions.map((production, index) => {
        const flipped = open === production.id;
        return (
          <article className={`flip-card card-${index + 1}${flipped ? " is-flipped" : ""}`} id={production.id} key={production.id}>
            <div className="flip-inner">
              <div className="flip-front placeholder-frame"><small>{production.shot}</small><span className="card-caption"><b>{production.title}</b><em>{production.format}</em></span></div>
              <div className="flip-back"><div><small>{production.format}</small><b>{production.title}</b><p>{production.description}</p>{production.href && <a href={production.href} target="_blank" rel="noopener noreferrer">Visit {production.title} <span aria-hidden="true">↗</span></a>}<button type="button" onClick={() => setOpen(null)}>Return</button></div></div>
            </div>
            {!flipped && <button className="flip-toggle" type="button" onClick={() => setOpen(production.id)} aria-expanded="false" aria-label={`Show details for ${production.title}`} />}
          </article>
        );
      })}
    </div>
  );
}
