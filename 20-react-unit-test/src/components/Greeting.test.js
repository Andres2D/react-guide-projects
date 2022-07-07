import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('should renders Hello World', () => {
  // Arrange
  render(<Greeting />);

  // Act, ...nothiung

  // Assert
  const titleElement = screen.getByText('Hello world!', {exact: true});
  expect(titleElement).toBeInTheDocument();
});
