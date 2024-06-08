import ProductList from "../client/ProductList";

export async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "force-cache",
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return <ProductList products={products} />;
}
