import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoinSight | Crypto Dashboard",
  description: "Precision Dashboards for Smarter Crypto Decisions. Track cryptocurrency prices, market trends, and performance in real-time.",
  keywords: ["crypto", "cryptocurrency", "bitcoin", "ethereum", "dashboard", "market", "prices", "tracking"],
  authors: [{ name: "Nikhil Singh" }],
  creator: "Nikhil Singh",
  publisher: "CoinSight",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "CoinSight | Crypto Dashboard",
    description: "Precision Dashboards for Smarter Crypto Decisions",
    url: "https://coinsight.example.com",
    siteName: "CoinSight",
    images: [
      {
        url: "@public/logo.png",
        width: 800,
        height: 600,
        alt: "CoinSight Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoinSight | Crypto Dashboard",
    description: "Precision Dashboards for Smarter Crypto Decisions",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className="antialiased bg-black text-white"
        style={{ 
          scrollBehavior: 'smooth',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}
      >
        {children}
      </body>
    </html>
  );
}
