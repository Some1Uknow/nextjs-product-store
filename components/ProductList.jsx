"use client";
import Image from "next/image";
import Link from "next/link";
import { useDarkMode } from "./DarkModeContext";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

export default function ProductList({ products }) {
  const { darkMode } = useDarkMode();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      className={`px-40 min-h-screen max-sm:px-4 sm:px-10 md:px-14 mx-auto p-4 ${
        darkMode ? "text-white bg-black" : " text-gray-900"
      }`}
    >
      <SearchBar
        setCurrentPage={setCurrentPage}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        darkMode={darkMode}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentItems.map((product) => (
          <div
            key={product.id}
            className={`flex flex-col p-3 shadow-md ${
              darkMode
                ? "bg-gray-600 text-white hover:shadow-white"
                : "bg-white hover:shadow-gray-400"
            } rounded-md overflow-hidden`}
          >
            <div className="rounded-lg h-56">
              <Image
                src={product.image}
                alt={product.title}
                height={200}
                width={200}
                className="object-contain h-full w-full mix-blend-multiply"
              />
            </div>
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold mb-2 truncate">
                  {product.title}
                </h2>
                <p className="text-green-600 font-bold mb-2">
                  ${product.price}
                </p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="text-gray-500 ml-2">
                    {product.rating.count}
                  </span>
                </div>
                <p
                  className={`mb-4 line-clamp-2 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {product.description}
                </p>
              </div>
              <div className="flex w-full flex-row justify-between gap-4 text-center text-sm">
                <Link
                  href={`/products/${product.id}`}
                  className="bg-blue-500 w-1/2 hover:bg-blue-600 text-white font-bold p-2 rounded-md"
                >
                  DETAILS
                </Link>
                <button className="border w-1/2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold p-2 rounded-md">
                  ADD TO WISHLIST
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <nav aria-label="Pagination">
          <ul className="flex">
            {Array.from(
              { length: Math.ceil(filteredProducts.length / itemsPerPage) },
              (_, i) => (
                <li key={i}>
                  <button
                    onClick={() => paginate(i + 1)}
                    className={`px-3 py-2 rounded-md ${
                      currentPage === i + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
