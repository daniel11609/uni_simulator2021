import { act, render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Loading page', () => {

  render(<App />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();

});

test('renders login page', async () => {

  // arrange
  render(<App />);


  // get the headline elemnt
  const headingElement = await screen.findByText(/Uni-Simulator 2021/i);

  // assert
  // check if it is in the DOM
  expect(headingElement).toBeInTheDocument();

});



test('test username length limits (too short)', async () => {
  // arrange
  
  render(<App />);
  // get text input; play button
  const userNameInput = await screen.findByPlaceholderText(/Username/i);
  const playButton = await screen.findByText(/Play/i);

  // act: input a username which is too short
  fireEvent.change(userNameInput, { target: { value: '00' } })

  const errorMsg = await screen.findByText(/Your username has to be longer than 3 characters./i);
 
  // assert: check if error msg get shown; check for value of username
  expect(errorMsg).toBeInTheDocument();

  // check if value of username is correct
  expect(userNameInput.value).toBe('00');

  // make sure play button is active
  expect(playButton).toBeDisabled();

});


test('test username length check (no errors expected)', async () => {

  // arrange
  // render App; get text input
  render(<App />);
  // get input field and play button
  const userNameInput = await screen.findByPlaceholderText(/Username/i);
  const playButton = await screen.findByText(/Play/i);

  // act
  //input a username which is too short
  fireEvent.change(userNameInput, { target: { value: 'MarcelDavis' } })

  // assert
  // check if value of username is set correctly
  expect(userNameInput.value).toBe('MarcelDavis');
  // check if the play button gets rendered
  expect(playButton).toBeInTheDocument();
  // make sure play button is active
  expect(playButton).toBeEnabled();

});

test('test username error (too long)', async () => {

  
  // render App; get text input
  render(<App />);

  const userNameInput = await screen.findByPlaceholderText(/Username/i);
  const playButton = await screen.findByText(/Play/i);

  // act
  // input a username which is too long (>20 characters)
  fireEvent.change(userNameInput, { target: { value: 'ABCDEFGHIJKLMNOPQRSTU' } })

  // get error msg element
  const errorMsg = await screen.findByText(/Your username cannot be longer than 20 characters./i);

  // assert
  // check value; check if error gets shown
  expect(userNameInput.value).toBe('ABCDEFGHIJKLMNOPQRSTU');
  // check if error gets shown
  expect(errorMsg).toBeInTheDocument();
  // make sure play but is not clickable
  expect(playButton).toBeDisabled();

});
