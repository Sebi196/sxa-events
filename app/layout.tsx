import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: {
    default:
      "SXS Events | Platformă 360, Cabină Foto, Candy Bar și Servicii pentru Evenimente",
    template: "%s | SXS Events",
  },

  description:
    "SXS Events oferă platformă 360, cabină foto, candy bar, mini pancakes, oglindă selfie, audio guestbook și servicii complete pentru nunți, botezuri, petreceri și evenimente.",

  keywords: [
    "SXS Events",
    "sxaevents",
    "platformă 360",
    "platforma 360",
    "cabină foto",
    "cabina foto",
    "candy bar",
    "servicii evenimente",
    "servicii nuntă",
    "nuntă",
    "botez",
    "oglindă selfie",
    "audio guestbook",
    "mini pancakes",
    "photo corner",
  ],

  verification: {
    google: "UpurIbQGVC0FjdOGo4Wpl0Qxya8k4f-H0dpmClK9H",
  },

  openGraph: {
    title: "SXS Events | Servicii pentru nunți și evenimente",
    description:
      "Platformă 360, cabină foto, candy bar, mini pancakes, oglindă selfie și multe alte servicii pentru evenimentul tău.",
    type: "website",
    locale: "ro_RO",
    url: "https://www.sxaevents.ro",
    siteName: "SXS Events",
  },

  robots: {
    index: true,
    follow: true,
  },
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
