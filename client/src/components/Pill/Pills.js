import React from 'react';

import Pill from './Pill';

export default function Pills({ data }) {
  return (
    <div className='mt-8 text-center sm:text-left sm:mt-4'>
      {data?.map((_data) => {
        return <Pill name={_data.name} key={_data.id} />;
      })}
    </div>
  );
}
