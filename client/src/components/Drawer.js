import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { signout } from '../actions/userAction';

export default function Drawer({ open }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignoutHandler = () => {
    dispatch(signout(history));
  };

  return (
    <div
      className={`fixed top-0 z-20 left-0 h-full w-1/2 bg-info transform transition-all duration-300 ease-in-out ${
        !open ? '-translate-x-full' : 'translate-x-0'
      }`}
    >
      <NavLink
        to='/'
        exact
        activeClassName='bg-gray-800'
        className='no-underline text-white block pl-4 py-3 border-b border-secondary hover:bg-gray-800 transition duration-300'
      >
        Home
      </NavLink>
      <NavLink
        to='/movies'
        activeClassName='bg-gray-800'
        className='no-underline text-white block pl-4 py-3 border-b border-secondary hover:bg-gray-800 transition duration-300'
      >
        Movies
      </NavLink>
      <NavLink
        to='/jadwal'
        activeClassName='bg-gray-800'
        className='no-underline text-white block pl-4 py-3 border-b border-secondary hover:bg-gray-800 transition duration-300'
      >
        Jadwal
      </NavLink>

      {user?.role === 'user' || user?.role === 'admin' ? (
        <>
          <NavLink
            to='/profil'
            activeClassName='bg-gray-800'
            className='no-underline text-white block pl-4 py-3 border-b border-secondary hover:bg-gray-800 transition duration-300'
          >
            Profil
          </NavLink>
          <NavLink
            to='/keluar'
            className='mt-4 btn btn-primary hover:bg-red-900 transition-colors duration-300 block text-white text-center mx-6'
            onClick={onSignoutHandler}
          >
            Keluar
          </NavLink>
        </>
      ) : (
        <NavLink
          to='/masuk'
          className='mt-4 btn btn-primary hover:bg-red-900 transition-colors duration-300 block text-white text-center mx-6'
        >
          Masuk
        </NavLink>
      )}
    </div>
  );
}
