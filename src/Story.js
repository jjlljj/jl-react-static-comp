import React from 'react';
import Button from './Button';
import Author from './Author'
import './Story.css';

const Story = (props) => {
  return (
    <div className='Story'>
      <img className='Story-cover' src={props.storyProp.img} />
      <div className='story-info'>
        <div>
          <h3>{props.storyProp.title}</h3>
          <p>{props.storyProp.desc}</p>
        </div>

        <Author authProps={props.storyProp} />

      </div>
    </div>
  )
}

export default Story;
