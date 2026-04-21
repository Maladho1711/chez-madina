import type { Category, Dish } from "./types";

export const CATEGORIES: Category[] = [
  { id: "entrees", label: "Entrées" },
  { id: "plats", label: "Plats" },
  { id: "grillades", label: "Grillades" },
  { id: "desserts", label: "Desserts" },
  { id: "boissons", label: "Boissons" },
];

export const DISHES: Dish[] = [
  {
    id: 1, cat: "plats", ph: "ph-1",
    name: "Poulet Yassa confit",
    desc: "Poulet fermier mariné 24 h au citron vert et confit doucement sur lit d'oignons caramélisés.",
    longDesc:
      "<em>Un classique sénégalais, sublimé.</em> Cuisse de poulet fermier de Kindia, marinée 24 heures au citron vert, gingembre et piment jaune, puis confite à basse température jusqu'à en devenir fondante. Servie sur son lit d'oignons caramélisés au vinaigre et accompagnée d'un riz basmati parfumé au laurier.",
    price: 185000, badges: ["signature"],
    prep: "25 min", heat: 1, portion: "1 pers.",
  },
  {
    id: 2, cat: "plats", ph: "ph-2",
    name: "Riz gras au bœuf braisé",
    desc: "Riz cuit au bouillon d'os et tomates grillées, bœuf braisé 6 h, légumes racines.",
    longDesc:
      "<em>La générosité d'un plat de famille.</em> Notre riz gras est cuit lentement dans un bouillon d'os rôtis, tomates grillées et piments frais. Nous le servons avec une épaule de bœuf braisée six heures, carottes, patate douce et chou local.",
    price: 165000, badges: ["spicy"],
    prep: "30 min", heat: 2, portion: "1 pers.",
  },
  {
    id: 3, cat: "grillades", ph: "ph-3",
    name: "Maïé royal au gigot",
    desc: "Gigot d'agneau fumé au bois de fromager, semoule de mil crémeuse, jus corsé.",
    longDesc:
      "<em>La pièce du jour, la plus convoitée.</em> Gigot d'agneau élevé en Moyenne Guinée, fumé à froid au bois de fromager puis rôti entier. Tranché minute à votre table et accompagné d'une semoule de mil crémeuse, beurre noisette et jus court relevé au néré.",
    price: 210000, badges: ["today"],
    prep: "40 min", heat: 1, portion: "1–2 pers.",
  },
  {
    id: 4, cat: "grillades", ph: "ph-4",
    name: "Daurade à la braise",
    desc: "Daurade entière à la braise, beurre de yassa, riz noir et citron confit.",
    longDesc:
      "<em>Pêche du matin, grillée à la minute.</em> Daurade entière pêchée à Boulbinet, marinée à l'ail, persil et piment, puis cuite à la braise de bois de manguier. Servie avec un beurre de yassa, un riz noir vénéré et du citron confit maison.",
    price: 195000, badges: ["spicy"],
    prep: "22 min", heat: 2, portion: "1 pers.",
  },
  {
    id: 5, cat: "plats", ph: "ph-5",
    name: "Thiéboudienne royale",
    desc: "Riz rouge au mérou, légumes mijotés, bouillon de poisson séché, piment long.",
    longDesc:
      "<em>Notre version du plat national.</em> Riz parfumé au concentré de tomate et bouillon de poisson séché (yeet), mérou rôti, manioc, aubergine amère, carotte, chou et piment long. Un plat qui cuit en fond de cocotte, pendant que l'on sale la conversation.",
    price: 175000, badges: ["signature"],
    prep: "35 min", heat: 2, portion: "1 pers.",
  },
];

export const HERO_BG: Record<string, string> = {
  "ph-1": "linear-gradient(135deg,#6a3a1a,#b97a2b 55%,#e7b864)",
  "ph-2": "linear-gradient(135deg,#3b2212,#7a3a1e 55%,#c26f3a)",
  "ph-3": "linear-gradient(135deg,#3a2a14,#8a6a2e 50%,#c9a961)",
  "ph-4": "linear-gradient(135deg,#1f2a30,#406470 55%,#b8a06a)",
  "ph-5": "linear-gradient(135deg,#5a2316,#b64428 55%,#e6a05a)",
};

export const fmtGNF = (n: number): string =>
  n.toLocaleString("fr-FR").replace(/\s/g, " ") + " GNF";
