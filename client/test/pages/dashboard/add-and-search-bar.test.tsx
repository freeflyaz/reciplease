import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddAndSearchBar from '../../../src/pages/dashboard/add-and-search-bar';
import { BrowserRouter as Router } from "react-router-dom";

describe('AddAndSearchBar component', () => {
  it('renders the add recipe button and the search input', () => {
    const mockSetQuery = vi.fn(); // Mock the setQuery function

    render(
      <Router>
        <AddAndSearchBar query="" setQuery={mockSetQuery} />
      </Router>
    );

    const addButton = screen.getByRole('button', { name: /add recipe/i });
    const searchInput = screen.getByPlaceholderText('Search here...');

    expect(addButton).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

});
