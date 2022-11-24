import React from "react";
import { useState } from "react";


function CopyClipboard({ copyText }) {
    const [isCopied, setIsCopied] = useState('adedoyinfisayo');
  const handleCopyClick =()=>{
    navigator.clipboard.writeText(isCopied)

  }
    return (
      <div>
        <input type="text" value={isCopied} onChange={(e)=>setIsCopied (e.target.value)} readOnly/>

        <button onClick={handleCopyClick} >
          <span>{isCopied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      
    );
  }

  export default CopyClipboard;