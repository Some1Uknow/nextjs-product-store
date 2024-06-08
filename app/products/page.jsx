import ProductList from "../../components/ProductList";

export async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store", // SSR
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return <ProductList products={products} />;
}
