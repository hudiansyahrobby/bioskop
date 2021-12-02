import React from 'react';
import { Route } from 'react-router-dom';

export default function AdminRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        if (token && user.role === 'admin') {
          return <Component {...props} />;
        } else {
          return <h1 className='mt-64'>You're not authorized</h1>;
        }
      }}
    />
  );
}
