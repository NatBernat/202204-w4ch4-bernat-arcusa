import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given Key component", () => {
  describe("When instantiated with 'Test button' text", () => {
    test("Then it should render a button with 'Test button' text", () => {
      const text = "Test button";

      render(<Key text={text} />);
      const keyTest = screen.getByRole("button");

      expect(keyTest).toBeInTheDocument();
    });
  });
});
