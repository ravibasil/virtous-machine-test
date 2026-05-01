import { render, screen } from '@testing-library/react';
import App from './App';

// Mock fetch
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve()
}))

test('App UI test', () => {
  render(<App />);
  
  expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument()
  expect(screen.getByTestId("add-update-cta")).toBeInTheDocument()

});
