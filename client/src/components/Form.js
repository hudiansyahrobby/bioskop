import React from 'react';

export default function Form({ title, children, onSubmit, encType }) {
  return (
    <form
      encType={encType}
      onSubmit={onSubmit}
      className='bg-info shadow-md rounded px-8 pt-6 pb-8 mb-4'
    >
      <h2 className='text-center text-gray-700 font-bold tracking-wider uppercase text-2xl'>
        {title}
      </h2>
      {children}
    </form>
  );
}
