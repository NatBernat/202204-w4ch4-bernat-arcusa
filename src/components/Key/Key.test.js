import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given Key component", () => {
  describe("When instantiated", () => {
    test("Then it should render a button", () => {
      render(<Key />);
      const keyTest = screen.getByRole("button");

      expect(keyTest).toBeInTheDocument();
    });
  });
});
