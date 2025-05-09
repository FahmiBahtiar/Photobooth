import type { Metadata } from "next";
import "./globals.css";
import { PhotoProvider } from "./context/PhotoContext";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Boothkicot | Online Photo Strip Creator",
  description: "Turn your home into a photobooth with exclusive templates, trendy filters, and fun stickers—beautiful results every time",
  keywords: ["photobooth", "photobooth", "online photobooth", "照相亭", "在线照相亭", "免费照相亭"],
  authors: [{ name: "Bekicot Groups" }],
  icons: {
    icon: '/icon.jpg',
    shortcut: '/icon.jpg',
    apple: '/icon.jpg',
  },
  openGraph: {
    title: "Boothkicot | Online Photo Strip Creator",
    description: "Turn your home into a photobooth with exclusive templates, trendy filters, and fun stickers—beautiful results every time",
    url: "https://bekicot.app",
    siteName: "Boothkicot",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/icon.jpg',
        width: 400,
        height: 400,
        alt: 'Bekicot Groups Logo',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XFXR1XMKSS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XFXR1XMKSS');
          `}
        </Script>
        <PhotoProvider>
          {children}
        </PhotoProvider>
        <Analytics />
      </body>
    </html>
  );
}
