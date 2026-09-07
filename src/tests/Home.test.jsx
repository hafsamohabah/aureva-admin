import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";

describe("Home page", () => {
  test("displays the Aureva heading", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /manage your aureva products with ease/i,
      })
    ).toBeInTheDocument();
  });

  test("displays navigation links for managing products", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", { name: /view products/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /add product/i })
    ).toBeInTheDocument();
  });
});