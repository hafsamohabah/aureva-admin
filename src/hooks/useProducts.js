import { useEffect, useState } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const addProduct = async (productData) => {
    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error("Failed to add product");
    }

    const newProduct = await response.json();

    setProducts((currentProducts) => [
      ...currentProducts,
      newProduct,
    ]);

    return newProduct;
  };

  const updateProduct = async (id, updatedData) => {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Failed to update product");
    }

    const updatedProduct = await response.json();

    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        String(product.id) === String(id) ? updatedProduct : product
      )
    );

    return updatedProduct;
  };

  const deleteProduct = async (id) => {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete product");
    }

    setProducts((currentProducts) =>
      currentProducts.filter(
        (product) => String(product.id) !== String(id)
      )
    );
  };

  return {
    products,
    loading,
    error,
    addProduct,
    updateProduct,
    deleteProduct,
  };
}

export default useProducts;