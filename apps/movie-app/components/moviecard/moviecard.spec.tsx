import { render } from '@testing-library/react';

import Moviecard from './moviecard';

describe('Moviecard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Moviecard />);
    expect(baseElement).toBeTruthy();
  });
});
