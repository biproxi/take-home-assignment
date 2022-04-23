import { render, screen } from '@testing-library/react';
import LinkButton from "../src/components/Buttons/LinkedButton/LinkButton";

test('renders Link Button', () => {
  render(<LinkButton to={'/'} >Link Button</LinkButton>)
  expect(screen.getByText('Link Button')).toBeInTheDocument()
});