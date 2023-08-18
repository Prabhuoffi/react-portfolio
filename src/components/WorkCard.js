

import React from 'react';

const WorkCard = (props) => {
  return (
    <div className='project-card'>
      <img src={props.imgsrc} alt='Project' />
      <h2 className='project-title'>{props.title}</h2>
      <div className='pro-details'>
        <p>{props.text}</p>
        <div className='pro-btns'>
          <br />
          <a href={props.githubLink} target='_blank' rel='noopener noreferrer' className='btn'>
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
