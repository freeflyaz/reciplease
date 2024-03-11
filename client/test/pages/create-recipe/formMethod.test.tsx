import { describe,it,expect,vi,beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import FormMethod from "../../../src/pages/create-recipe/form-method";

// initial state 
const initialState = {
 method: [''],
}

const mockSetFormSection = vi.fn();
const mockSetState = vi.fn();
const mockHandleSubmit = vi.fn(event => event.preventDefault());

describe('FormMethod component', () => {
 beforeEach(() => {
  mockSetFormSection.mockClear()
  mockSetState.mockClear()
  mockHandleSubmit.mockClear()
 });

 it('renders initial method step', ()=>{
  render(
   <FormMethod
   state={initialState}
   setState={mockSetState}
   formSection="Method"
   setFormSection={mockSetFormSection}
   handleSubmit={mockHandleSubmit}
   />
  );
  fireEvent.click(screen.getByText('Add Another Step'));
  expect(mockSetState).toHaveBeenCalledWith({ method: ['', ''] });
  });

  it('handles submit action', () => {
    render(
      <FormMethod
        state={initialState}
        setState={mockSetState}
        formSection="Method"
        setFormSection={mockSetFormSection}
        handleSubmit={mockHandleSubmit}
      />
    );

    fireEvent.submit(screen.getByText('Submit Recipe'));
    expect(mockHandleSubmit).toHaveBeenCalled();
  });
 })