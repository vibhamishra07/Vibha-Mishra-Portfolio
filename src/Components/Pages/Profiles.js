import React from "react";
import './Profiles.css';
import { profileDetails } from "./ProfileDetails";
import ProfileCard from "./ProfileCard";

const Profiles =()=>{
    return (
        <>
        <div className="profiles-box" id="profiles">
        <div className="profile-title">Profiles</div>
          <div className="details">
            
            <div className="profile-details">
              {
                profileDetails.map((elem, index)=>{
                  return (
                    <div className="center-div" key={index}>
                      <ProfileCard  pName={elem.pName} pdetail={elem.det} purl={elem.url}/>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        </>
    )
}
export default Profiles;