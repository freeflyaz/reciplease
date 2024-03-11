import { describe,it,expect,vi,beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import FormIngredients from "../../../src/pages/create-recipe/form-ingredients";
import { useStore } from "../../../src/zustand/store";

// Mock useStore hook from Zustand
vi.mock('../../../src/zustand/store', () => ({
  useStore: vi.fn(() => ({
    updateActiveNavButton: vi.fn(),
  })),
}));

const mockSetFormSection = vi.fn();

//initial state 
const initialState = {
  ingredients: ['']
};

describe('FormIngredients component', ()=>{
  beforeEach(()=> {
   mockSetFormSection.mockClear();
   vi.mocked(useStore).mockClear();
  });

  it('renders initial ingredient input field', () => {
    render(
      <FormIngredients
        state={initialState}
        setState={() => {}}
        setFormSection={mockSetFormSection}
      />
    );

    expect(screen.getAllByPlaceholderText('Add ingredient here')).toHaveLength(1);
  });


  it('updates the value of an ingredient field when changed', () => {
    const mockSetState = vi.fn();
    render(
      <FormIngredients
        state={initialState}
        setState={mockSetState}
        setFormSection={mockSetFormSection}
      />
    );

    fireEvent.change(screen.getByPlaceholderText('Add ingredient here'), { target: { value: 'Flour' } });
    // Expect setState to have been called with the updated ingredients array
    expect(mockSetState).toHaveBeenCalledWith({ ingredients: ['Flour'] });
  });

});