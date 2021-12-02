import React from 'react';
import './Spinner.css';
import Overlay from '../Overlay';

export default function Spinner() {
  return (
    <>
      <div className='fixed inset-0 justify-center items-center flex z-50'>
        <div className='loader'>Loading...</div>
      </div>
      <Overlay />
    </>
  );
}
