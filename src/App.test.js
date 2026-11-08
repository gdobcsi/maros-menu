import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// A böngésző scrollIntoView funkciójának szimulálása
window.HTMLElement.prototype.scrollIntoView = jest.fn();

test("mindhárom Menü megjelenik-e", () => {
  /* Arrange: az app renderelése */
  render(<App />);

  /* Assert: A gombok megjelenése */
  expect(screen.getByRole("button", { name: /Étlap/ })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Menu/ })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Menü/ })).toBeInTheDocument();
});

test("angol nyelvre váltáskor megjelenik az angol étlap", () => {
  // Arrange: az alkalmazás renderelése
  render(<App />);

  // Assert: kezdetben még nincs megjelenítve az étlap
  expect(screen.queryByText("Soups")).not.toBeInTheDocument();

  // Act: kattintás az angol nyelvválasztó gombra
  act(() => {
    userEvent.click(screen.getByRole("button", { name: /Menu/ }));
  });

  // Assert: megjelenik az angol étlap
  expect(screen.getByText("Soups")).toBeInTheDocument();
  expect(
    screen.getByText("Creamy Raspberry soup with Yogurt"),
  ).toBeInTheDocument();

  // Assert: az angol pénznem is megjelenik
  expect(screen.getAllByText("HUF").length).toBeGreaterThan(0);
});
