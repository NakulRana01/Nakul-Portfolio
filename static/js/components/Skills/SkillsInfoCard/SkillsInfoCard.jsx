import React from "react";
import "./SkillsInfoCard.css";

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>

      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`} >
            <div className='skill-sm-icon'>
              <img src={item.img_url} alt='' />
              <p>{item.skill}</p>
            </div>
            {/* <div className="skill-info">
              <p>{item.skill}</p>
              <p className="percentage">{item.percentage}</p>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress" style={{ width: item.percentage }} />
            </div> */}
          </React.Fragment>
        ))}
        {/* <div className='skill-sm-icon'>
          <img src='./assets/images/img07.png' alt='' />
          <p>Python</p>
        </div> */}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
