import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import FormDetails from '../../../src/pages/create-recipe/form-details';
import { useStore } from '../../../src/zustand/store';

// Mocking Cloudinary's createUploadWidget function
global.cloudinary = {
  createUploadWidget: (_config: any, callback: (arg0: null, arg1: { event: string; info: { secure_url: string; }; }) => void) => () => {
    callback(null, { event: 'success', info: { secure_url: 'mocked_url' } });
  }
};

// Mock useStore hook from Zustand
vi.mock('../../../src/zustand/store', () => ({
  useStore: vi.fn(() => ({
    updateActiveNavButton: vi.fn(),
  })),
}));

const mockSetFormSection = vi.fn();

//initial state 
const initialState = {
  category: '',
  servings: 1,
  duration: 30,
  title: '',
  shortDescription: '',
  longDescription: '',
};

describe('FormDetails component', () => {
  beforeEach(() => {
    mockSetFormSection.mockClear();
    vi.mocked(useStore).mockClear();
  });

  it('renders all form inputs and the next button', () => {
    render(
      <FormDetails
        state={initialState}
        setState={() => {}}
        handleChange={() => {}}
        setFormSection={mockSetFormSection}
      />
    );

    expect(screen.getByPlaceholderText('Recipe Title')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
  });

  it('calls setFormSection on next button click', () => {
    render(
      <FormDetails
        state={initialState}
        setState={() => {}}
        handleChange={() => {}}
        setFormSection={mockSetFormSection}
      />
    );

    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);

    expect(mockSetFormSection).toHaveBeenCalledWith('Ingredients');
  });
});
