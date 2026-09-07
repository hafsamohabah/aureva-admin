import { useState } from "react";
import ProductForm from "../components/ProductForm";

function AddProduct() {
  const [message, setMessage] = useState("");

  const handleAddProduct = async (productData) => {
    try {
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

      setMessage("Product added successfully.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <main>
      <h1>Add Product</h1>
      <p>Add a new Aureva product to the collection.</p>

      <ProductForm
        onSubmit={handleAddProduct}
        buttonText="Add Product"
      />

      {message && <p>{message}</p>}
    </main>
  );
}

export default AddProduct;