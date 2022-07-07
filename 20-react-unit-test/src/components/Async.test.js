import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Asyn component', () => {
  test('render post if request succeeds', async() => {
    render(<Async />);
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).not.toHaveLength(0);
  });
});
