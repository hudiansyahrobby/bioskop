import React from 'react';
import BannerImage from '../assets/images/banner.webp';

export default function Banner() {
  return (
    <div
      style={{ backgroundImage: `url(${BannerImage})` }}
      className='mt-20 h-56 w-full flex justify-center items-center bg-center bg-fixed bg-cover'
    >
      <h2 className='mx-4 text-4xl lg:text-5xl uppercase font-semibold text-center text-white tracking-wider'>
        Tonton Movie Sekarang
      </h2>
    </div>
  );
}
