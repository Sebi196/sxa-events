import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "SXA Events | Servicii premium pentru evenimente în București",
  description:
    "SXA Events oferă servicii premium pentru evenimente în București: cabină foto, platformă 360, Candy Bar, Mini-Pancakes Bar, fântână de ciocolată și decoruri pentru evenimente.",
  keywords: [
    "SXA Events",
    "evenimente București",
    "cabină foto București",
    "platformă 360 București",
    "Candy Bar București",
    "Mini Pancakes București",
    "servicii evenimente București",
    "nuntă București",
    "evenimente private București",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  );
}