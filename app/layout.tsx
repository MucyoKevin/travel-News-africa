import { Cormorant_Garamond, Libre_Baskerville } from "@next/font/google";

import "./globals.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const garamond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormarant",
  subsets: ["latin"],
});

const baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--font-baskerville",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${baskerville.variable} ${garamond.variable}`}>
      <head>
        <title>Travel Nation Africa</title>
      </head>
      <body>
        <Header />
        <main className={`max-w-screen-xl mx-auto`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
