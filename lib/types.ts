export type CategoryId = "salees" | "sucrees" | "formules" | "viennoiseries" | "oeufs" | "boissons";
export type BadgeKind = "signature" | "spicy" | "today";
export type PhKey =
  | "ph-1" | "ph-2" | "ph-3" | "ph-4" | "ph-5" | "ph-6" | "ph-7"
  | "ph-8" | "ph-9" | "ph-10" | "ph-11" | "ph-12" | "ph-13" | "ph-14"
  | "ph-15" | "ph-16" | "ph-17" | "ph-18" | "ph-19" | "ph-20" | "ph-21";

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
