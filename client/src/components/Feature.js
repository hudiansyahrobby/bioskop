import React from 'react';

import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FastfoodIcon from '@material-ui/icons/Fastfood';

export default function feature({ direction }) {
  let element;
  if (direction === 'right') {
    element = (
      <div className='mt-20 flex flex-col justify-center items-center md:flex-row md:items-stretch'>
        <PhoneAndroidIcon style={{ fontSize: 350 }} className='text-white' />
        <div className='content mt-16 mx-12 md:mx-0 md:mr-16 text-center md:text-left'>
          <h2 className='text-2xl text-primary font-bold tracking-wider'>Beli Tiket Dari Rumah</h2>
          <p className='text-white mt-4 text-sm leading-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis dolore, sequi
            nisi eligendi modi voluptatem ipsam, vel itaque quo ducimus corrupti minus quasi alias
            quam natus error aliquid placeat.
          </p>
        </div>
      </div>
    );
  } else if (direction === 'left') {
    element = (
      <div className='flex flex-col justify-center items-center md:flex-row md:items-stretch md:ml-auto mt-20'>
        <FastfoodIcon style={{ fontSize: 350 }} className='text-white md:order-2 md:pr-12' />
        <div className='content mt-16 mx-12 text-center md:order-1 md:mx-0 md:ml-16 md:text-left '>
          <h2 className='text-2xl text-primary font-bold tracking-wider'>
            Dapatkan Makanan Gratis
          </h2>
          <p className='text-white mt-4 text-sm leading-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis dolore, sequi
            nisi eligendi modi voluptatem ipsam, vel itaque quo ducimus corrupti minus quasi alias
            quam natus error aliquid placeat.
          </p>
        </div>
      </div>
    );
  }
  return <div>{element}</div>;
}
