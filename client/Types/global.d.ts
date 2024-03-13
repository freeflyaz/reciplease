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
  ) => {open: () => void};
}

// Extending the Window interface to include cloudinary
interface Window {
  cloudinary: Cloudinary;
}
