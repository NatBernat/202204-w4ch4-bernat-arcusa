import { render, screen } from "@testing-library/react";
import { useContext } from "react";
import PhoneContext from "../../contexts/PhoneContext";

import Info from "./Info";

describe("Given Info component", () => {
  describe("When instantiated with 'Random text' text", () => {
    test("Then it should render a button with 'Random text' text", () => {
      const { calling } = useContext(PhoneContext);
      const text = "Random text";

      render(
        <PhoneContext>
          <Info text={text} />
        </PhoneContext>
      );
      const displayText = screen.getByRole("button");

      expect(displayText).toBeInTheDocument();
    });
  });
});
