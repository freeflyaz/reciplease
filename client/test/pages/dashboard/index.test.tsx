import { describe, it, expect, beforeEach, vi } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom/vitest';
import Dashboard from '../../../src/pages/dashboard';
import { login } from '../../../src/services/api-service';
import { useStore } from 'zustand';

describe('Dashboard Component', () => {
  it('renders category filter buttons', async () => {
    render(
      <Router>
        <Dashboard />
      </Router>
    );

    const categories = ["All Recipes", "Starters", "Mains", "Sides", "Desserts", "Bakery", "Drinks", "Favourites"];
    for (const category of categories) {
      expect(screen.getByRole('button', { name: category })).toBeInTheDocument();
    }
  });
});
