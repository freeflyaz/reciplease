import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom/vitest'
import App from '../../../src/App'; // Adjust the path as necessary
// Import from 'react-router-dom'



describe('Auth component', () => {
    it('should render text © 2024 Reciplease. All rights reserved.', () => {
      // Wrap the component in Router to avoid issues with useNavigate
      render(
          <App/>
       
      );
  
      // Access the button by role with name "Add recipe"
      const footerText = screen.getByText(/©/i) 
       
      // Assertions
     
      expect(footerText).toHaveTextContent(/©/i);
      
    });
});
