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

          {/* Monogramme circulaire — Le Bambou */}
          <div className="monogram">
            <svg
              className="mono-svg"
              width="112"
              height="112"
              viewBox="0 0 112 112"
              fill="none"
              aria-label="Le Bambou"
            >
              <g className="mono-letters">
                <text
                  x="56" y="50"
                  textAnchor="middle"
                  fontFamily="Cormorant Garamond, serif"
                  fontWeight="700"
                  fontSize="22"
                  fill="rgba(251,246,238,0.95)"
                  letterSpacing="2"
                >
                  LE
                </text>
                <text
                  x="56" y="72"
                  textAnchor="middle"
                  fontFamily="Cormorant Garamond, serif"
                  fontWeight="700"
                  fontSize="20"
                  fill="rgba(251,246,238,0.95)"
                  letterSpacing="1"
                >
                  BAMBOU
                </text>
                <text
                  x="56" y="87"
                  textAnchor="middle"
                  fontFamily="Cormorant Garamond, serif"
                  fontStyle="italic"
                  fontSize="7"
                  fill="rgba(251,246,238,0.75)"
                >
                  Votre Cuisine Chez Nous
                </text>
              </g>
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
          <p>Votre cuisine chez nous — Brunch, formules et plats signature à votre table.</p>
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
