import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

interface Props {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hostal Ana Nerja",
};

const RootLayout = (props: Props) => {
  const { children } = props;

  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout
