import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "../provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Remimo",
  description: "Pay, get paid and add funds to your wallet with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <div className="min-w-screen min-h-screen bg-[#ebe6e6]">
            {children}
          </div>
        </body>
      </Provider>

    </html>
  );
}
