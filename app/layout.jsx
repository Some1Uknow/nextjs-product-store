import Navbar from "@/components/Navbar";
import "./globals.css";
import { DarkModeProvider } from "../components/DarkModeContext";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Product Store",
  description: "A sample product store using Next.js 14 with SSR and SSG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkModeProvider>
          <AppContent>{children}</AppContent>
        </DarkModeProvider>
      </body>
    </html>
  );
}

function AppContent({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
