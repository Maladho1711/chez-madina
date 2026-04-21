"use client";

import { useEffect, useRef, useState } from "react";
import { DISHES, fmtGNF } from "@/lib/data";
import { cartTotals, useApp } from "@/lib/store";
import { useToast } from "@/lib/toast";

export function Confirm({ active }: { active: boolean }) {
  const { cart, firstName, orderNo, reset, go } = useApp();
  const toast = useToast((s) => s.show);
  const [eta, setEta] = useState(18);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { total } = cartTotals(cart);

  useEffect(() => {
    if (!active) return;
    setEta(18);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setEta((m) => {
        const next = Math.max(1, m - 1);
        if (next <= 1 && timerRef.current) clearInterval(timerRef.current);
        return next;
      });
    }, 4500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [active]);

  const onReset = () => {
    reset();
    go("menu");
  };

  return (
    <section className={`screen ${active ? "active" : ""}`} id="screen-confirm">
      <div className="scroll">
        <div className="confirm-hero">
          <div className="check-wrap">
            <div className="check-circle">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </div>
          </div>
          <div className="eyebrow">Commande confirmée</div>
          <h1>
            Merci <em>{firstName || "—"}</em> !
          </h1>
          <div className="order-no">
            Commande · <b>{orderNo}</b>
          </div>
          <p>
            Le chef a reçu votre commande. Un serveur l'apportera à votre table dans
            quelques instants.
          </p>
        </div>

        <div className="tracker">
          <div className="tracker-head">
            <span className="lbl">Statut de la commande</span>
            <span className="eta">
              Arrivée <b>≈ {eta} min</b>
            </span>
          </div>
          <div className="steps">
            <div className="step done">
              <div className="pt">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </div>
              <div className="txt">Reçue</div>
            </div>
            <div className="step active">
              <div className="pt" />
              <div className="txt">En cuisine</div>
            </div>
            <div className="step">
              <div className="pt" />
              <div className="txt">Servie</div>
            </div>
          </div>
        </div>

        <div className="confirm-card">
          <h3>Récapitulatif</h3>
          <div>
            {cart.map((it) => {
              const d = DISHES.find((x) => x.id === it.id);
              if (!d) return null;
              return (
                <div key={it.uid} className="recap-row">
                  <div className="name">
                    <span className="q">{it.qty}×</span>
                    <b>{d.name}</b>
                  </div>
                  <div className="price">{fmtGNF(d.price * it.qty)}</div>
                </div>
              );
            })}
          </div>
          <div className="recap-total">
            <span className="lbl">Total payé à table</span>
            <span className="amt">{fmtGNF(total)}</span>
          </div>
        </div>

        <div className="confirm-actions">
          <button
            className="btn-pill btn-outline-gold"
            onClick={onReset}
            style={{ width: "100%" }}
          >
            Commander à nouveau
          </button>
          <button
            className="btn-pill btn-ghost"
            onClick={() => toast("Un serveur a été prévenu.")}
            style={{ width: "100%" }}
          >
            Appeler un serveur
          </button>
        </div>
      </div>
    </section>
  );
}
