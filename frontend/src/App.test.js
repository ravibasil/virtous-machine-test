import { render, screen, act } from '@testing-library/react';
import App from './App';

// Mock fetch
global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve([])
}))

test('App UI test', async () => {
  await act(async () => {
    render(<App />);
  });
  
  expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument()
  expect(screen.getByTestId("add-update-cta")).toBeInTheDocument()

});
