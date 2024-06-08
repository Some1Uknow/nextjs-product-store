import ProductDetail from "@/app/client/ProductDetail";

async function fetchProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "force-cache",
  });
  return res.json();
}

export default async function ProductDetailPage({ params }) {
  const product = await fetchProduct(params.id);

  return <ProductDetail product={product} />;
}
