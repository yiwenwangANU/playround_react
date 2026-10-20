import { render, screen } from "@testing-library/react";
import Mortgage from "./Mortgage";

describe("Mortgage", () => {
  test("renders mortgage", () => {
    render(
      <Mortgage
        mortgage={{ loanAmount: 100000, loanTerm: 30, interestRate: 3 }}
      />,
    );

    expect(screen.getByText("Monthly Payment Amount:")).toBeInTheDocument();
    expect(screen.getByText("$421.60")).toBeInTheDocument();
    expect(screen.getByText("$151,777.45")).toBeInTheDocument();
    expect(screen.getByText("$51,777.45")).toBeInTheDocument();
  });

  test("renders nothing when mortgage is null", () => {
    const { container } = render(<Mortgage mortgage={null} />);
    expect(container).toBeEmptyDOMElement();
  });
});
