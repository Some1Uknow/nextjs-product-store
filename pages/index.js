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

  return (
    <div className={`max-w-6xl mx-auto p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex border p-4 bg-white ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-md overflow-hidden mb-4`}
        >
          <div className="flex-shrink-0">
            <Image
              height={200}
              width={200}
              src={product.image}
              alt={product.title}
              className="object-cover"
            />
          </div>
          <div className="flex-1 p-4">
            <h2 className="text-lg font-bold mb-2">{product.title}</h2>
            <p className="text-green-600 font-bold mb-2">${product.price}</p>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500">★★★★</span>
              <span className="text-gray-500 ml-2">310</span>
            </div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex">
              <Link
                href={`/products/${product.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-2"
              >
                DETAILS
              </Link>
              <button className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded-md">
                ADD TO WISHLIST
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
