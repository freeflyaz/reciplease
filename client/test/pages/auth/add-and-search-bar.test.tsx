import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom/vitest';
import AddAndSearchBar from '../../../src/pages/dashboard/add-and-search-bar'; // Adjust the path as necessary
import FormDetails from '../../../src/pages/create-recipe/form-details'; // Ensure this is the correct path

describe('Add recipe process', () => {
  it('should navigate to FormDetails when adding a new recipe', async () => {
    // Mock any necessary functions or API calls if necessary
    
    render(
      <Router>
      <Routes>
        <Route path="/" element={<AddAndSearchBar />} />
        <Route path="/create-recipe" element={<FormDetails />} />
      </Routes>
    </Router>
  );

    // Assuming 'Add Recipe' button leads to the FormDetails component
    const addRecipeButton = screen.getByRole('button', { name: /add recipe/i });
    fireEvent.click(addRecipeButton);

//    screen.debug()

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /on the menu/i })).toBeInTheDocument();
    });


  });
});
