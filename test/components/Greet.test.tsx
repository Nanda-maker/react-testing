import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";
import "@testing-library/jest-dom/vitest"; // for jest-dom matchers

describe("Greet", () => {
  it("should render Hello with name when name is provided", () => {
    // First we have render the greet component
    render(<Greet name="John" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/John/i);
  });
  it("should render login button when name is not provided", () => {
    // First we have to render the greet component
    render(<Greet />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
