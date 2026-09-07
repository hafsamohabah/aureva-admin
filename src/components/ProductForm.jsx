import { useId, useRef, useState } from "react";

function ProductForm({ onSubmit, buttonText = "Add Product" }) {
  const nameId = useId();
  const descriptionId = useId();
  const categoryId = useId();
  const priceId = useId();
  const sizeId = useId();
  const stockId = useId();

  const nameInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Paste",
    price: "",
    size: "300 g",
    stock: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
    });

    setFormData({
      name: "",
      description: "",
      category: "Paste",
      price: "",
      size: "300 g",
      stock: "",
    });

    nameInputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={nameId}>Product Name</label>
        <input
          ref={nameInputRef}
          id={nameId}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor={descriptionId}>Description</label>
        <textarea
          id={descriptionId}
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor={categoryId}>Category</label>
        <select
          id={categoryId}
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Paste">Paste</option>
          <option value="Paste Blend">Paste Blend</option>
        </select>
      </div>

      <div>
        <label htmlFor={priceId}>Price</label>
        <input
          id={priceId}
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          min="0"
          required
        />
      </div>

      <div>
        <label htmlFor={sizeId}>Size</label>
        <input
          id={sizeId}
          name="size"
          value={formData.size}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor={stockId}>Stock</label>
        <input
          id={stockId}
          name="stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
          min="0"
          required
        />
      </div>

      <button type="submit">{buttonText}</button>
    </form>
  );
}

export default ProductForm;