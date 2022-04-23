import { render, screen } from '../src/utils/test-utils/render';
import Home from "../src/pages";

describe("Home", () => {
  it("renders", () => {
    render(<Home />);
    const received = screen.getByText('Loading...')
    expect(received).toBeInTheDocument();
  });
});