import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "SXA Events",
  description: "Transformăm momentele în amintiri.",
  verification: {
    google: "Uptu7BQGVC0FjdOGrO41pHOQyxa8k4f-hDqwmCL9KhI",
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