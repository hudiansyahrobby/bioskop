import React from 'react';

import StarIcon from '@material-ui/icons/Star';

export default function Stars({ rating }) {
  return (
    <div className='mt-2 flex items-center justify-center sm:justify-start'>
      <StarIcon className='text-yellow-600' />
      <span className='ml-1 text-gray-600 font-bold'>{rating}</span>
    </div>
  );
}
