"use client";

import { useEffect, useRef } from "react";
import { useApp } from "@/lib/store";
import { useToast } from "@/lib/toast";

const PARTICLE_COUNT = 14;

export function Welcome({ active }: { active: boolean }) {
  const go = useApp((s) => s.go);
  const toast = useToast((s) => s.show);
  const particlesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = particlesRef.current;
    if (!host || host.childElementCount > 0) return;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = document.createElement("span");
      p.className = "particle";
      const size = 2 + Math.random() * 4;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.setProperty("--tx", "0px");
      p.style.setProperty("--tx2", `${(Math.random() - 0.5) * 40}px`);
      p.style.animationDuration = `${7 + Math.random() * 8}s`;
      p.style.animationDelay = `${-Math.random() * 10}s`;
      p.style.opacity = (0.3 + Math.random() * 0.5).toFixed(2);
      host.appendChild(p);
    }
  }, []);

  return (
    <section className={`screen ${active ? "active" : ""}`} id="screen-welcome">
      <div className="particles" ref={particlesRef} />
      <div className="welcome-inner">
        <div className="welcome-top">
          <div className="table-badge">
            <span className="dot" /> Table · 07
          </div>
          <div className="monogram">
            {/* Monogramme LB — Le Bambou */}
            <svg
              className="mono-svg"
              width="112"
              height="112"
              viewBox="0 0 112 112"
              fill="none"
              aria-label="Le Bambou monogram"
            >
              <circle className="mono-ring mono-ring-1" cx="56" cy="56" r="53" stroke="#C17A3A" strokeOpacity=".55" strokeWidth="1" />
              <circle className="mono-ring mono-ring-2" cx="56" cy="56" r="47" stroke="#C17A3A" strokeOpacity=".2" strokeWidth="1" />
              <g className="mono-letters" fill="#C17A3A">
                {/* L */}
                <path d="M28 34h6v38H50v5H28V34z" />
                {/* B */}
                <path d="M56 34h14c6 0 10 3.5 10 9 0 3.5-1.8 6-4.5 7.5C79 52 81 55 81 59c0 6-4.5 10-11 10H56V34zm6 5v11h7.5c2.8 0 4.5-1.8 4.5-5.5S72.3 39 69.5 39H62zm0 16v13h8c3.2 0 5-2 5-6.5S73.2 55 70 55h-8z" />
              </g>
              <circle className="mono-dot mono-dot-top" cx="56" cy="12" r="1.5" fill="#C17A3A" />
              <circle className="mono-dot mono-dot-bot" cx="56" cy="100" r="1.5" fill="#C17A3A" />
            </svg>
          </div>
        </div>

        <div className="welcome-mid">
          <div className="hello">Bienvenue</div>
          <h1 className="shimmer">
            <span className="word w1">Le</span>{" "}
            <em className="word w2">Bambou</em>
          </h1>
          <div className="ornament">
            <span className="line" />
            <span className="dia" />
            <span className="line" />
          </div>
          <p>Votre cuisine chez nous — Kipe, Conakry.</p>
        </div>

        <div className="welcome-bottom">
          <button className="btn-pill btn-gold" onClick={() => go("menu")}>
            Découvrir la carte
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="btn-pill btn-ghost"
            onClick={() => toast("Un serveur a été prévenu.")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 14c0-3.3 2.7-6 6-6s6 2.7 6 6" />
              <path d="M4 20h16" />
              <path d="M12 8V4" />
              <path d="M10 4h4" />
            </svg>
            Appeler un serveur
          </button>
        </div>
      </div>
    </section>
  );
}
