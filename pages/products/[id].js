import Image from "next/image";
import Link from "next/link";

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default function ProductDetail({ product }) {
  return (
    <div className="container h-full mx-auto p-4">
      <Link href="/" className="text-blue-500 underline mb-4">
        Back
      </Link>
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-6xl w-full md:max-w-4xl">
          <div className="md:flex p-5">
            <div className="md:w-1/2">
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
              <p className="text-gray-600 text-2xl font-bold mb-4">
                ${product.price}
              </p>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-gray-700 mb-4">Category: {product.category}</p>
              <p className="text-gray-700 mb-4">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
              <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors uppercase">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
