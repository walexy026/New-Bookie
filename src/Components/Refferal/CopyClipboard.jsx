import React from "react";
import { useState } from "react";
import './CopyClipboard.css'


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
      </div>
      
    );
  }

  export default CopyClipboard;