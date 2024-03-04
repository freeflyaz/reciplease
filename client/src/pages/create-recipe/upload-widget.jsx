import { useEffect, useRef, useState } from "react";

function UploadWidget({ setState }) {
  // STATES:
  let [isUploaded, setIsUploaded] = useState(false);

  // USE REFS:
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  // USE EFFECTS:
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dz1qipahy",
        uploadPreset: "nrvaimia",
        sources: ["local", "url", "camera"],
      },
      function (error, result) {
        if (error) {
          console.error(error);
        } else {
          console.log(result);
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
