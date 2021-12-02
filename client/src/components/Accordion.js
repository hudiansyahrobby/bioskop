import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useState } from 'react';

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className='w-11/12 md:w-3/4 mx-auto block focus:outline-none'
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='mt-4 flex justify-between  items-center bg-info py-4 px-8 mx-auto'>
        <h2 className='text-white tracking-widest'>Lorem Ipsum</h2>
        {isOpen ? (
          <RemoveIcon style={{ fontSize: 40 }} className='text-white cursor-pointer' />
        ) : (
          <AddIcon style={{ fontSize: 40 }} className='text-white cursor-pointer' />
        )}
      </div>
      {isOpen && (
        <div>
          <p
            className={`text-white p-8 leading-7 transition duration-300 ease-in-out ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt eius error
            consectetur! Sit quas nesciunt tempore consectetur quos totam mollitia, eveniet tenetur,
            ab quis sint eligendi omnis voluptatem dolorum veniam quibusdam animi sunt maxime rerum.
            Illo omnis autem fuga perspiciatis neque ut voluptatem? Similique nam maxime porro
            laudantium ea.
          </p>
        </div>
      )}
    </button>
  );
}
