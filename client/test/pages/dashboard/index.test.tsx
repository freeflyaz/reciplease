import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom/vitest';
import Dashboard from '../../../src/pages/dashboard';
import zustand from 'zustand';

// Mock the Zustand store
vi.mock('./useStore', () => ({
  __esModule: true,
  default: vi.fn(() => ({
    userId: 'test-user-id',
    // Mock other parts of your store as needed
  })),
}));

vi.mock('../../../src/services/api-service', () => ({
  getRecipes: vi.fn().mockResolvedValue({
    data: [
      {
        _id: "65eb08d0290a7f96cc2419ce",
        title: "Colita de Cuadril",
        shortDescription: "Carne de Res",
        longDescription: "Tri-tip",
        imageUrl: "https://res.cloudinary.com/dz1qipahy/image/upload/v1709901962/vl2n6sk7j0vkjdtbjeiz.jpg",
        category: "Mains",
        servings: 4,
        duration: 30,
        ingredients: [
            "Chimichurry",
            "Tri-tip",
            "coal"
        ],
        method: [
            "Cut diagonally"
        ],
        favouritedBy: [],
        __v: 0
      },
    ],
    message: "Successfully retrieved recipes for user",
  }),
}));

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

  it('renders correctly with mock data', async () => {
    render(
      <Router>
        <Dashboard />
      </Router>
    );

    // Assert that your mock data is rendered as expected
    expect(await screen.findByText('Colita de Cuadril')).toBeInTheDocument();
    // Add any additional assertions here
  });
});
