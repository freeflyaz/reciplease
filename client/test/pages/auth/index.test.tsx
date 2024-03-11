import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent  } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom/vitest'
import Auth from '../../../src/pages/auth/index'; // Adjust the path as necessary
// Import from 'react-router-dom'



describe('Auth component', () => {
    it('should render a button with the text "Log In"',  () => {
      render(
        <Router>
          <Auth/>
          </Router>
      );

  
      // Access the button by role with name "Add recipe"
      const addButton = screen.getAllByRole('button', { name: /log in/i });
  
      // Assertions
     
      //expect(addButton).toHaveLength(1)
      expect(addButton).length(2);
      
    //   ('Add recipe');

    });
});

describe('Auth component', () => {
  it('shows the Register Form when the Sign Up button is clicked', async () => {
    // Wrap the Auth component in Router if it or its children use routing features
    render(
      <Router>
        <Auth />
      </Router>
    );

    // Find the Sign Up button and click it
    const signUpButton = screen.getByRole('button', { name: /sign up/i });
    fireEvent.click(signUpButton);

    const firstNameInput = screen.getByPlaceholderText('First Name');

    expect(firstNameInput).toBeInTheDocument();
  });
});
