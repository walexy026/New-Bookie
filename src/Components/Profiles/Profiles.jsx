import React from "react";
import ImageSelector from "../ImageSelector/ImageSelector";
import InputProfile from "../InputProfile/InputProfile"
import "./Profiles.css";

const Profiles = () => {
  return (
    <div>
      <h4>Profile</h4>
      <div className="profileWrapper">
        <div className="profileGoal">
          <div className="imageCropper">
            <ImageSelector
              style={{ position: "absolute", bottom: "0", right: "0px" }}
            />
          </div>
          <InputProfile/>
        </div>
      </div>
        
    </div>
  );
};

export default Profiles;
