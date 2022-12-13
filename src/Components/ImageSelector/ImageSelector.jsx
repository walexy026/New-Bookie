import React from 'react';
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { BsFillCameraFill } from "react-icons/bs";

// Get production API keys from Upload.io
const uploader = Uploader({
  apiKey: "free"
});

// Customize the file upload UI (see "customization"):
const options = { multi: true }

// Render the file upload button:
const ImageSelector = () =>
  <UploadButton uploader={uploader}         // Required.
                options={options}           // Optional.
                onComplete={files => {      // Optional.
                  if (files.length === 0) {
                    console.log('No files selected.')
                  } else {
                    console.log('Files uploaded:');
                    console.log(files.map(f => f.fileUrl));
                  }
                }}>
    {({onClick}) =>
      <button onClick={onClick} style={{transform: 'translateY(-40px)'}}  >
      <BsFillCameraFill color="#1ABCCA" size='2rem' />
      </button>
    }
  </UploadButton>

  export default ImageSelector;
