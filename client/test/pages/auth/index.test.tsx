import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom/vitest'
import Auth from '../../../src/pages/auth/index'; // Adjust the path as necessary
// Import from 'react-router-dom'



describe('Auth component', () => {
    it('should render a button with the text "Log In"',  () => {
      // Wrap the component in Router to avoid issues with useNavigate
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
