import { render, screen, within } from "@testing-library/react";
import HomePage from "../../pages/index";

describe("pages/home", () => {
  // TODO: Refactor test once the layout is complete
  xit("should render a heading tag with a link", () => {
    render(<HomePage />);

    const headingEl = screen.getByRole("heading", {
      level: 1,
      name: "Welcome to The Modern Dev",
    });
    const linkEl = within(headingEl).getByRole<HTMLLinkElement>("link");

    const href = "https://themodern.dev";
    expect(linkEl.href).toMatch(new RegExp(`^${href}`));
  });
});
