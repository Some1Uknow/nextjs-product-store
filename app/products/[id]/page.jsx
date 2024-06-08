import ProductDetail from "../../../components/ProductDetail";

async function fetchProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "force-cache",
  });
  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "force-cache",
  });
  const products = await res.json();
  const paths = products.map((product) => ({
    id: product.id.toString(),
  }));

  return paths;
}

export default async function ProductDetailPage({ params }) {
  const product = await fetchProduct(params.id);

  return <ProductDetail product={product} />;
}
