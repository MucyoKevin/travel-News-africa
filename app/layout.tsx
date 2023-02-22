import { Cormorant_Garamond } from "@next/font/google";

import "./globals.css";
import styles from "../src/styles/page.module.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const garamond = Cormorant_Garamond({
  weight: ["400", "500", "700", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Travel Nation Africa</title>
      </head>
      <body className="transition-all duration-700">
        <Header />
        <main className={`max-w-screen-xl mx-auto ${garamond.className}`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
