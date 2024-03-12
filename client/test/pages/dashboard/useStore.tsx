import create from 'zustand';

// Define the initial state with necessary properties for testing
const initialState = {
  userId: 'test-user-id', // Mock a userId, adjust as needed for your implementation
  selectedCategoryButton: 'All Recipes', // Initial category selection state
  updateFilteredCategory: jest.fn(), // Mock the action that updates the filtered category
  updateSelectedCategoryButton: jest.fn(), // Mock the action that updates the selected category button
  // Add other state properties and methods as needed
};

const useStore = create(() => ({
  ...initialState,
  // Implement a mock function to simulate state changes if necessary
  // For example, for the category selection, you might simulate changing the state
  // based on the category selected. Adjust according to your actual store's logic.
}));

export default useStore;