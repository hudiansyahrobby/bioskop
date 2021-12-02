import React from 'react';

export default function overlay({ onOpen }) {
  return (
    <div
      style={{ background: 'rgba(0,0,0,0.4)' }}
      id='overlay'
      className='absolute z-10 top-0 left-0 right-0 bottom-0 transition duration-300'
      onClick={onOpen}
    ></div>
  );
}
