"use client";

import { create } from "zustand";
import type { CartItem, CategoryId, Dish, ScreenName } from "./types";
import { DISHES } from "./data";

interface DetailState {
  dish: Dish;
  qty: number;
  note: string;
  fav: boolean;
}

interface AppState {
  screen: ScreenName;
  activeCat: CategoryId;
  cart: CartItem[];
  detail: DetailState | null;
  firstName: string;
  orderNo: string;

  go: (s: ScreenName) => void;
  setCat: (c: CategoryId) => void;
  openDetail: (id: number) => void;
  setDetailQty: (delta: number) => void;
  setDetailNote: (note: string) => void;
  toggleFav: () => void;
  addToCart: (id: number, qty?: number, note?: string) => void;
  removeFromCart: (uid: number) => void;
  changeCartQty: (uid: number, delta: number) => void;
  setFirstName: (name: string) => void;
  reset: () => void;
}

const newOrderNo = (): string => {
  const n = Math.floor(Math.random() * 900 + 100);
  return `#B-0${n}`;
};

export const useApp = create<AppState>((set, get) => ({
  screen: "welcome",
  activeCat: "salees",
  cart: [],
  detail: null,
  firstName: "",
  orderNo: newOrderNo(),

  go: (s) => set({ screen: s }),
  setCat: (c) => set({ activeCat: c }),

  openDetail: (id) => {
    const dish = DISHES.find((d) => d.id === id);
    if (!dish) return;
    set({ detail: { dish, qty: 1, note: "", fav: false }, screen: "detail" });
  },

  setDetailQty: (delta) => {
    const cur = get().detail;
    if (!cur) return;
    set({ detail: { ...cur, qty: Math.max(1, cur.qty + delta) } });
  },

  setDetailNote: (note) => {
    const cur = get().detail;
    if (!cur) return;
    set({ detail: { ...cur, note } });
  },

  toggleFav: () => {
    const cur = get().detail;
    if (!cur) return;
    set({ detail: { ...cur, fav: !cur.fav } });
  },

  addToCart: (id, qty = 1, note = "") => {
    const cart = [...get().cart];
    const existing = cart.find((c) => c.id === id && (c.note || "") === (note || ""));
    if (existing) {
      existing.qty += qty;
      set({ cart });
    } else {
      cart.push({ uid: Date.now() + Math.random(), id, qty, note });
      set({ cart });
    }
  },

  removeFromCart: (uid) => set({ cart: get().cart.filter((c) => c.uid !== uid) }),

  changeCartQty: (uid, delta) => {
    const cart = get().cart.map((c) =>
      c.uid === uid ? { ...c, qty: Math.max(1, c.qty + delta) } : c,
    );
    set({ cart });
  },

  setFirstName: (firstName) => set({ firstName }),

  reset: () => set({ cart: [], firstName: "", orderNo: newOrderNo() }),
}));

export const cartTotals = (cart: CartItem[]) => {
  const sub = cart.reduce((acc, it) => {
    const d = DISHES.find((x) => x.id === it.id);
    return acc + (d?.price ?? 0) * it.qty;
  }, 0);
  const service = Math.round(sub * 0.1);
  const total = sub + service;
  const count = cart.reduce((a, c) => a + c.qty, 0);
  return { sub, service, total, count };
};
