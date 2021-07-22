import { render } from '@testing-library/react';
import Card from './Card';
import Level1 from '../../images/Level1.png'

test('renders card with empty title and image', () => {
  const {container} = render(<Card />);
  expect(container.firstChild).toHaveClass('Card')
  expect(container.firstChild.firstChild).toHaveClass('Card-Image')
  expect(container.firstChild.firstChild).toHaveStyle('background-image: url()')
  expect(container.firstChild.lastChild).toHaveClass('Card-Title')
  expect(container.firstChild.lastChild).toHaveTextContent('')
});

test('renders card with proper title', () => {
  const {container} = render(<Card title="Card Title" />);
  expect(container.firstChild).toHaveClass('Card')
  expect(container.firstChild.firstChild).toHaveClass('Card-Image')
  expect(container.firstChild.firstChild).toHaveStyle('background-image: url()')
  expect(container.firstChild.lastChild).toHaveClass('Card-Title')
  expect(container.firstChild.lastChild).toHaveTextContent('Card Title')
});

test('renders card with proper image', () => {
  const {container} = render(<Card image={Level1} />);
  expect(container.firstChild).toHaveClass('Card')
  expect(container.firstChild.firstChild).toHaveClass('Card-Image')
  expect(container.firstChild.firstChild).toHaveStyle(`background-image: url(${Level1})`)
  expect(container.firstChild.lastChild).toHaveClass('Card-Title')
  expect(container.firstChild.lastChild).toHaveTextContent('')
});

test('renders card with proper title and image', () => {
  const {container} = render(<Card image={Level1} title="Card Title" />);
  expect(container.firstChild).toHaveClass('Card')
  expect(container.firstChild.firstChild).toHaveClass('Card-Image')
  expect(container.firstChild.firstChild).toHaveStyle(`background-image: url(${Level1})`)
  expect(container.firstChild.lastChild).toHaveClass('Card-Title')
  expect(container.firstChild.lastChild).toHaveTextContent('Card Title')
});
