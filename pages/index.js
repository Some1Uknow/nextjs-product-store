"use client";
import { useState } from "react";
import { useDarkMode } from "./DarkModeContext";
import Link from "next/link";
import Image from "next/image";

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default function ProductList({ products }) {
  const { darkMode } = useDarkMode();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      className={`max-w-7xl mx-auto p-4 ${
        darkMode ? "text-white" : " text-gray-900"
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentItems.map((product) => (
          <div
            key={product.id}
            className={`flex flex-col p-3 shadow-md ${
              darkMode
                ? "bg-gray-800 text-white hover:shadow-white"
                : "bg-white hover:shadow-gray-400"
            } rounded-md overflow-hidden`}
          >
            <div className="rounded-lg h-56">
              <Image
                src={product.image}
                alt={product.title}
                height={200}
                width={200}
                className="object-contain h-full w-full"
              />
            </div>
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                {" "}
                <h2 className="text-lg font-bold mb-2 truncate">
                  {product.title}
                </h2>
                <p className="text-green-600 font-bold mb-2">
                  ${product.price}
                </p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="text-gray-500 ml-2">310</span>
                </div>
                <p
                  className={`mb-4 line-clamp-2 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {product.description}
                </p>
              </div>

              <div className="flex justify-around text-sm">
                <Link
                  href={`/products/${product.id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded-md"
                >
                  DETAILS
                </Link>
                <button className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold p-2 rounded-md">
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
              { length: Math.ceil(products.length / itemsPerPage) },
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
