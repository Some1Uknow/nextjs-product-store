import Navbar from "@/components/Navbar";
import "./globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
