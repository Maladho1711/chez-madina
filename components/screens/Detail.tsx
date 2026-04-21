"use client";

import { Badge } from "@/components/Badge";
import { CATEGORIES, HERO_BG, fmtGNF } from "@/lib/data";
import { useApp } from "@/lib/store";
import { useToast } from "@/lib/toast";

export function Detail({ active }: { active: boolean }) {
  const { detail, go, setDetailQty, setDetailNote, toggleFav, addToCart } = useApp();
  const toast = useToast((s) => s.show);

  if (!detail) {
    return <section className={`screen ${active ? "active" : ""}`} id="screen-detail" />;
  }

  const { dish, qty, note, fav } = detail;
  const heroBg = HERO_BG[dish.ph];
  const catLabel = CATEGORIES.find((c) => c.id === dish.cat)?.label ?? "";

  const heatCells = Array.from({ length: 3 }, (_, i) =>
    i < dish.heat ? <span key={i}>▲</span> : <span key={i} className="off">▲</span>,
  );

  const onAdd = () => {
    addToCart(dish.id, qty, note);
    toast(`${qty} × ${dish.name} ajouté.`);
    go("menu");
  };

  const onToggleFav = () => {
    toggleFav();
    toast(!fav ? "Ajouté à vos favoris." : "Retiré des favoris.");
  };

  return (
    <section className={`screen ${active ? "active" : ""}`} id="screen-detail">
      <div className="detail-hero" style={{ background: heroBg }}>
        <div className="hero-actions">
          <button className="icon-btn" onClick={() => go("menu")} aria-label="Retour">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className={`icon-btn fav-btn ${fav ? "on" : ""}`}
            onClick={onToggleFav}
            aria-label="Favori"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
            </svg>
          </button>
        </div>
        <div className="hero-cat">{catLabel}</div>
      </div>

      <div className="detail-body">
        <div className="detail-title">
          <h1>{dish.name}</h1>
          <div className="detail-price">{fmtGNF(dish.price)}</div>
        </div>

        <div className="detail-badges">
          {dish.badges.map((b) => (
            <Badge key={b} kind={b} />
          ))}
        </div>

        <div
          className="detail-desc"
          dangerouslySetInnerHTML={{ __html: dish.longDesc }}
        />

        <div className="meta">
          <div className="cell">
            <span className="k">Préparation</span>
            <span className="v">{dish.prep}</span>
          </div>
          <div className="cell">
            <span className="k">Piquant</span>
            <span className="v flame">
              {heatCells.length > 0 ? heatCells : <span className="off">▲▲▲</span>}
            </span>
          </div>
          <div className="cell">
            <span className="k">Portion</span>
            <span className="v">{dish.portion}</span>
          </div>
        </div>

        <div className="note-field">
          <label htmlFor="detail-note">Note pour la cuisine</label>
          <textarea
            id="detail-note"
            placeholder="Allergies, cuisson, sans piment…"
            value={note}
            onChange={(e) => setDetailNote(e.target.value)}
          />
        </div>
      </div>

      <div className="detail-footer">
        <div className="qty">
          <button onClick={() => setDetailQty(-1)} aria-label="Diminuer">
            −
          </button>
          <span className="n">{qty}</span>
          <button onClick={() => setDetailQty(1)} aria-label="Augmenter">
            +
          </button>
        </div>
        <button className="btn-pill btn-gold" onClick={onAdd}>
          <span>Ajouter · {fmtGNF(dish.price * qty)}</span>
        </button>
      </div>
    </section>
  );
}
