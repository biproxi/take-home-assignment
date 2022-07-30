import { render } from '@testing-library/react';

import ReviewForm from './review-form';

describe('ReviewForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewForm />);
    expect(baseElement).toBeTruthy();
  });
});
