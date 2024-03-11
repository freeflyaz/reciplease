// __mocks__/useStore.ts
import create from 'zustand';
import { mockUserState } from './zustand.mock';

const useStore = create(() => ({
  ...mockUserState,
  // Add other slices of your store as needed
}));

export default useStore;