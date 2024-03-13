import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom/vitest';
import AddAndSearchBar from '../../../src/pages/dashboard/add-and-search-bar';
import React from 'react';

describe('Auth component', () => {
  it('should render the app recipe form text <h2> ', async () => {
    // Wrap the component in Router to avoid issues with useNavigate
    render(
      <Router>
        <AddAndSearchBar />
      </Router>
    );
    const addRecipe = screen.getByRole('button', { name: /add recipe/i });
    
    fireEvent.click(addRecipe);

     const foo = await screen.getByText( /on the menu/i );
      expect(foo).toBeInTheDocument();
    //screen.debug(); // Add this line to see what's rendered
    

await waitFor(() => {
    expect(screen.getByRole('heading', { name: /on the menu/i })).toBeInTheDocument();
});

  });
});
