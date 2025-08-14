import { screen, render } from '@testing-library/react';
import Async from './Async';

describe('testing async component', () => {
  test('testing list rendering', async () => {
    //Arrange
    render(<Async />);

    //Act

    //Assert
    const listElement = await screen.findAllByRole('listitem');
    expect(listElement).not.toHaveLength(0);
  });
});
