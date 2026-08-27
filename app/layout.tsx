import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-1814357249"
        />

        <Script id="google-ads">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-1814357249');
          `}
        </Script>
      </head>

      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}