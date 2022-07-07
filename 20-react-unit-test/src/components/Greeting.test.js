import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {

  test('should render Hello World', () => {
    // Arrange
    render(<Greeting />);
  
    // Act, ...nothiung
  
    // Assert
    const titleElement = screen.getByText('Hello world!', {exact: true});
    expect(titleElement).toBeInTheDocument();
  });

  test('should render good to see you if the button was NOT clicked', () => {
    render(<Greeting />);
    const longText = screen.getByText("It's good to see you!", {exact: false});
    expect(longText).toBeInTheDocument();
  });
  
  test('should reder Changed! if the button was clicked', () => {
    render(<Greeting />);
    
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const changeText = screen.getByText("Changed!", {exact: false});
    const longText = screen.queryByText("It's good to see you!", {exact: false});
    expect(changeText).toBeInTheDocument();
    expect(longText).toBeNull();
  });
});
