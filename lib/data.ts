import type { Category, Dish } from "./types";

export const CATEGORIES: Category[] = [
  { id: "salees",       label: "Salées" },
  { id: "sucrees",      label: "Sucrées" },
  { id: "formules",     label: "Formules" },
  { id: "viennoiseries",label: "Viennoiseries" },
  { id: "oeufs",        label: "Œufs & Sandwichs" },
  { id: "boissons",     label: "Boissons" },
];

export const DISHES: Dish[] = [
  /* ---- SALÉES ---- */
  {
    id: 1, cat: "salees", ph: "ph-1",
    name: "Assiette Bambou",
    desc: "Œuf cuisson au choix, pomme sautée saucisse, salade fraîche haricot blanc.",
    longDesc: "<em>L'assiette signature de la maison.</em> Œuf préparé à votre goût — plat, brouillé ou omelette — accompagné de pommes sautées dorées, saucisse grillée et salade fraîche haricot blanc.",
    price: 100000, badges: ["signature"],
    prep: "15 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 2, cat: "salees", ph: "ph-2",
    name: "Piya Salade",
    desc: "Avocat, œuf bouilli, concombre, tomate, oignons.",
    longDesc: "<em>Fraîche et généreuse.</em> Une salade composée à base d'avocat mûr, œuf dur, concombre croquant, tomates fraîches et oignons doux. Assaisonnée d'un filet d'huile d'olive.",
    price: 95000, badges: [],
    prep: "10 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 3, cat: "salees", ph: "ph-3",
    name: "Béef Omelette",
    desc: "Corned beef haché, œufs, salade fraîche, pomme sautée.",
    longDesc: "<em>Généreux et savoureux.</em> Omelette moelleuse farcie au corned beef haché, servie avec une salade fraîche et des pommes de terre sautées dorées.",
    price: 80000, badges: [],
    prep: "12 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 4, cat: "salees", ph: "ph-4",
    name: "Toast Avocat Saumon",
    desc: "Avocat, œufs brouillés, saumon, salade fraîche, brioche.",
    longDesc: "<em>Le brunch de prestige.</em> Brioche toastée garnie d'avocat écrasé, saumon fumé, œufs brouillés crémeux et salade fraîche. Un accord irrésistible.",
    price: 130000, badges: ["today"],
    prep: "15 min", heat: 0, portion: "1 pers.",
  },

  /* ---- SUCRÉES ---- */
  {
    id: 5, cat: "sucrees", ph: "ph-5",
    name: "Pancake Bambou",
    desc: "Crème diplomate, sirop d'érable, amande effilée.",
    longDesc: "<em>Notre pancake signature.</em> Moelleux pancakes nappés de crème diplomate légère, filet de sirop d'érable pur et amandes effilées dorées.",
    price: 100000, badges: ["signature"],
    prep: "12 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 6, cat: "sucrees", ph: "ph-1",
    name: "Pancake Fruits de Saison",
    desc: "Pancakes garnis de fruits frais de saison.",
    longDesc: "<em>Coloré et vitaminé.</em> Nos pancakes moelleux accompagnés d'une sélection de fruits frais de saison, selon arrivage du matin.",
    price: 120000, badges: [],
    prep: "12 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 7, cat: "sucrees", ph: "ph-2",
    name: "Brioche Perdue",
    desc: "Nutella, boule de glace, caramel.",
    longDesc: "<em>Douceur absolue.</em> Brioche dorée au beurre, garnie de Nutella fondant, d'une boule de glace et d'un coulis de caramel maison.",
    price: 100000, badges: [],
    prep: "10 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 8, cat: "sucrees", ph: "ph-3",
    name: "Brioche Perdue Oréo / Biscoff",
    desc: "Brioche dorée, crème Oréo ou Biscoff, caramel.",
    longDesc: "<em>L'indulgence du week-end.</em> Brioche perdue généreusement garnie de crème Oréo ou Biscoff selon votre choix, avec caramel coulant.",
    price: 140000, badges: ["spicy"],
    prep: "10 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 9, cat: "sucrees", ph: "ph-4",
    name: "Menu Petit Gourmand",
    desc: "Pancake / crêpe, œuf, saucisses, pommes sautées, frites, jus de fruit.",
    longDesc: "<em>Le menu complet pour commencer la journée.</em> Pancake ou crêpe, œuf cuisson au choix, saucisses grillées, pommes sautées ou frites, et un jus de fruit frais.",
    price: 100000, badges: [],
    prep: "20 min", heat: 0, portion: "1 pers.",
  },

  /* ---- FORMULES ---- */
  {
    id: 10, cat: "formules", ph: "ph-5",
    name: "Formule Express",
    desc: "Boisson chaude + jus de fruit + viennoiserie + corbeille pain, beurre, confiture.",
    longDesc: "<em>Le classique du matin.</em> Une boisson chaude au choix, un jus de fruit frais, une viennoiserie et une corbeille de pain accompagnée de beurre et confiture.",
    price: 70000, badges: [],
    prep: "10 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 11, cat: "formules", ph: "ph-1",
    name: "Formule Le Gourmand",
    desc: "Boisson chaude + jus + viennoiserie + corbeille pain + 2 œufs cuisson au choix.",
    longDesc: "<em>Pour les appétits généreux.</em> Boisson chaude, jus de fruit, viennoiserie, corbeille de pain beurre confiture et 2 œufs préparés à votre convenance.",
    price: 100000, badges: [],
    prep: "15 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 12, cat: "formules", ph: "ph-2",
    name: "Formule Américaine",
    desc: "Boisson chaude + jus + pancake sirop d'érable + 2 œufs cuisson au choix.",
    longDesc: "<em>Le brunch à l'américaine.</em> Boisson chaude, jus de fruit frais, pancake au sirop d'érable et 2 œufs cuisson au choix.",
    price: 100000, badges: [],
    prep: "15 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 13, cat: "formules", ph: "ph-3",
    name: "Formule Bambou",
    desc: "Formule complète : boisson + jus + pain + saucisse fromage + 2 œufs + pommes + salade fruits + viennoiserie.",
    longDesc: "<em>La formule ultime.</em> Boisson chaude, jus de fruit, corbeille de pain beurre confiture, assiette saucisse fromage, 2 œufs cuisson au choix, pommes sautées, salade de fruits et viennoiserie.",
    price: 200000, badges: ["signature", "today"],
    prep: "20 min", heat: 0, portion: "1 pers.",
  },

  /* ---- VIENNOISERIES ---- */
  {
    id: 14, cat: "viennoiseries", ph: "ph-4",
    name: "Croissant / Pain Chocolat / Torsade",
    desc: "Viennoiseries pur beurre au choix.",
    longDesc: "<em>Fraîches du matin.</em> Croissant feuilleté, pain au chocolat ou torsade pur beurre. Croustillantes à l'extérieur, fondantes à l'intérieur.",
    price: 15000, badges: [],
    prep: "2 min", heat: 0, portion: "1 pièce",
  },
  {
    id: 15, cat: "viennoiseries", ph: "ph-5",
    name: "Pancake",
    desc: "Pancake nature, servi avec beurre et sirop d'érable.",
    longDesc: "<em>Simple et parfait.</em> Pancake moelleux servi avec beurre frais et sirop d'érable. La base, sublimée.",
    price: 60000, badges: [],
    prep: "8 min", heat: 0, portion: "1 pers.",
  },

  /* ---- ŒUFS & SANDWICHS ---- */
  {
    id: 16, cat: "oeufs", ph: "ph-1",
    name: "Œuf au Plat + Saucisse",
    desc: "Œuf au plat, saucisse grillée, pommes sautées.",
    longDesc: "<em>La valeur sûre.</em> Œuf au plat bien cuit, saucisse dorée à la poêle et pommes de terre sautées croustillantes.",
    price: 75000, badges: [],
    prep: "10 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 17, cat: "oeufs", ph: "ph-2",
    name: "Œuf Brouillé au Saumon",
    desc: "Œufs brouillés crémeux, saumon fumé.",
    longDesc: "<em>L'élégance du brunch.</em> Œufs brouillés préparés lentement pour une texture crémeuse, accompagnés de tranches de saumon fumé.",
    price: 70000, badges: [],
    prep: "10 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 18, cat: "oeufs", ph: "ph-3",
    name: "Œuf au Plat ou Omelette",
    desc: "Œuf au plat ou omelette nature.",
    longDesc: "<em>Simple et bien fait.</em> Œuf au plat doré ou omelette moelleuse, selon votre préférence.",
    price: 45000, badges: [],
    prep: "8 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 19, cat: "oeufs", ph: "ph-4",
    name: "Sandwich Poulet / Viande",
    desc: "Sandwich garni de poulet ou viande, salade, tomate.",
    longDesc: "<em>Consistant et savoureux.</em> Pain moelleux garni de poulet rôti ou viande, salade fraîche, tomate et sauce maison.",
    price: 35000, badges: [],
    prep: "8 min", heat: 0, portion: "1 pers.",
  },
  {
    id: 20, cat: "oeufs", ph: "ph-5",
    name: "Sandwich Omelette",
    desc: "Sandwich à l'omelette, garni selon le marché.",
    longDesc: "<em>Rapide et rassasiant.</em> Omelette moelleuse dans un pain brioche, avec garniture fraîche.",
    price: 30000, badges: [],
    prep: "8 min", heat: 0, portion: "1 pers.",
  },

  /* ---- BOISSONS ---- */
  {
    id: 21, cat: "boissons", ph: "ph-1",
    name: "Cappuccino",
    desc: "Espresso, lait chaud moussé.",
    longDesc: "<em>L'incontournable.</em> Un espresso corsé surmonté d'une belle mousse de lait crémeuse.",
    price: 30000, badges: [],
    prep: "3 min", heat: 0, portion: "1 tasse",
  },
  {
    id: 22, cat: "boissons", ph: "ph-2",
    name: "Expresso",
    desc: "Café expresso court et intense.",
    longDesc: "<em>Pour bien commencer.</em> Café expresso préparé sur grains fraîchement moulus.",
    price: 30000, badges: [],
    prep: "2 min", heat: 0, portion: "1 tasse",
  },
  {
    id: 23, cat: "boissons", ph: "ph-3",
    name: "Chocolat Chaud",
    desc: "Chocolat chaud onctueux.",
    longDesc: "<em>Douceur réconfortante.</em> Chocolat chaud préparé avec du cacao de qualité, lait entier chaud.",
    price: 35000, badges: [],
    prep: "5 min", heat: 0, portion: "1 tasse",
  },
  {
    id: 24, cat: "boissons", ph: "ph-4",
    name: "Thé / Thé Marocain",
    desc: "Thé nature ou thé marocain à la menthe.",
    longDesc: "<em>Sérénité dans la tasse.</em> Thé nature ou thé marocain à la menthe fraîche et sucre, préparé à la tradition.",
    price: 20000, badges: [],
    prep: "5 min", heat: 0, portion: "1 théière",
  },
  {
    id: 25, cat: "boissons", ph: "ph-5",
    name: "Smoothie Fruits de Saison",
    desc: "Smoothie 100% fruits frais selon la saison.",
    longDesc: "<em>Plein de vitamines.</em> Smoothie préparé à la minute avec les fruits frais du jour, sans sucre ajouté.",
    price: 75000, badges: ["signature"],
    prep: "5 min", heat: 0, portion: "1 verre",
  },
  {
    id: 26, cat: "boissons", ph: "ph-1",
    name: "Jus de Fruit",
    desc: "Jus de fruit frais pressé.",
    longDesc: "<em>Fraîcheur naturelle.</em> Jus de fruit frais pressé selon disponibilité — orange, ananas, goyave ou bissap.",
    price: 35000, badges: [],
    prep: "3 min", heat: 0, portion: "1 verre",
  },
];

export const HERO_BG: Record<string, string> = {
  "ph-1": "linear-gradient(135deg,#5c2d0a,#a05820 55%,#d4874a)",
  "ph-2": "linear-gradient(135deg,#3a1f0a,#7a4020 55%,#c26f3a)",
  "ph-3": "linear-gradient(135deg,#2a1a08,#6a4018 50%,#b07830)",
  "ph-4": "linear-gradient(135deg,#1a1008,#504020 55%,#908050)",
  "ph-5": "linear-gradient(135deg,#3a1a10,#8a4020 55%,#d06030)",
};

export const fmtGNF = (n: number): string =>
  n.toLocaleString("fr-FR").replace(/\s/g, " ") + " GNF";
