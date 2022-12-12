import { render, screen, within } from "@testing-library/react";
import { description } from "lib/constants";
import { categories, products } from "lib/data";
import HomePage from "../../pages/index";

describe("pages/Home", () => {
  it("should render a section containing a heading with the company description and a link to the products page", () => {
    render(<HomePage />);

    const layoutEl = screen.getByTestId("store-layout");
    const heroSectionEl = within(layoutEl).getByTestId("hero-section");
    const imageEl = within(heroSectionEl).getByRole("img");
    const headingEl = within(heroSectionEl).getByRole("heading", { level: 1 });
    const linkEl = within(heroSectionEl).getByRole("link");

    expect(imageEl).toHaveAttribute("src", "/assets/banner.jpeg");
    expect(imageEl).toHaveAttribute("alt", "Banner image");

    expect(headingEl).toHaveTextContent(description);

    expect(linkEl).toBeVisible();
    expect(linkEl).toBeEnabled();
    expect(linkEl).toHaveTextContent("Shop now");
    expect(linkEl).toHaveAttribute("href", "/products");
  });

  it("should render a section containing the product categories as links to the category pages", () => {
    render(<HomePage />);

    const layoutEl = screen.getByTestId("store-layout");
    const categoriesSectionEl =
      within(layoutEl).getByTestId("categories-section");
    const headingEl = within(categoriesSectionEl).getByRole("heading", {
      level: 3,
    });
    const links = within(categoriesSectionEl).getAllByRole("link");

    expect(headingEl).toHaveTextContent("Shop by category");

    expect(links).toHaveLength(categories.length);

    categories.forEach((category, i) => {
      const currentLink = links[i];

      const expectedHref = `/categories/${category.slug}`;
      const expectedText = `${category.name}\\S*(${category.products.length} products)`;

      expect(currentLink).toBeVisible();
      expect(currentLink).toBeEnabled();
      expect(currentLink).toHaveAttribute("href", expectedHref);
      expect(currentLink).toHaveTextContent(new RegExp(expectedText, "i"));
    });
  });

  it("should render a section containing the trending products as links to the product pages", () => {
    render(<HomePage />);

    const layoutEl = screen.getByTestId("store-layout");
    const productsSectionEl = within(layoutEl).getByTestId("products-section");
    const headingEl = within(productsSectionEl).getByRole("heading", {
      level: 3,
    });
    const links = within(productsSectionEl).getAllByRole("link");

    expect(headingEl).toHaveTextContent("Trending");

    expect(links).toHaveLength(products.length + 1);

    const lastLink = links.pop();
    products.forEach((product, i) => {
      const currentLink = links[i];

      const expectedHref = `/products/${product.slug}`;

      expect(currentLink).toBeVisible();
      expect(currentLink).toBeEnabled();
      expect(currentLink).toHaveAttribute("href", expectedHref);

      if (product.images.length > 0) {
        const imageEl = within(currentLink).getByRole("img");
        expect(imageEl).toHaveAttribute("src", product.images[0]);
        expect(imageEl).toHaveAttribute("alt", product.name);
      }

      const buttons = within(currentLink).getAllByRole("button");

      expect(buttons).toHaveLength(2);
      expect(buttons[0]).toHaveAttribute("title", "Add to cart");
      expect(buttons[1]).toHaveAttribute("title", "Add to favorite");

      buttons.forEach((button) => {
        expect(button).toBeVisible();
        expect(button).toBeEnabled();
      });

      within(currentLink).getByText(product.name);
      within(currentLink).getByText("$" + product.price);
    });

    expect(lastLink).toBeVisible();
    expect(lastLink).toBeEnabled();
    expect(lastLink).toHaveTextContent("All products");
    expect(lastLink).toHaveAttribute("href", "/products");
  });
});
