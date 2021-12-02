import React from 'react';

export default function Producer({ year, runtime }) {
  return (
    <div className='mt-4'>
      <h2 className='text-gray-600 text-sm font-bold text-center sm:text-left'>
        {year} &bull; {runtime} Menit
      </h2>
    </div>
  );
}
