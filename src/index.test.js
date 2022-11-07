import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import getItems from "./Items";
import Shop from "./components/Shop";
import Routing from "./components/Routing";

jest.mock("./Items");
beforeEach(() => {
  getItems.mockImplementation(() => [
    { id: 0, name: "test", price: 1, image: null },
  ]);
});

describe("Routing component", () => {
  it("displays home page", () => {
    render(<Routing />);
    expect(screen.getByRole("heading").textContent).toMatch(
      "This is a home page."
    );
  });

  it("displays shop page", () => {
    render(<Routing />);
    let shopButton = screen.getByText("Shop");
    userEvent.click(shopButton);
    expect(
      screen.getAllByRole("button", { name: "+ Add to cart" }).length
    ).toBeGreaterThan(0);
  });

  it("swaps back to home page correctly", () => {
    render(<Routing />);
    let shopButton = screen.getByText("Shop");
    let homeButton = screen.getByText("Home");
    userEvent.click(shopButton);
    userEvent.click(homeButton);
    expect(screen.getByRole("heading").textContent).toMatch(
      "This is a home page."
    );
  });
});

describe("shop route", () => {
  it("lets you add items to cart", () => {
    render(<Routing />);
    let shopButton = screen.getByText("Shop");
    userEvent.click(shopButton);
    let addButton = screen.getByText("+ Add to cart");
    userEvent.click(addButton);
    userEvent.click(addButton);
    expect(screen.queryByText("2")).not.toBe(null);
  });

  it("shows a message when there are no items to list", () => {
    getItems.mockImplementation(() => []);
    render(<Shop />);
    expect(screen.queryByText("No items were found.")).not.toBe(null);
  });
});
