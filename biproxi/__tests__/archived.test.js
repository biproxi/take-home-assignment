import { render, screen } from '../src/utils/test-utils/render';
import Archived from "../src/pages";

describe("Home", () => {
  it("renders", () => {
    render(<Archived />);
    const received = screen.getByText('Loading...')
    expect(received).toBeInTheDocument();
  });
});