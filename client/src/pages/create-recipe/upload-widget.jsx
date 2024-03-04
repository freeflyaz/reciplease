import { useEffect, useRef, useState } from "react";

function UploadWidget({ setState }) {
  // STATES:
  let [buttonState, setButtonState] = useState("Not uploaded");
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
          if (result.event === "success")
            setState((prevState) => ({
              ...prevState,
              imageUrl: result.info.secure_url,
            }));
          setButtonState("Uploaded");
        }
      },
    );
  }, []);

  // RENDER:
  return (
    <button
      className={
        buttonState === "Not Uploaded" ? "no-fill-btn" : "no-fill-btn uploaded"
      }
      onClick={() => widgetRef.current.open()}
    >
      Upload Recipe Photo
    </button>
  );
}

export default UploadWidget;
