import { render } from '@testing-library/react';
import Logo from './Logo';

test('renders game title and subtitle', () => {
  const {container} = render(<Logo />);
  expect(container.firstChild).toHaveClass('Logo')
  expect(container.firstChild.firstChild.tagName.toLowerCase()).toEqual('h1')
  expect(container.firstChild.firstChild).toHaveTextContent('Safe Care')
  expect(container.firstChild.lastChild.tagName.toLowerCase()).toEqual('h2')
  expect(container.firstChild.lastChild).toHaveTextContent('SERIOUS GAME')
});
