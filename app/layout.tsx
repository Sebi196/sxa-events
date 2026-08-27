import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "SXA Events",
  description: "Transformăm momentele în amintiri.",
  verification: {
    google: "UpurIbQGVC0FjdOGo4Wpl0Qxya8k4f-H0dpmClK9H",
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
