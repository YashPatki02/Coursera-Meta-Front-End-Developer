import { render, screen } from '@testing-library/react';
import BookingPage from './components/BookingPage/BookingPage';
import { initializeTimes, updateTimes } from './components/BookingPage/BookingPage';

test('Renders BookingPage heading', () => {
  render(<BookingPage />);
  const linkElement = screen.getByText(/Book a Table/i);
  expect(linkElement).toBeInTheDocument();
})

test("initializeTimes returns the initial times array", () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toContain("11:00 AM");
});
