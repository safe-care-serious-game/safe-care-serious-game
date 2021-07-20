import { render, screen } from '@testing-library/react';
import Logo from './Logo';

test('renders game title and subtitle', () => {
  render(<Logo />);
  let headerElement = screen.getByText(/safe care/i);
  expect(headerElement).toBeInTheDocument();
  headerElement = screen.getByText(/serious game/i);
  expect(headerElement).toBeInTheDocument();
});
