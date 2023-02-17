import { Cormorant_Garamond } from "@next/font/google";
import styles from "./page.module.css";
import Hero from "@/components/Hero";

const garamond = Cormorant_Garamond({
  weight: ["400", "700", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={garamond.className}>
      <Hero />
    </main>
  );
}
