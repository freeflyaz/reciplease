import React from 'react';
import { useEffect, useState } from 'react';

interface UploadWidgetProps {
  setState: React.Dispatch<React.SetStateAction<{ imageUrl: string }>>;
}

const UploadWidget: React.FC<UploadWidgetProps> = ({ setState }) => {
  const [isUploaded, setIsUploaded] = useState(false);

  useEffect(() => {
    // Function to initialize the widget
    const initWidget = () => {
      if (typeof window.cloudinary !== 'undefined') {
        const widget = window.cloudinary.createUploadWidget(
          {
            cloudName: 'dz1qipahy',
            uploadPreset: 'nrvaimia',
            sources: ['local', 'url', 'camera'],
          },
          (
            error: never,
            result: { event: string; info: { secure_url: string } }
          ) => {
            if (result.event === 'success') {
              setState((prevState) => ({
                ...prevState,
                imageUrl: result.info.secure_url,
              }));
              setIsUploaded(true);
            }
          }
        );

        return widget;
      } else {
        console.error('Cloudinary SDK not loaded');
      }
    };

    // Check if Cloudinary SDK is available and then initialize the widget
    if (typeof window !== 'undefined') {
      initWidget();
    }
  }, [setState]);

  return (
    <button
      id='upload_widget_opener'
      className={isUploaded ? 'uploaded' : 'no-fill-btn'}
    >
      {isUploaded ? 'Photo Uploaded' : 'Upload Recipe Photo'}
    </button>
  );
};

export default UploadWidget;
