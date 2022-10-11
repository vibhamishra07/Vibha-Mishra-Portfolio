import React from 'react'
import './EduCard.css';


export default function EduCard ({eName, eYear, ePer, eDegree}) {
  return (
    <div className="edu-card" data-aos="fade-up">
      <div className="name-inst">
        <div className="year">
          <span>{eYear}</span>
        </div>
        <div className="in-name">
            {eDegree}
        </div>
        {/* <hr/> */}
      </div>
      <div className="course-title">
        <span className="name-course">
          {eName}
        </span>
        <span className="perc"> {ePer}</span>
      </div>
    </div>
  );
}
