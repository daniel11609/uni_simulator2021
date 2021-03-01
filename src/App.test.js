import { act, render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Loading page', () => {

  render(<App />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();

});

test('renders login page', async () => {

  // render the App component
  render(<App />);
  // get the headline elemnt
  const headingElement = await screen.findByText(/Uni-Simulator 2021/i);
  // check if it is in the DOM
  expect(headingElement).toBeInTheDocument();

});



test('test username too short error', async () => {

  // arrange: render App; get text input
  render(<App />);

  const userNameInput = await screen.findByPlaceholderText(/Username/i);

  // act: input a username which is too short
  fireEvent.change(userNameInput, { target: { value: '00' } })


  const errorMsg = await screen.findByText(/Your username has to be longer than 3 characters./i);

  // assert: check if error msg get shown; check for value of username
  expect(errorMsg).toBeInTheDocument();
  expect(userNameInput.value).toBe('00');

});


test('test username length check', async () => {

  // arrange: render App; get text input
  render(<App />);

  const userNameInput = await screen.findByPlaceholderText(/Username/i);

  // act: input a username which is too short
  fireEvent.change(userNameInput, { target: { value: 'MarcelDavis' } })


  // assert: check if value of username is set correctly
  expect(userNameInput.value).toBe('MarcelDavis');

});

test('test username error (too long)', async () => {

  // arrange: render App; get text input
  render(<App />);

  const userNameInput = await screen.findByPlaceholderText(/Username/i);

  // act: input a username which is too long (>20 characters)
  fireEvent.change(userNameInput, { target: { value: 'AAAAAAAAAAAAAAAAAAAAA' } })

  const errorMsg = await screen.findByText(/Your username cannot be longer than 20 characters./i);


  // assert: check value; check if error gets shown
  expect(userNameInput.value).toBe('AAAAAAAAAAAAAAAAAAAAA');
  expect(errorMsg).toBeInTheDocument();

});
