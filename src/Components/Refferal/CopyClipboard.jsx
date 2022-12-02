import React from "react";
import { useState } from "react";
import './CopyClipboard.css'
import { CopyToClipboard } from "react-copy-to-clipboard";


const  CopyClipboard = () => {
    const [isCopied, setIsCopied] = useState('Adedoyin');
  const handleCopyClick =()=>{
    navigator.clipboard.writeText(isCopied)

  }
    return (
      <div className="clipboard" >
        <input className="clipboardInput"  type="text" value={isCopied} onChange={(e)=>setIsCopied (e.target.value)} readOnly />
        
        <button className="clipboardBtn" onClick={handleCopyClick} >
          <span>{isCopied ? 'Copied!' : 'Copy'}</span>
        </button>
        <div>
        {/* <CopyToClipboard text="got it" onCopy={() => "Copied"}>
        <span>Copy Account Details</span>
      </CopyToClipboard> 
        */}
     

        </div>
      </div>
      
    );
  }

  export default CopyClipboard;