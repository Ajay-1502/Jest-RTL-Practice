import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('Testing greeting component', () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText('Hello World');
    const paraElement = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(paraElement).toBeInTheDocument();
    expect(helloWorldElement).toBeInTheDocument();
  });
});
