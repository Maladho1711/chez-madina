"use client";

import { useState } from "react";
import { DISHES, fmtGNF } from "@/lib/data";
import { cartTotals, useApp } from "@/lib/store";
import { useToast } from "@/lib/toast";

export function Cart({ active }: { active: boolean }) {
  const {
    cart,
    firstName,
    setFirstName,
    changeCartQty,
    removeFromCart,
    go,
  } = useApp();
  const toast = useToast((s) => s.show);
  const [focused, setFocused] = useState(false);
  const [err, setErr] = useState(false);
  const [hint, setHint] = useState("");
  const [removingUid, setRemovingUid] = useState<number | null>(null);

  const { sub, service, total, count } = cartTotals(cart);

  const onChangeName = (value: string) => {
    setFirstName(value);
    if (value.trim()) {
      setErr(false);
      setHint("");
    }
  };

  const onRemove = (uid: number) => {
    setRemovingUid(uid);
    setTimeout(() => {
      removeFromCart(uid);
      setRemovingUid(null);
    }, 320);
  };

  const onConfirm = () => {
    if (cart.length === 0) {
      toast("Votre panier est vide.");
      return;
    }
    if (!firstName.trim()) {
      setErr(true);
      setHint("Merci d'indiquer votre prénom.");
      return;
    }
    go("confirm");
  };

  const confirmDisabled = cart.length === 0;

  return (
    <section className={`screen ${active ? "active" : ""}`} id="screen-cart">
      <div className="cart-header">
        <button className="back-btn" onClick={() => go("menu")} aria-label="Retour">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="title">
          <div className="eyebrow">Table 07</div>
          <div className="name">Votre commande</div>
        </div>
      </div>

      <div className="cart-sub">
        <h2>
          Votre <em>table</em>
        </h2>
        <div className="count">
          {count} plat{count > 1 ? "s" : ""}
        </div>
      </div>

      <div className="scroll">
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div className="illus">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 5h2l2.4 10.3a2 2 0 0 0 2 1.7h8.7a2 2 0 0 0 2-1.6L21 8H6" />
                  <circle cx="10" cy="20" r="1.4" />
                  <circle cx="17" cy="20" r="1.4" />
                </svg>
              </div>
              <h3>Votre panier est vide</h3>
              <p>Composez votre repas depuis la carte.</p>
            </div>
          ) : (
            cart.map((it) => {
              const d = DISHES.find((x) => x.id === it.id);
              if (!d) return null;
              return (
                <div
                  key={it.uid}
                  className={`cart-item ${removingUid === it.uid ? "removing" : ""}`}
                >
                  <div className="img">
                    <div className={`ph ${d.ph}`} />
                  </div>
                  <div className="info">
                    <div>
                      <div className="name">{d.name}</div>
                      {it.note ? <div className="note">“{it.note}”</div> : null}
                    </div>
                    <div className="row-bot">
                      <div className="qty-mini">
                        <button onClick={() => changeCartQty(it.uid, -1)}>−</button>
                        <span className="n">{it.qty}</span>
                        <button onClick={() => changeCartQty(it.uid, 1)}>+</button>
                      </div>
                    </div>
                  </div>
                  <div className="line-price">{fmtGNF(d.price * it.qty)}</div>
                  <button
                    className="remove"
                    onClick={() => onRemove(it.uid)}
                    aria-label="Supprimer"
                  >
                    ×
                  </button>
                </div>
              );
            })
          )}
        </div>

        <div className="name-field">
          <label htmlFor="first-name">Votre prénom</label>
          <div className={`wrap ${focused ? "focused" : ""} ${err ? "err" : ""}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A8A8A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
            </svg>
            <input
              id="first-name"
              type="text"
              placeholder="Ex : Aminata"
              autoComplete="given-name"
              value={firstName}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChange={(e) => onChangeName(e.target.value)}
            />
          </div>
          <div className="hint">{hint}</div>
        </div>

        <div className="summary">
          <div className="row">
            <span>Sous-total</span>
            <span>{fmtGNF(sub)}</span>
          </div>
          <div className="row">
            <span>Service (10%)</span>
            <span>{fmtGNF(service)}</span>
          </div>
          <div className="total">
            <span className="lbl">Total</span>
            <span className="amt">{fmtGNF(total)}</span>
          </div>
        </div>

        <div className="cart-confirm">
          <button
            className="btn-pill btn-gold"
            onClick={onConfirm}
            style={{
              width: "100%",
              opacity: confirmDisabled ? 0.4 : 1,
              pointerEvents: confirmDisabled ? "none" : "auto",
            }}
          >
            Confirmer ma commande
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
