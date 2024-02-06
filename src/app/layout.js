import { Inter } from "next/font/google";
import "./globals.css";
import GlobalState from "../context";
import NextAuthProvider from "../auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nextflix clone",
  description: "Created by Mohan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <GlobalState>
            {children}
          </GlobalState>
        </NextAuthProvider>
      </body>
    </html>
  );
}
