import { render, screen } from "@testing-library/react";
import Action from "./Action";

describe("Given Action component", () => {
  let clickAction;
  let action;
  let isActive;
  beforeEach(() => {
    clickAction = jest.fn();
    action = "call";
    isActive = "true";
  });
  describe("When instantiated with 'call' action", () => {
    test("Then it should render a button", () => {
      render(<Action action={action} actionOnClick={clickAction} />);
      const actionTest = screen.getByRole("link");

      expect(actionTest).toBeInTheDocument();
    });
    test("Then it should render a button with 'Call' text", () => {
      render(
        <Action
          action={action}
          isActive={isActive}
          actionOnClick={clickAction}
        />
      );
      const actionTest = screen.getByText("Call");

      expect(actionTest).toBeInTheDocument();
    });
  });
});
