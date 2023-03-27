import React from "react";
import './Skills.css';
import ProgressBar from "./ProgressBar";

const Skills =()=>{
    const progressReport=[
        {
            skillName: "Mongodb",
            percent:"70",
        },
        {
            skillName: "ReactJs",
            percent:"90",
        },
        {
            skillName: "Node Js",
            percent:"80",
        },
        {
            skillName: "Express Js",
            percent:"80",
        },
        {
            skillName: "HTML",
            percent:"90",
        },
        {
            skillName: "CSS",
            percent:"80",
        },
        {
            skillName: "JavaScript",
            percent:"75",
        },
        {
            skillName: "C++",
            percent:"80",
        },
        {
            skillName: "Java",
            percent:"65",
        }
    ]
    return (
      <>
        <div className="skills-box" id="skills">
          <div className="skill-title">Skills</div>
          <div className="my-div">
                {
                    progressReport.map((elem, index)=>{
                        return (
                            <div key={index} data-aos="fade-up">
                                <ProgressBar sName={elem.skillName} sPer={elem.percent} />
                            </div>
                        )
                    })
                }
          </div>
        </div>
      </>
    );
}
export default Skills;