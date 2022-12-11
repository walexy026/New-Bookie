import React from "react";
import ImageSelector from "../ImageSelector/ImageSelector";
import InputProfile from "../InputProfile/InputProfile"
import UpperPanel from '../UpperPanel/UpperPanel'
import "./Profiles.css";

const Profiles = () => {
  return (
    <div>
      <div className="profileWrapper">
     <UpperPanel/>
      <h4>Profile</h4>
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
