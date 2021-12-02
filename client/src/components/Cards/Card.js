import React from 'react';

export default function Card({ icon, title }) {
  return (
    <div className='h-64 text-white bg-info shadow-xl'>
      {icon}
      <h2 className='uppercase font-semibold tracking-wider mt-10 px-2'>{title}</h2>
    </div>
  );
}
