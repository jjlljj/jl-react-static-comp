import React from 'react';
import './Author.css';

const Author = (props) =>  {

  return (
    <div className='story-author-info'>
      <img src={props.authProps.authImg} className='story-author-image' />
      <div className='story-author-text'>
        <h4>{props.authProps.authName}</h4>
        <h4>{props.authProps.estTime} read</h4>
      </div>
    </div>
  )
}

export default Author;