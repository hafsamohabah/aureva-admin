import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Products from "../pages/Products";
import { ProductProvider } from "../context/ProductContext";

const mockProducts = [
  {
    id: "1",
    name: "Aureva Ginger Paste",
    description: "A smooth ginger paste made for everyday cooking.",
    category: "Paste",
    price: 375,
    size: "300 g",
    stock: 25,
  },
  {
    id: "2",
    name: "Aureva Turmeric Paste",
    description: "A flavorful turmeric paste for everyday meals.",
    category: "Paste",
    price: 350,
    size: "300 g",
    stock: 30,
  },
];

describe("Products page", () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProducts),
      })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("displays products fetched from the API", async () => {
    render(
      <MemoryRouter>
        <ProductProvider>
          <Products />
        </ProductProvider>
      </MemoryRouter>
    );

    expect(
      await screen.findByRole("heading", {
        name: /aureva ginger paste/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /aureva turmeric paste/i,
      })
    ).toBeInTheDocument();
  });

  test("filters products when the user searches", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <ProductProvider>
          <Products />
        </ProductProvider>
      </MemoryRouter>
    );

    await screen.findByRole("heading", {
      name: /aureva ginger paste/i,
    });

    const searchInput = screen.getByRole("searchbox", {
      name: /search products/i,
    });

    await user.type(searchInput, "turmeric");

    expect(
      screen.getByRole("heading", {
        name: /aureva turmeric paste/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("heading", {
        name: /aureva ginger paste/i,
      })
    ).not.toBeInTheDocument();
  });
});