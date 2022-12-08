import React from "react";
import "./UpperPanel.css";
import { Icon } from "@iconify/react";

const UpperPanel = () => {
  return (
    <div className="upperpanel">
      <div className="uppericon">
        <Icon icon="fluent:alert-20-filled" fontSize="2rem" color="#292D32" opacity='0.4' />
      </div>
    </div>
  );
};

export default UpperPanel;
