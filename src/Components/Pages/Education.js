import React from "react";
import EduCard from "./EduCard";
import './Education.css';
import {EduDetails} from './EduDetails';
const Education =()=>{
    return (
      <>
        <div className="education-box" id="education">
        <div className="edu-title">Education</div>
          <div className="edu">
            
            <div className="edu-details">
              {
                EduDetails.map((elem, index)=>{
                  return (
                    <div className="center-div" key={index}>
                      <EduCard  eName={elem.instName} eYear={elem.instYear} ePer={elem.per} eDegree={elem.instDegree}/>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </>
    );
}
export default Education;