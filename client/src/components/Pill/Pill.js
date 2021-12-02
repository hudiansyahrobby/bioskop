import React from 'react';

export default function Pill({ name }) {
  return (
    <span className='px-4 py-2 rounded-full bg-info text-gray-300 tracking-wider mr-2 sm:px-2 sm:py-1 text-sm md:text-sm md:px-4 md:py-2'>
      {name}
    </span>
  );
}
