// src/App.test.tsx
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';
import '@testing-library/jest-dom';
import Navbar from './components/Header';
import Home from './components/Home';
import NewItem from './components/NewItem';

describe('App component', () => {
  it('renders Navbar component', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getByText('Navbar')).toBeInTheDocument();
  });

  it('renders Home component at root path', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getByText('Home')).toBeInTheDocument();
  });

  it('renders NewItem component at /new-item path', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/new-item']}>
        <App />
      </MemoryRouter>
    );
    expect(getByText('New Item')).toBeInTheDocument();
  });

  it('navigates to /new-item path when New Item link is clicked', async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const link = getByText('New Item');
    fireEvent.click(link);
    await waitFor(() => getByText('New Item'));
    expect(window.location.pathname).toBe('/new-item');
  });
});