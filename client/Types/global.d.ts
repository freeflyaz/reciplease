
interface Cloudinary {
    createUploadWidget: (
        options: {
            cloudName: string; 
            uploadPreset: string; 
            sources: string[];
        }, 
        callback: (error: any, result: { event: string; info: { secure_url: string; }; }) => void
    ) => any;
}

// Extending the Window interface to include cloudinary
interface Window {
    cloudinary: Cloudinary;
}
