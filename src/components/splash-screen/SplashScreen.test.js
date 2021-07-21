import { render, screen } from '@testing-library/react';
import SplashScreen from './SplashScreen';

test('renders splash screen', () => {
  render(<SplashScreen />);
  let headerElement = screen.getByText(/safe care/i);
  expect(headerElement).toBeInTheDocument();
  headerElement = screen.getByText(/serious game/i);
  expect(headerElement).toBeInTheDocument();
});
