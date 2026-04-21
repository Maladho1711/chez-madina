import dynamic from "next/dynamic";

const ChezMadina = dynamic(
  () => import("@/components/ChezMadina").then((m) => m.ChezMadina),
  { ssr: false }
);

export default function Page() {
  return <ChezMadina />;
}
