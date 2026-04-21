"use client";

import { useEffect, useRef } from "react";
import { Badge } from "@/components/Badge";
import { CATEGORIES, DISHES, fmtGNF } from "@/lib/data";
import { cartTotals, useApp } from "@/lib/store";
import { useToast } from "@/lib/toast";
import type { Dish } from "@/lib/types";

export function Menu({ active }: { active: boolean }) {
  const { activeCat, cart, setCat, openDetail, addToCart, go } = useApp();
  const toast = useToast((s) => s.show);
  const cartBtnRef = useRef<HTMLButtonElement | null>(null);
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const prevCount = useRef(0);
  const listRef = useRef<HTMLDivElement | null>(null);

  const { count, total } = cartTotals(cart);

  useEffect(() => {
    const b = badgeRef.current;
    if (!b) return;
    if (count > prevCount.current) {
      b.classList.remove("bump");
      void b.offsetWidth;
      b.classList.add("bump");
    }
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    listRef.current
      ?.querySelectorAll<HTMLElement>(".dish")
      .forEach((el, i) => {
        el.style.animationDelay = `${i * 60}ms`;
      });
  }, [activeCat]);

  const primary = DISHES.filter((d) => d.cat === activeCat);
  const rest = DISHES.filter((d) => d.cat !== activeCat);
  const hasPrimary = primary.length > 0;
  const list = hasPrimary ? primary : rest;

  const onQuickAdd = (d: Dish, btn: HTMLButtonElement) => {
    addToCart(d.id, 1, "");
    btn.classList.remove("added");
    void btn.offsetWidth;
    btn.classList.add("added");
    flyToCart(btn, cartBtnRef.current);
    toast(`${d.name} ajouté.`);
  };

  return (
    <section className={`screen ${active ? "active" : ""}`} id="screen-menu">
      <div className="top-header">
        <div className="brand">
          <span className="eyebrow">Table 07 · Carte</span>
          <span className="name">Le Bambou</span>
        </div>
        <button
          ref={cartBtnRef}
          className="icon-btn"
          onClick={() => go("cart")}
          aria-label="Panier"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 5h2l2.4 10.3a2 2 0 0 0 2 1.7h8.7a2 2 0 0 0 2-1.6L21 8H6" />
            <circle cx="10" cy="20" r="1.4" />
            <circle cx="17" cy="20" r="1.4" />
          </svg>
          <span
            ref={badgeRef}
            className={`cart-badge ${count > 0 ? "show" : ""}`}
          >
            {count}
          </span>
        </button>
      </div>

      <div className="menu-hero">
        <h2>
          Notre <em>carte</em>
        </h2>
        <p>Sélection du chef · printemps</p>
      </div>

      <div className="tabs">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            className={`tab ${c.id === activeCat ? "active" : ""}`}
            onClick={() => setCat(c.id)}
          >
            {c.label}
            {c.id === activeCat ? <span className="check">✓</span> : null}
          </button>
        ))}
      </div>

      <div className="scroll">
        <div className="dish-list" ref={listRef}>
          {list.map((d) => (
            <DishCard key={d.id} d={d} onOpen={() => openDetail(d.id)} onQuickAdd={onQuickAdd} />
          ))}
          {hasPrimary && rest.length > 0 ? (
            <>
              <div
                style={{
                  color: "var(--muted-2)",
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  margin: "16px 2px 6px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 24,
                    height: 1,
                    background: "var(--muted-2)",
                    verticalAlign: "middle",
                    marginRight: 8,
                  }}
                />
                Aussi à la carte
              </div>
              {rest.map((d) => (
                <DishCard key={d.id} d={d} onOpen={() => openDetail(d.id)} onQuickAdd={onQuickAdd} />
              ))}
            </>
          ) : null}
        </div>
      </div>

      <div className={`cart-peek ${count > 0 ? "show" : ""}`} onClick={() => go("cart")}>
        <div className="left">
          <span className="count">{count}</span>
          <span className="label">
            {count} plat{count > 1 ? "s" : ""} <b>{fmtGNF(total)}</b>
          </span>
        </div>
        <span className="go">
          Voir le panier
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </section>
  );
}

function DishCard({
  d,
  onOpen,
  onQuickAdd,
}: {
  d: Dish;
  onOpen: () => void;
  onQuickAdd: (d: Dish, btn: HTMLButtonElement) => void;
}) {
  return (
    <article
      className="dish"
      onClick={(e) => {
        if ((e.target as HTMLElement).closest(".add-btn")) return;
        onOpen();
      }}
    >
      <div className="img">
        <div className={`ph ${d.ph}`} />
      </div>
      <div className="info">
        <div className="row1">
          {d.badges.map((b) => (
            <Badge key={b} kind={b} />
          ))}
        </div>
        <div className="name">{d.name}</div>
        <div className="desc">{d.desc}</div>
        <div className="foot">
          <div className="price">{fmtGNF(d.price)}</div>
          <button
            className="add-btn"
            aria-label="Ajouter"
            onClick={(e) => {
              e.stopPropagation();
              onQuickAdd(d, e.currentTarget);
            }}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}

function flyToCart(fromEl: HTMLElement, toEl: HTMLElement | null) {
  if (!toEl) return;
  const device = document.getElementById("device");
  if (!device) return;
  const fromR = fromEl.getBoundingClientRect();
  const toR = toEl.getBoundingClientRect();
  const devR = device.getBoundingClientRect();
  const puck = document.createElement("div");
  puck.className = "fly-puck";
  const startX = fromR.left - devR.left + fromR.width / 2 - 20;
  const startY = fromR.top - devR.top + fromR.height / 2 - 20;
  const dx = toR.left - devR.left + toR.width / 2 - 20 - startX;
  const dy = toR.top - devR.top + toR.height / 2 - 20 - startY;
  puck.style.left = `${startX}px`;
  puck.style.top = `${startY}px`;
  puck.style.setProperty("--dx", `${dx}px`);
  puck.style.setProperty("--dy", `${dy}px`);
  device.appendChild(puck);
  setTimeout(() => puck.remove(), 750);
}
