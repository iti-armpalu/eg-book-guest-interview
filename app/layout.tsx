import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const josefinSans = Josefin_Sans({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-josefinSans",
});

// Font files can be colocated inside of `app`
const fonsecaMedium = localFont({
  src: "./fonseca/Fonseca-Medium.otf",
  display: "swap",
  variable: "--font-fonseca-medium",
});

const fonsecaLight = localFont({
  src: "./fonseca/Fonseca-Light.otf",
  display: "swap",
  variable: "--font-fonseca-light",
});

const fonsecaThin = localFont({
  src: "./fonseca/Fonseca-Thin.otf",
  display: "swap",
  variable: "--font-fonseca-thin",
});

export const metadata: Metadata = {
  title: "The Empathy Gradient Book",
  description: "No one should be left behind",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} ${fonsecaMedium.variable} ${fonsecaLight.variable} ${fonsecaThin.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
