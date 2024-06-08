import ProductDetail from "@/components/ProductDetail";

async function fetchProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "force-cache", //SSG
  });
  return res.json();
}

export default async function ProductDetailPage({ params }) {
  const product = await fetchProduct(params.id);

  return <ProductDetail product={product} />;
}
