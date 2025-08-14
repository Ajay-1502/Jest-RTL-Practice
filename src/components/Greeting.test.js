import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders hello world as a text', () => {
    //Arrange
    render(<Greeting />);

    //Act (nothing to act here)

    //Assert
    const helloWorldElement = screen.getByText('Hello World');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders its good to see you as text', () => {
    //Arrange
    render(<Greeting />);

    //Act (nothing to act here)

    //Assert
    const paraElement = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(paraElement).toBeInTheDocument();
  });

  test('renders changed! as a text', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  });

  test("doesnot render 'good to see you'  if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("It's good to see you!");
    expect(outputElement).toBeNull();
  });
});
