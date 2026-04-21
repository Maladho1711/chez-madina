import type { BadgeKind } from "@/lib/types";

const LABELS: Record<BadgeKind, string> = {
  signature: "★ Signature",
  spicy: "Épicé",
  today: "Plat du jour",
};

export function Badge({ kind }: { kind: BadgeKind }) {
  return <span className={`badge ${kind}`}>{LABELS[kind]}</span>;
}
