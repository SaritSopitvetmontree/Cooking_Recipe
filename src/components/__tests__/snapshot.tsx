import { render } from '@testing-library/react';
import TopBar from '../TopBar';

it('renders homepage unchanged', () => {
  const { container } = render(<TopBar />)
  expect(container).toMatchSnapshot()
})