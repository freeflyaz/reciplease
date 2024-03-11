// __mocks__/useStore.ts
import { StateCreator } from 'zustand';

const createMockStore = <T extends object>(initialState: T): StateCreator<T> => {
  return () => initialState;
};

export const mockUserState = {
  userId: 'test-user-id', // Mock a userId, adjust as needed for your implementation
  // Add other state properties and methods as needed
};

// Use this mock store in your test setup

