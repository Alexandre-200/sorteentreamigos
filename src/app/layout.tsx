import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from '@/components/Header'
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Site de Aposta entre Amigos",
  description: "site para mostrar os detalhes dos jogos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
