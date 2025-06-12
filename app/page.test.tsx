/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("App Router");
});

it("Hello Trung should be in the document", () => {
    render(<Page />);
    expect(screen.getByText("Hello Trung")).toBeInTheDocument()
})