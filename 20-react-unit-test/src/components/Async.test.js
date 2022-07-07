import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Asyn component', () => {
  test('render post if request succeeds', async() => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async() => [{id: 'p1', title: 'One'}, {id: 'p2', title: 'Two'}, {id: 'p3', title: 'Three'}]
    });
    render(<Async />);
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).not.toHaveLength(0);
  });
});
