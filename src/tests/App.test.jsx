import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Application routing", () => {
  test("renders the Home page at the root route", () => {
    window.history.pushState({}, "", "/");

    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /manage your aureva products with ease/i,
      })
    ).toBeInTheDocument();
  });

  test("renders the Add Product page", () => {
    window.history.pushState({}, "", "/add-product");

    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /add product/i,
      })
    ).toBeInTheDocument();
  });
});