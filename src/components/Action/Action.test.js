import { render, screen } from "@testing-library/react";
import Action from "./Action";

describe("Given Action component", () => {
  describe("When instantiated with 'Test button' text", () => {
    test("Then it should render a button with 'Test button' text", () => {
      const text = "Test button";
      const clickAction = jest.fn();
      const action = jest.fn();

      render(
        <Action text={text} action={action} actionOnClick={clickAction} />
      );
      const keyTest = screen.getByRole("link");

      expect(keyTest).toBeInTheDocument();
    });
  });
});
