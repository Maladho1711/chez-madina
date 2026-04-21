export type CategoryId = "salees" | "sucrees" | "formules" | "viennoiseries" | "oeufs" | "boissons";
export type BadgeKind = "signature" | "spicy" | "today";
export type PhKey = "ph-1" | "ph-2" | "ph-3" | "ph-4" | "ph-5";

export interface Category {
  id: CategoryId;
  label: string;
}

export interface Dish {
  id: number;
  cat: CategoryId;
  ph: PhKey;
  name: string;
  desc: string;
  longDesc: string;
  price: number;
  badges: BadgeKind[];
  prep: string;
  heat: 0 | 1 | 2 | 3;
  portion: string;
}

export interface CartItem {
  uid: number;
  id: number;
  qty: number;
  note: string;
}

export type ScreenName = "welcome" | "menu" | "detail" | "cart" | "confirm";
