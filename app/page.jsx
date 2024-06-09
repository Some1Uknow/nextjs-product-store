"use client";
import RightTriangleIcon from "@/components/Triangle";
import { Button } from "@/components/ui/button";
import { useDarkMode } from "../components/DarkModeContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { darkMode } = useDarkMode();
  const router = useRouter();

  return (
    <div
      className={`${
        darkMode ? "text-white bg-black" : "text-gray-900"
      } py-20 sm:py-40`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-center">
          Welcome to Product Store
        </h1>
        <p className="mb-8 text-center">
          Here are the features we've implemented:
        </p>
        <ul className="list-disc list-inside space-y-4 sm:space-y-2">
          <li className="text-lg sm:text-xl flex flex-col sm:flex-row items-center gap-2">
            <span className="font-semibold">Tailwind CSS</span>
            <Image
              src="/TailwindCSS-Dark.svg"
              width={40}
              height={40}
              alt="Tailwind CSS"
            />
            <span>Efficient and responsive styling.</span>
          </li>
          <li className="text-lg sm:text-xl flex flex-col sm:flex-row items-center gap-2">
            <span className="font-semibold">Server-Side Rendering (SSR)</span>
            <Image src="/NextJS.svg" height={40} width={40} alt="Next.js" />
            <span>Improved performance and SEO.</span>
          </li>
          <li className="text-lg sm:text-xl flex flex-col sm:flex-row items-center gap-2">
            <span className="font-semibold">Static Site Generation (SSG)</span>
            <Image src="/NextJS.svg" height={40} width={40} alt="Next.js" />
            <span>Fast, pre-rendered pages.</span>
          </li>
          <li className="text-lg sm:text-xl flex flex-col sm:flex-row items-center gap-2">
            <span className="font-semibold">shadcn UI Components</span>
            <Image
              src="/shadcn.png"
              width={100}
              height={50}
              className="rounded-lg"
              alt="shadcn UI Components"
            />
            <span>Modern and reusable UI components.</span>
          </li>
          <li className="text-lg sm:text-xl">
            <span className="font-semibold">Responsive Design:</span> Optimized
            for all devices.
          </li>
          <li className="text-lg sm:text-xl">
            <span className="font-semibold">Dark/Light Mode Toggle ☀️🌑</span>{" "}
            Switch between dark and light themes.
          </li>
        </ul>

        <div className="flex justify-center mt-10">
          <Button
            onClick={() => router.push("/products")}
            className={`h-12 sm:h-16 w-32 sm:w-40 text-lg sm:text-xl mt-4 sm:mt-10 ${
              darkMode ? "bg-white text-black hover:bg-gray-400" : ""
            }`}
          >
            Get Started
            <RightTriangleIcon
              size={30}
              color={`${darkMode ? "black" : "white"}`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
