import Navbar from "@/components/Navbar";
import "./globals.css";
import DarkModeProvider, { useDarkMode } from "../components/DarkModeContext";

export default function App({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <AppContent Component={Component} pageProps={pageProps} />
    </DarkModeProvider>
  );
}

function AppContent({ Component, pageProps }) {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-200"
      } min-h-screen`}
    >
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
