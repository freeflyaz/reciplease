import { describe,it,expect,vi,beforeEach, Mock } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { useStore } from "../../../src/zustand/store";
import FormNavigation

from "../../../src/pages/create-recipe/form-navigation";

// Mock useStore hook from Zustand
vi.mock('../../../src/zustand/store', () => ({
  useStore: vi.fn(() => ({
    activeNavButton: 1,
    updateActiveNavButton: vi.fn(),
  })),
}));

describe('FormNavigation component interactions', () => {
  const setFormSectionMock = vi.fn();
  let updateActiveNavButtonMock: Mock<any, any>;

  beforeEach(() => {
    setFormSectionMock.mockClear();
    // Reset the mocked function before each test
    updateActiveNavButtonMock = vi.fn();
    vi.mocked(useStore).mockReturnValue({
      activeNavButton: 1,
      updateActiveNavButton: updateActiveNavButtonMock,
    });
  });

  it('calls setFormSection and updateActiveNavButton on button click', async () => {
    render(<FormNavigation formSection="" setFormSection={setFormSectionMock} />);

    // Simulate clicking the 'Ingredients' navigation button
    fireEvent.click(screen.getByText('2'));
    expect(setFormSectionMock).toHaveBeenCalledWith('Ingredients');
    expect(updateActiveNavButtonMock).toHaveBeenCalledWith(2);

    // Simulate clicking the 'Method' navigation button
    fireEvent.click(screen.getByText('3'));
    expect(setFormSectionMock).toHaveBeenCalledWith('Method');
    expect(updateActiveNavButtonMock).toHaveBeenCalledWith(3);
  });
});