import { screen, render } from '@testing-library/react';
import Async from './Async';

describe('testing async component', () => {
  test('testing list rendering', async () => {
    //Working with mocks
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'first post' }],
    });

    //Arrange
    render(<Async />);

    //Act

    //Assert
    const listElement = await screen.findAllByRole('listitem');
    expect(listElement).not.toHaveLength(0);
  });
});
