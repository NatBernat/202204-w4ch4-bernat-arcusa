import { render, screen } from "@testing-library/react";
import PhoneContext from "../../contexts/PhoneContext";

import Display from "./Display";

describe("Given Display component", () => {
  describe("When instantiated", () => {
    test("Then it should render a span with '123456789' text", () => {
      const { phoneNumber } = "123456789";

      render(
        <PhoneContext.Provider value={{ phoneNumber }}>
          <Display text={phoneNumber} />
        </PhoneContext.Provider>
      );
      const displayText = screen.getByText("123456789");

      expect(displayText).toBeInTheDocument();
    });
  });
});
