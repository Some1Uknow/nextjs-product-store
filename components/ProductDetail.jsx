"use client";
import Image from "next/image";
import Link from "next/link";
import { useDarkMode } from "./DarkModeContext";
import { Button } from "@/components/ui/button";

export default function ProductDetail({ product }) {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`px-40 mx-auto p-4 ${
        darkMode ? "text-white bg-black" : " text-gray-900"
      }`}
    >
      <Link href="/products" className="text-blue-500 underline mb-4">
        <Button variant="outline">Back</Button>
      </Link>
      <div className="flex items-center justify-center">
        <div className="rounded-lg overflow-hidden shadow-lg max-w-8xl w-full md:max-w-4xl">
          <div
            className={`md:flex p-5 ${
              darkMode ? "bg-gray-700 text-white" : "bg-white"
            }`}
          >
            <div className="md:w-3/5">
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <h1 className="text-4xl font-bold mb-2 uppercase">
                {product.title}
              </h1>
              <p
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-600"
                }`}
              >
                ${product.price}
              </p>
              <p
                className={`mb-4 ${darkMode ? "text-white" : "text-gray-700"}`}
              >
                {product.description}
              </p>
              <p
                className={`mb-4 ${darkMode ? "text-white" : "text-gray-700"}`}
              >
                Category: {product.category}
              </p>
              <p
                className={`mb-4 ${darkMode ? "text-white" : "text-gray-700"}`}
              >
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
              <button
                className={`py-2 px-4 rounded-lg uppercase ${
                  darkMode
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
