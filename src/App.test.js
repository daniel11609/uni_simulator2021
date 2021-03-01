import { act, render, screen, wait, waitFor } from '@testing-library/react';
import App from './App';

test('renders Loading page', () => {

  render(<App />);

  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();

});

test('renders login page', async () => {

  render(<App />);

  

  const headingElement = await screen.findByText(/Uni-Simulator 2021/i);

  expect(headingElement).toBeInTheDocument();

});

