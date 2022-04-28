import { render, screen } from "@testing-library/react";
import PhoneContext from "../../contexts/PhoneContext";
import Actions from "./Actions";

describe("Given Actions component", () => {
  describe("When instantiated", () => {
    test("Then it should render two links", () => {
      const { calling } = jest.fn();
      const { phoneNumber } = "123456789";

      render(
        <PhoneContext.Provider value={({ calling }, { phoneNumber })}>
          <Actions />
        </PhoneContext.Provider>
      );
      const actionsTest = screen.getByRole("link");

      expect(actionsTest).toBeInTheDocument();
    });
  });
});
