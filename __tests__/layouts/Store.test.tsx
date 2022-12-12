import { render, screen, within } from "@testing-library/react";
import StoreLayout from "../../layouts/Store";
import {
  companyLogo,
  companyName,
  description,
  footerLinkLists,
  getCopyrightText,
  headerLinks,
} from "../../util/constants";

describe("layouts/store", () => {
  it("should render", () => {
    render(<StoreLayout />);
  });

  it("should render its children", () => {
    const title = "Can you see me?";

    render(
      <StoreLayout>
        <h1>{title}</h1>
      </StoreLayout>
    );

    const mainEl = screen.getByRole("main");
    const headingEl = within(mainEl).getByRole("heading", { level: 1 });
    expect(headingEl).toHaveTextContent(title);
  });

  it("should render a header with some navigation links", () => {
    render(<StoreLayout />);

    const headerEl = screen.getByRole("banner");
    const navvEl = within(headerEl).getByRole("navigation");
    const links = within(navvEl).getAllByRole<HTMLLinkElement>("link");

    expect(links).toHaveLength(headerLinks.length);

    headerLinks.forEach((link, i) => {
      const linkEl = links[i];
      expect(linkEl).toHaveProperty("href", window.location.origin + link.href);
      expect(linkEl).toHaveTextContent(link.label);
      expect(linkEl).toBeEnabled();
      expect(linkEl).toBeVisible();
    });
  });

  it("should render the logo within the header", () => {
    // 1. Render the component
    render(<StoreLayout />);

    // 2. Assert that a header node is present
    const headerEl = screen.getByRole("banner");
    // 3. Assert that the header contain an image
    const imageEl = within(headerEl).getByRole<HTMLImageElement>("img");
    // 4. Retrieve the closest link ancestor
    const linkEl = imageEl.closest("a");

    // 5. Assert that the image element is visible and contains the correct attributes values
    expect(imageEl).toBeVisible();
    expect(imageEl.alt).toBe(`${companyName} logo`);
    expect(imageEl.src).toBe(companyLogo);

    // 6. Assert that the link element is correct
    expect(linkEl).toBeVisible();
    expect(linkEl).toBeEnabled();
    expect(linkEl).toHaveProperty("href", window.location.origin + "/");
  });

  it("should render a footer with some navigation links", () => {
    // 1. Render the component
    render(<StoreLayout />);

    // 2. Get the footer node
    const footerEl = screen.getByRole("contentinfo");
    // 3. Assert that the footer contain list nodes
    const lists = within(footerEl).getAllByRole("list");
    // 4. Assert that the footer contain h3 headings
    const headings = screen.getAllByRole("heading", { level: 3 });

    // 5. Assert that we have the right number of lists
    expect(lists).toHaveLength(footerLinkLists.length);

    // 6. Assert that each list contains the right heading and navigation links
    footerLinkLists.forEach((linkList, i) => {
      expect(headings[i]).toHaveTextContent(linkList.groupLabel);

      const links = within(lists[i]).getAllByRole<HTMLLinkElement>("link");

      linkList.links.forEach((link, i) => {
        const currentLinkEl = links[i];
        expect(currentLinkEl).toHaveProperty(
          "href",
          window.location.origin + link.href
        );
        expect(currentLinkEl).toHaveTextContent(link.label);
        expect(currentLinkEl).toBeEnabled();
        expect(currentLinkEl).toBeVisible();
      });
    });
  });

  it("should render the logo and company info within the footer", () => {
    // 1. Render the component
    render(<StoreLayout />);

    // 2. Get the footer node
    const footerEl = screen.getByRole("contentinfo");
    // 3. Assert that the footer contain an image
    const imageEl = within(footerEl).getByRole<HTMLImageElement>("img");
    // 4. Retrieve the closest link ancestor
    const linkEl = imageEl.closest("a");

    // 5. Assert that the description text is present
    screen.getByText(description);

    // 6. Assert that the image element is visible and contains the correct attributes values
    expect(imageEl).toBeVisible();
    expect(imageEl.alt).toBe(`${companyName} logo`);
    expect(imageEl.src).toBe(companyLogo);

    // 7. Assert that the link element is correct
    expect(linkEl).toBeVisible();
    expect(linkEl).toBeEnabled();
    expect(linkEl).toHaveProperty("href", window.location.origin + "/");
    expect(linkEl).toHaveTextContent(companyName);
  });

  it("should render the copyright information with the footer", () => {
    render(<StoreLayout />);

    const footerEl = screen.getByRole("contentinfo");
    within(footerEl).getByText(getCopyrightText());
  });

  it("should dynamically set the page title via props", () => {
    const props = { title: "HomePage | Comfort" };
    render(<StoreLayout {...props} />);

    expect(document.title).toBe(props.title);
  });
});
