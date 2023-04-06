// import necessary react testing library helpers here
// import the Counter component here

import {render, fireEvent, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../components/Counter";

// beforeEach(() => {
//   // Render the Counter component here
// })

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    render(<Counter />);
    const counterMessage = screen.getByText(/Counter/i);
    expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    render(<Counter />);
    const number = screen.getByTestId('count')
    expect(number).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    render(<Counter />);
    const number = screen.getByTestId('count');
    fireEvent.click(screen.getByTestId('increase'));
    expect(number).toHaveTextContent("1");


});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    render(<Counter />);
    const number = screen.getByTestId('count');
    fireEvent.click(screen.getByTestId('decrease'));
    expect(number).toHaveTextContent("-1");

});
