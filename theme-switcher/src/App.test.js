import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the animated day night toggle", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /animated day night toggle/i })).toBeInTheDocument();
  expect(screen.getAllByRole("button", { name: /switch theme/i })).toHaveLength(3);
  expect(screen.getByRole("button", { name: /context for ai/i })).toBeInTheDocument();
});
