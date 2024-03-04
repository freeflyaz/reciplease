import { useEffect, useRef } from "react";

function UploadWidget({ setState }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

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
        }
      },
    );
  }, []);

  return (
    <button className="no-fill-btn" onClick={() => widgetRef.current.open()}>
      Upload Recipe Photo
    </button>
  );
}

export default UploadWidget;
