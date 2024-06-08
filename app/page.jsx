"use client";
import RightTriangleIcon from "@/components/Triangle";
import { Button } from "@/components/ui/button";
import { useDarkMode } from "../components/DarkModeContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { darkMode } = useDarkMode();
  const router = useRouter();

  return (
    <div
      className={`${darkMode ? "text-white bg-black" : "text-gray-900"} py-40`}
    >
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-6xl font-bold mb-4">Welcome to Product Store</h1>
        <p className="mb-8">Here are the features we've implemented:</p>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-xl flex flex-row items-center gap-2">
            <span className="font-semibold">Tailwind CSS</span>
            <Image src="/TailwindCSS-Dark.svg" width={40} height={40} />
            Efficient and responsive styling.
          </li>
          <li className="text-xl flex flex-row items-center gap-2">
            <span className="font-semibold text-xl">
              Server-Side Rendering (SSR)
            </span>
            <Image src="/NextJS.svg" height={40} width={40} />
            Improved performance and SEO.
          </li>
          <li className="text-xl flex flex-row items-center gap-2">
            <span className="font-semibold text-xl">
              Static Site Generation (SSG)
            </span>
            <Image src="/NextJS.svg" height={40} width={40} />
            Fast, pre-rendered pages.
          </li>
          <li className="text-xl flex flex-row items-center gap-2">
            <span className="font-semibold">shadcn UI Components</span>
            <Image
              src="/shadcn.png"
              width={100}
              height={50}
              className="rounded-lg"
            />
            Modern and reusable UI components.
          </li>
          <li className="text-xl">
            <span className="font-semibold">Responsive Design:</span> Optimized
            for all devices.
          </li>
          <li className="text-xl">
            <span className="font-semibold">Dark/Light Mode Toggle ☀️🌑</span>{" "}
            Switch between dark and light themes.
          </li>
        </ul>

        <Button
          onClick={() => router.push("/products")}
          className={`h-16 w-40 text-xl mt-10 ${
            darkMode ? "bg-white text-black hover:bg-gray-400" : ""
          }`}
        >
          Get Started{" "}
          <RightTriangleIcon
            size={50}
            color={`${darkMode ? "black" : "white"}`}
          />
        </Button>
      </div>
    </div>
  );
}
