/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

export default function Video({ video }) {
  console.log('VIDEO', video);
  function getId(video) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = video?.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }

  const videoId = getId(video);
  console.log('Video ID:', videoId);

  return (
    <div className='mt-8'>
      <h2 className='text-center text-gray-600 text-2xl font-bold tracking-wide uppercase'>
        Trailer Movie
      </h2>

      <iframe
        width='560'
        className='mx-auto mt-8'
        height='315'
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
}
