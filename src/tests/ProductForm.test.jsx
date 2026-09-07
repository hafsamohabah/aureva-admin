import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductForm from "../components/ProductForm";

describe("ProductForm", () => {
  test("submits the product information entered by the user", async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(<ProductForm onSubmit={handleSubmit} />);

    await user.type(
      screen.getByLabelText(/product name/i),
      "Aureva Chili Paste"
    );

    await user.type(
      screen.getByLabelText(/description/i),
      "A spicy paste for everyday cooking."
    );

    await user.type(
      screen.getByLabelText(/price/i),
      "350"
    );

    await user.type(
      screen.getByLabelText(/stock/i),
      "15"
    );

    await user.click(
      screen.getByRole("button", { name: /add product/i })
    );

    expect(handleSubmit).toHaveBeenCalledWith({
      name: "Aureva Chili Paste",
      description: "A spicy paste for everyday cooking.",
      category: "Paste",
      price: 350,
      size: "300 g",
      stock: 15,
    });
  });

  test("shows the add product button", () => {
    const handleSubmit = vi.fn();

    render(<ProductForm onSubmit={handleSubmit} />);

    expect(
      screen.getByRole("button", { name: /add product/i })
    ).toBeInTheDocument();
  });
});