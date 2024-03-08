import { useEffect, useRef, useState } from "react";

interface UploadWidgetProps {
  setState: React.Dispatch<React.SetStateAction<{
    imageUrl: string;
  }>>;
}
interface ExtendedWindow extends Window {
  createUploadWidget(arg0: { cloudName: string; uploadPreset: string; sources: string[]; }, arg1: (error: any, result: { event: string; info: { secure_url: string; }; }) => void): any;
  cloudinary: any; 
}

const UploadWidget: React.FC<UploadWidgetProps> = ({ setState }) => {
  // STATES:
  let [isUploaded, setIsUploaded] = useState(false);

  // USE REFS:
  const cloudinaryRef = useRef<ExtendedWindow>();
  const widgetRef = useRef<any>();

  // USE EFFECTS:
  useEffect(() => {
    cloudinaryRef.current = window as unknown as ExtendedWindow;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dz1qipahy",
        uploadPreset: "nrvaimia",
        sources: ["local", "url", "camera"],
      },
      function (error: any, result: { event: string; info: { secure_url: string; }; }) {
        if (error) {
          console.error(error);
        } else {
          if (result.event === "success") {
            setState((prevState) => ({
              ...prevState,
              imageUrl: result.info.secure_url,
            }));
            setIsUploaded(true);
          }
        }
      },
    );
  }, []);

  // RENDER:
  return (
    <button
      className={isUploaded ? "uploaded" : "no-fill-btn"}
      onClick={() => widgetRef.current.open()}
    >
      {isUploaded ? "Photo Uploaded" : "Upload Recipe Photo"}
    </button>
  );
}

export default UploadWidget;
