import type { Category, Dish } from "./types";

export const CATEGORIES: Category[] = [
  { id: "salees",        label: "Salées" },
  { id: "sucrees",       label: "Sucrées" },
  { id: "formules",      label: "Formules" },
  { id: "viennoiseries", label: "Viennoiseries" },
  { id: "oeufs",         label: "Œufs & Sandwichs" },
  { id: "boissons",      label: "Boissons" },
];

export const DISHES: Dish[] = [
  /* ---- SALÉES ---- */
  {
    id: 1, cat: "salees", ph: "ph-1",
    name: "Assiette Bambou",
    desc: "Œuf cuisson au choix, pomme sautée saucisse, salade fraîche haricot blanc.",
    longDesc: "<em>Notre assiette signature.</em> Un œuf cuisson à votre choix, pommes de terre sautées, saucisses grillées, salade fraîche et haricots blancs. Copieux et généreux.",
    price: 100000, badges: ["signature"],
    prep: "20 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 2, cat: "salees", ph: "ph-2",
    name: "Toast Avocat Saumon",
    desc: "Avocat, œufs brouillés, saumon, salade fraîche, brioche.",
    longDesc: "<em>Frais, doré, parfaitement équilibré.</em> Brioche toastée, avocat écrasé, œufs brouillés crémeux, saumon fumé et salade fraîche. Un incontournable de notre brunch.",
    price: 130000, badges: ["signature"],
    prep: "15 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 3, cat: "salees", ph: "ph-3",
    name: "Piya Salade",
    desc: "Avocat, œuf bouilli, concombre, tomate, oignons.",
    longDesc: "<em>La fraîcheur d'une salade composée.</em> Avocat, œuf bouilli, concombre, tomate, oignons rouges et vinaigrette maison. Légère et savoureuse.",
    price: 95000, badges: [],
    prep: "10 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 4, cat: "salees", ph: "ph-4",
    name: "Beef Omelette",
    desc: "Corned beef haché, œufs, salade fraîche, pomme sautée.",
    longDesc: "<em>Une omelette garnie comme on les aime.</em> Corned beef haché, œufs battus, salade fraîche et pommes de terre sautées dorées. Parfait pour les grosses faims.",
    price: 80000, badges: [],
    prep: "15 min", heat: 0, portion: "1 pers.",
  },

  /* ---- SUCRÉES ---- */
  {
    id: 5, cat: "sucrees", ph: "ph-5",
    name: "Pancake Bambou",
    desc: "Crème diplomate, sirop d'érable, amande effilée.",
    longDesc: "<em>Notre pancake le plus gourmand.</em> Trois pancakes moelleux, crème diplomate maison, sirop d'érable et amandes effilées torréfiées.",
    price: 100000, badges: ["signature"],
    prep: "15 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 6, cat: "sucrees", ph: "ph-6",
    name: "Pancake Fruits de Saison",
    desc: "Pancakes, fruits frais de saison, miel.",
    longDesc: "<em>Léger et coloré.</em> Trois pancakes aériens, fruits frais de saison (mangue, banane, ananas), filet de miel local et crème légère.",
    price: 120000, badges: [],
    prep: "15 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 7, cat: "sucrees", ph: "ph-7",
    name: "Brioche Perdue Oréo / Biscoff",
    desc: "Brioche perdue, éclats d'Oréo ou Biscoff, glace vanille.",
    longDesc: "<em>Croustillant dehors, fondant dedans.</em> Brioche perdue, éclats d'Oréo ou Biscoff au choix, boule de glace vanille et caramel beurre salé.",
    price: 140000, badges: ["today"],
    prep: "18 min", heat: 0, portion: "1 pers.",
  },

  /* ---- FORMULES ---- */
  {
    id: 8, cat: "formules", ph: "ph-8",
    name: "Formule Express",
    desc: "Boisson chaude + jus de fruit + viennoiserie + corbeille pain, beurre, confiture.",
    longDesc: "<em>L'essentiel, bien fait.</em> Boisson chaude au choix, jus de fruit frais, une viennoiserie, corbeille à pain, beurre et confitures maison.",
    price: 70000, badges: [],
    prep: "10 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 9, cat: "formules", ph: "ph-9",
    name: "Formule Le Gourmand",
    desc: "Boisson chaude + jus + viennoiserie + pain, beurre, confiture + 2 œufs cuisson au choix.",
    longDesc: "<em>La formule la plus demandée.</em> Boisson chaude, jus de fruit, viennoiserie, corbeille à pain, beurre, confitures et deux œufs à la cuisson de votre choix.",
    price: 100000, badges: ["signature"],
    prep: "15 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 10, cat: "formules", ph: "ph-10",
    name: "Formule Bambou",
    desc: "Formule complète : boisson + jus + corbeille + saucisse fromage + 2 œufs + pommes + salade fruits + viennoiserie.",
    longDesc: "<em>Notre formule signature, pour les grandes faims.</em> Boisson chaude, jus, corbeille à pain beurre confitures, assiette saucisse-fromage, deux œufs, pommes sautées, salade verte, salade de fruits frais et viennoiserie.",
    price: 200000, badges: ["signature", "today"],
    prep: "20 min", heat: 0, portion: "1–2 pers.",
  },

  /* ---- VIENNOISERIES ---- */
  {
    id: 11, cat: "viennoiseries", ph: "ph-11",
    name: "Croissant / Pain Chocolat / Torsade",
    desc: "Viennoiserie fraîche du jour, pur beurre.",
    longDesc: "<em>Sortie du four ce matin.</em> Viennoiserie au choix, pur beurre, préparée chaque jour dans notre atelier.",
    price: 15000, badges: [],
    prep: "2 min", heat: 0, portion: "1 pièce",
  },
  {
    id: 12, cat: "viennoiseries", ph: "ph-12",
    name: "Pancake (à l'unité)",
    desc: "Pancake moelleux, sirop d'érable.",
    longDesc: "<em>À l'unité pour les petits appétits.</em> Un pancake moelleux servi avec un filet de sirop d'érable.",
    price: 60000, badges: [],
    prep: "8 min", heat: 0, portion: "1 pièce",
  },

  /* ---- ŒUFS & SANDWICHS ---- */
  {
    id: 13, cat: "oeufs", ph: "ph-13",
    name: "Œuf au Plat + Saucisse",
    desc: "Œuf au plat, saucisse grillée, pommes de terre sautées.",
    longDesc: "<em>La simplicité bien exécutée.</em> Deux œufs au plat, saucisse grillée et pommes de terre sautées dorées au beurre.",
    price: 75000, badges: [],
    prep: "12 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 14, cat: "oeufs", ph: "ph-14",
    name: "Œufs Brouillés au Saumon",
    desc: "Œufs brouillés crémeux, saumon fumé, pain grillé.",
    longDesc: "<em>Crémeux, fumé, élégant.</em> Œufs brouillés cuits à feu doux, accompagnés de saumon fumé et de tranches de pain grillé.",
    price: 70000, badges: ["signature"],
    prep: "10 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 15, cat: "oeufs", ph: "ph-15",
    name: "Sandwich Poulet / Viande",
    desc: "Pain frais, poulet ou viande grillée, crudités, sauce maison.",
    longDesc: "<em>Fait à la commande, jamais à l'avance.</em> Pain frais du jour, poulet ou viande grillée au choix, crudités croquantes et sauce maison.",
    price: 35000, badges: [],
    prep: "10 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 16, cat: "oeufs", ph: "ph-16",
    name: "Sandwich Omelette",
    desc: "Pain frais, omelette nature, salade.",
    longDesc: "<em>Un classique réconfortant.</em> Pain frais garni d'une omelette nature et de salade verte.",
    price: 30000, badges: [],
    prep: "8 min", heat: 0, portion: "1 pers.",
  },

  /* ---- BOISSONS ---- */
  {
    id: 17, cat: "boissons", ph: "ph-17",
    name: "Cappuccino",
    desc: "Expresso, lait vapeur, mousse onctueuse.",
    longDesc: "<em>Mousse onctueuse, café italien.</em> Expresso double coiffé d'une mousse de lait vapeur, saupoudré de cacao à la demande.",
    price: 30000, badges: [],
    prep: "4 min", heat: 0, portion: "1 tasse",
  },
  {
    id: 18, cat: "boissons", ph: "ph-18",
    name: "Chocolat Chaud",
    desc: "Chocolat noir fondu, lait entier, chantilly maison.",
    longDesc: "<em>Un grand classique, réconfortant.</em> Chocolat noir fondu dans du lait entier chaud, surmonté d'une chantilly maison légère.",
    price: 35000, badges: [],
    prep: "5 min", heat: 0, portion: "1 tasse",
  },
  {
    id: 19, cat: "boissons", ph: "ph-19",
    name: "Thé Marocain",
    desc: "Thé vert à la menthe fraîche, servi traditionnel.",
    longDesc: "<em>Servi comme à Marrakech.</em> Thé vert infusé avec menthe fraîche et sucre de canne, versé en hauteur pour faire mousser.",
    price: 35000, badges: [],
    prep: "6 min", heat: 0, portion: "1 théière",
  },
  {
    id: 20, cat: "boissons", ph: "ph-20",
    name: "Smoothie Fruits de Saison",
    desc: "Fruits frais mixés, yaourt, miel.",
    longDesc: "<em>Vitaminé, selon l'inspiration du matin.</em> Fruits frais de saison mixés minute avec yaourt et miel. Demandez à votre serveur le parfum du jour.",
    price: 75000, badges: ["signature"],
    prep: "5 min", heat: 0, portion: "1 verre",
  },
  {
    id: 21, cat: "boissons", ph: "ph-21",
    name: "Jus de Fruit Frais",
    desc: "Pressé minute, au choix du jour.",
    longDesc: "<em>Pressé minute.</em> Jus de fruit frais, au choix selon l'arrivage : orange, pastèque, ananas, mangue ou gingembre.",
    price: 35000, badges: [],
    prep: "4 min", heat: 0, portion: "1 verre",
  },
];

export const HERO_BG: Record<string, string> = {
  "ph-1":  "linear-gradient(135deg,#6a3a1a,#b97a2b 55%,#e7b864)",
  "ph-2":  "linear-gradient(135deg,#3b2212,#7a3a1e 55%,#c26f3a)",
  "ph-3":  "linear-gradient(135deg,#3a2a14,#8a6a2e 50%,#c9a961)",
  "ph-4":  "linear-gradient(135deg,#1f2a30,#406470 55%,#b8a06a)",
  "ph-5":  "linear-gradient(135deg,#5a2316,#b64428 55%,#e6a05a)",
  "ph-6":  "linear-gradient(135deg,#6a1818,#b03028 55%,#e07858)",
  "ph-7":  "linear-gradient(135deg,#2a1008,#5a2818 55%,#8a4a28)",
  "ph-8":  "linear-gradient(135deg,#6a5828,#b89448 55%,#e0c280)",
  "ph-9":  "linear-gradient(135deg,#5a3018,#9a5830 55%,#c88050)",
  "ph-10": "linear-gradient(135deg,#3a1a08,#7a3a18 55%,#a86838)",
  "ph-11": "linear-gradient(135deg,#7a4a18,#b87838 55%,#d8a060)",
  "ph-12": "linear-gradient(135deg,#8a5830,#c89060 55%,#e8c090)",
  "ph-13": "linear-gradient(135deg,#6a3818,#a06030 55%,#d09060)",
  "ph-14": "linear-gradient(135deg,#8a3820,#c06040 55%,#e09070)",
  "ph-15": "linear-gradient(135deg,#5a3010,#9a5820 55%,#c08050)",
  "ph-16": "linear-gradient(135deg,#8a6838,#c0a870 55%,#d8c898)",
  "ph-17": "linear-gradient(135deg,#180c04,#382010 55%,#684028)",
  "ph-18": "linear-gradient(135deg,#100804,#280c04 55%,#402010)",
  "ph-19": "linear-gradient(135deg,#284818,#5a8038 55%,#90b868)",
  "ph-20": "linear-gradient(135deg,#7a1c10,#c04030 55%,#e07058)",
  "ph-21": "linear-gradient(135deg,#786010,#c0a020 55%,#e8d060)",
};

export const fmtGNF = (n: number): string =>
  n.toLocaleString("fr-FR").replace(/\s/g, "\u202f") + " GNF";
