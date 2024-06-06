import React from "react";
import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./globals.css";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Hostal Ana Nerja",
};

const RootLayout = (props: Props) => {
  const { children } = props;

  return (
    <html lang="es">
      <head>
      <link rel="icon" type="image/svg+xml" href="/imgHostal.png" />
      </head>
      <body>
        <Header />
        <main className="min-h-mainScrren">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout
