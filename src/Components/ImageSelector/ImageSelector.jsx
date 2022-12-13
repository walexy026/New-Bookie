// import { useFilePicker } from "use-file-picker";
// import React from "react";
import { BsFillCameraFill } from "react-icons/bs";

// const ImageSelector = ({style}) => {
//   const [openFileSelector, { filesContent, loading, errors, clear }] = useFilePicker({
//     readAs: "DataURL",
//     accept: "image/*",
//     multiple: true,
//     limitFilesConfig: { max: 1 },
//     // minFileSize: 0.1, // in megabytes
//     maxFileSize: 50,
//     imageSizeRestrictions: {
//       maxHeight: 900, // in pixels
//       maxWidth: 1600,
//       minHeight: 600,
//       minWidth: 768,
//     },
//   });

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (errors.length) {
//     return <div>Error...</div>;
//   }
  

//   return (
//     <div style={style} >
//       <div onClick={() => openFileSelector()}>
//         <BsFillCameraFill color="#1ABCCA" size='2rem' />
//         <button onClick={() => clear()}>Clear</button>
//       </div>
//       <br />
//       {filesContent.map((file, index) => (
//         <div key={index}>
//           <h2>{file.name}</h2>
//           <img alt={file.name} src={file.content}></img>
//           <br />
//         </div>
//       ))}
//     </div>
//   );
// };
// export default ImageSelector;

// const { useState } = React

// ---------------------------
// Configure react-uploader...
// ---------------------------
// import React, {useState} from 'react';
// import { Uploader } from "uploader";

// const uploader = Uploader ({ apiKey: "free" });
// const uploaderOptions = {
//   multi: false,
//   styles: {
//     colors: {
//       primary: "#377dff"
//     }
//   }
// }

// // --------------------------
// // Create an upload button...
// // --------------------------

// const MyUploadButton = ({setFiles}) =>
//   <button uploader={uploader}
//                 options={uploaderOptions}
//                 onComplete={setFiles}>
//     {({onClick}) =>
//       <button onClick={onClick}>
//         Upload a files...
//       </button>
//     }
//   </button>


// // -----------------------------
// // Display the uploaded files...
// // -----------------------------

// const MyUploadedFiles = ({files}) => files.map(file => {
//   // Tip: save 'filePath' to your DB (not 'fileUrl').
//   const filePath = file.filePath 
//   const fileUrl  = uploader.url(filePath, "thumbnail") // "raw" for un-transformed file.
//   return (
//     <p key={fileUrl}>
//       <a href={fileUrl} target="_blank">{fileUrl}</a>
//     </p>
//   );
// })

// // ----------------------
// // Run the application...
// // ----------------------

// const ImageSelector = () => {
//   const [files, setFiles] = useState([])
//   return (
//     <>
//       {files.length 
//          ? <MyUploadedFiles files={files} /> 
//          : <MyUploadButton setFiles={setFiles} />
//       }
//       <a className="developed_by" href="https://upload.io/uploader" target="_blank">
//         Powered by Upload.io
//       </a>
//     </>
//   );
// }
// export default ImageSelector;

import React from 'react';
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

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
      <button onClick={onClick}>
      <BsFillCameraFill color="#1ABCCA" size='2rem' />
      </button>
    }
  </UploadButton>

  export default ImageSelector;
