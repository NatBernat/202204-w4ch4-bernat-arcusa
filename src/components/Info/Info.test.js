import { render, screen } from "@testing-library/react";
import PhoneContext from "../../contexts/PhoneContext";
import Info from "./Info";

describe("Given Info component", () => {
  describe("When instantiated with 'Random text' text", () => {
    test("Then it should render a button with 'Random text' text", () => {
      const text = "Random text";
      const { calling } = "message";

      render(
        <PhoneContext.Provider value={{ calling }}>
          <Info text={text} />
        </PhoneContext.Provider>
      );
      const displayText = screen.getByText("Calling...");

      expect(displayText).toBeInTheDocument();
    });
  });
});
