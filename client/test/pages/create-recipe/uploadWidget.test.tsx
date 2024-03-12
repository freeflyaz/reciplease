import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UploadWidget from '../../../src/pages/create-recipe/upload-widget';
import React from 'react';

// Mocking global Cloudinary object
let simulateSuccess;
global.cloudinary = {
  createUploadWidget: vi.fn((config, callback) => {
    // Assign the simulateSuccess function for manual invocation
    simulateSuccess = () =>
      callback(null, {
        event: 'success',
        info: { secure_url: 'https://example.com/uploaded.jpg' },
      });

    return { open: vi.fn() }; // Return a mock widget with an open method
  }),
};

describe('UploadWidget component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  it('sets up the Cloudinary upload widget right when the component loads', () => {
    const setStateMock = vi.fn();
    render(<UploadWidget setState={setStateMock} />);
    expect(global.cloudinary.createUploadWidget).toHaveBeenCalled();
  });
});
