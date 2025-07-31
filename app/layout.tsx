import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GCScript } from "next-goatcounter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GCScript siteUrl={"https://dzien.goatcounter.com/count"} />
        {children}
      </body>
    </html>
  );
}
