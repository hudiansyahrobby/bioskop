import React from 'react';

export default function StoryLine({ overview }) {
  return (
    <div className='text-center mt-8'>
      <h2 className='text-gray-600 text-2xl font-bold tracking-wide uppercase'>Sinopsis Movie</h2>
      <p className='text-gray-500 mt-4'>{overview}</p>
    </div>
  );
}
