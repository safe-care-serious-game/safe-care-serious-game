import { render } from '@testing-library/react';
import Levels from './Levels';
import { BrowserRouter } from 'react-router-dom'

test('renders levels selection menu', () => {
  const {container} = render(<Levels />, { wrapper: BrowserRouter });
  // TODO:
});
