import { render, screen } from '@testing-library/react';
import SplashScreen from './SplashScreen';

test('renders splash screen', () => {
  const {container} = render(<SplashScreen />);
  expect(container.firstChild).toHaveClass('Logo-Wrapper')
  expect(container.firstChild.firstChild).toHaveClass('Logo')
  expect(container.firstChild.firstChild.firstChild.tagName.toLowerCase()).toEqual('h1')
  expect(container.firstChild.firstChild.firstChild).toHaveTextContent('Safe Care')
  expect(container.firstChild.firstChild.lastChild.tagName.toLowerCase()).toEqual('h2')
  expect(container.firstChild.firstChild.lastChild).toHaveTextContent('SERIOUS GAME')
});
