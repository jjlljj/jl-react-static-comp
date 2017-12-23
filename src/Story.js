import React from 'react';
import Button from './Button';
import Author from './Author'
import './Story.css';

const Story = (props) => {
  return (
    <div className='Story'>
      <img src={props.storyProp.img} />
      <div className='story-info'>
        <div>
          <h3>{props.storyProp.title}</h3>
          <p>{props.storyProp.desc}</p>
        </div>
        
        <Author authProps={props.storyProp} />
        {/* create an Author component and add it here */}
        {/* it will need properties of the author image, name, and the estimated reading time of the story */}
      </div>
    </div>
  )
}

export default Story;
