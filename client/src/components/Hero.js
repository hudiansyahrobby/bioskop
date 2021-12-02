import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/images/hero.webp';

export default function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${HeroImage})` }}
      className='h-screen w-screen bg-right bg-cover flex justify-center lg:justify-end items-center'
    >
      <div className='content px-4 lg:w-1/3 mr-10 text-center'>
        <h1 className='text-white text-3xl uppercase font-bold'>
          Yuki <span className='text-primary'>Cinema</span>
        </h1>
        <p className='text-white text-sm font-light mt-4 leading-7'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quasi enim sit vero
          iusto, illo temporibus quibusdam
        </p>
        <Link
          to='/jadwal'
          className='btn btn-primary-outline mt-4 block w-32 mx-auto font-semibold text-white tracking-wider hover:bg-primary transition-all duration-300'
        >
          Beli Tiket
        </Link>
      </div>
    </div>
  );
}
