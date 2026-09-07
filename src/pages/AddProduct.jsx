import { useState } from "react";
import useProductContext from "../context/useProductContext";
import ProductForm from "../components/ProductForm";
import "../styles/AddProduct.css";

function AddProduct() {
  const { addProduct } = useProductContext();
  const [message, setMessage] = useState("");

  const handleAddProduct = async (productData) => {
    try {
      await addProduct(productData);
      setMessage("Product added successfully.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <main className="add-product">
      <section className="add-product__header">
        <p className="add-product__label">PRODUCT MANAGEMENT</p>

        <h1>Add Product</h1>

        <p>Add a new Aureva product to the collection.</p>
      </section>

      <section className="add-product__form">
        <ProductForm
          onSubmit={handleAddProduct}
          buttonText="Add Product"
        />

        {message && (
          <p className="add-product__message">{message}</p>
        )}
      </section>
    </main>
  );
}

export default AddProduct;