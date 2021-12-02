import React from 'react';
import Card from './Card';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import EventIcon from '@material-ui/icons/Event';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const feature = [
  {
    icon: <EuroSymbolIcon style={{ fontSize: 100 }} className='mt-10 text-secondary' />,
    title: 'Bioskop Termurah',
  },
  {
    icon: <PlayCircleFilledIcon style={{ fontSize: 100 }} className='mt-10 text-primary' />,
    title: 'Tonton Movie Terbaik',
  },
  {
    icon: <EventIcon style={{ fontSize: 100 }} className='mt-10 text-secondary' />,
    title: 'Buka Setiap Hari',
  },
];

export default function Cards() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center text-center sm:gap-5 gap-y-5 w-full mx-auto px-4 mt-20'>
      {feature.map(({ icon, title }) => {
        return <Card key={title} title={title} icon={icon} />;
      })}
    </div>
  );
}
