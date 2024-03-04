import { useEffect, useRef } from "react";

function UploadWidget({ state, setState }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dz1qipahy",
        uploadPreset: "nrvaimia",
      },
      function (error, result) {
        if (error) {
          console.error(error);
        } else {
          if (result.event === "success")
            setState((state) => ({
              ...state,
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
