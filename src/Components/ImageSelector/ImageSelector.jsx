import { useFilePicker } from "use-file-picker";
import React from "react";
import { BsFillCameraFill } from "react-icons/bs";

const ImageSelector = ({style}) => {
  const [openFileSelector, { filesContent, loading, errors, clear }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
    limitFilesConfig: { max: 1 },
    // minFileSize: 0.1, // in megabytes
    maxFileSize: 50,
    imageSizeRestrictions: {
      maxHeight: 900, // in pixels
      maxWidth: 1600,
      minHeight: 600,
      minWidth: 768,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors.length) {
    return <div>Error...</div>;
  }
  

  return (
    <div style={style} >
      <div onClick={() => openFileSelector()}>
        <BsFillCameraFill color="#1ABCCA" size='2rem' />
        <button onClick={() => clear()}>Clear</button>
      </div>
      <br />
      {filesContent.map((file, index) => (
        <div key={index}>
          <h2>{file.name}</h2>
          <img alt={file.name} src={file.content}></img>
          <br />
        </div>
      ))}
    </div>
  );
};
export default ImageSelector;
