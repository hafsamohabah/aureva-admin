import { useState } from "react";
import useProductContext from "../context/useProductContext";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import "../styles/Products.css";

function Products() {
  const { products, loading, error } = useProductContext();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main className="products-page">
      <section className="products-page__header">
        <p className="products-page__label">PRODUCT MANAGEMENT</p>
        <h1>Aureva Products</h1>
        <p>View and manage the Aureva product collection.</p>
      </section>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <section className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      {filteredProducts.length === 0 && <p>No products found.</p>}
    </main>
  );
}

export default Products;