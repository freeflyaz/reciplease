interface Cloudinary {
  createUploadWidget: (
    options: {
      cloudName: string;
      uploadPreset: string;
      sources: string[];
    },
    callback: (
      error: never,
      result: { event: string; info: { secure_url: string } }
    ) => void
  ) => never;
}

// Extending the Window interface to include cloudinary
export interface Window {
  cloudinary: Cloudinary;
}
