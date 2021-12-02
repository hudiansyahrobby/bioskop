import React from 'react';

import SearchIcon from '@material-ui/icons/Search';

export default function search({ onSearch, onChange }) {
  return (
    <div className='mt-4 flex justify-center'>
      <form
        className='bg-info py-2 px-3 flex justify-between items-center w-full'
        onSubmit={onSearch}
      >
        <input
          type='text'
          placeholder='Cari Movie ...'
          className='bg-transparent focus:outline-none text-white tracking-wider w-full'
          onChange={onChange}
        />
        <SearchIcon className='text-white' />
      </form>
    </div>
  );
}
