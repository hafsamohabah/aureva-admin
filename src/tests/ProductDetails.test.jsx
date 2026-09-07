import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";
import { ProductContext } from "../context/ProductContext";

const mockProduct = {
  id: "1",
  name: "Aureva Ginger Paste",
  description: "A smooth ginger paste made for everyday cooking.",
  category: "Paste",
  price: 375,
  size: "300 g",
  stock: 25,
};

function renderProductDetails(product = mockProduct) {
  const updateProduct = vi.fn((id, updatedData) =>
    Promise.resolve({
      ...product,
      ...updatedData,
    })
  );

  const deleteProduct = vi.fn(() => Promise.resolve());

  const contextValue = {
    products: [product],
    loading: false,
    error: "",
    addProduct: vi.fn(),
    updateProduct,
    deleteProduct,
  };

  render(
    <ProductContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={[`/products/${product.id}`]}>
        <Routes>
          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/products"
            element={<p>Products page</p>}
          />
        </Routes>
      </MemoryRouter>
    </ProductContext.Provider>
  );

  return {
    updateProduct,
    deleteProduct,
  };
}

describe("ProductDetails", () => {
  test("displays the product information", () => {
    renderProductDetails();

    expect(
      screen.getByRole("heading", {
        name: /aureva ginger paste/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText("300 g")).toBeInTheDocument();
    expect(screen.getByText("25 units")).toBeInTheDocument();
    expect(screen.getByText("KSh 375")).toBeInTheDocument();
  });

  test("updates the product price when the form is submitted", async () => {
    const user = userEvent.setup();
    const { updateProduct } = renderProductDetails();

    const priceInput = screen.getByRole("spinbutton", {
      name: /price/i,
    });

    await user.click(priceInput);
    await user.keyboard("{Control>}a{/Control}");
    await user.keyboard("400");

    await user.click(
      screen.getByRole("button", {
        name: /update price/i,
      })
    );

    expect(updateProduct).toHaveBeenCalledWith("1", {
      price: 400,
    });

    expect(
      await screen.findByText(/product updated successfully/i)
    ).toBeInTheDocument();
  });

  test("calls deleteProduct when deletion is confirmed", async () => {
    const user = userEvent.setup();

    const { deleteProduct } = renderProductDetails();

    vi.spyOn(window, "confirm").mockReturnValue(true);

    await user.click(
      screen.getByRole("button", {
        name: /delete product/i,
      })
    );

    expect(deleteProduct).toHaveBeenCalledWith("1");

    expect(
      await screen.findByText(/products page/i)
    ).toBeInTheDocument();

    window.confirm.mockRestore();
  });
});