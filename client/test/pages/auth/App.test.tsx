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
      const footerText = screen.getByText(/©/i) 
      expect(footerText).toHaveTextContent(/©/i);
    });
});


