import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { signin } from '../actions/userAction';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner/Spinner';
import Image from '../assets/images/back.jpeg';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const { authenticated, loading } = useSelector((state) => state.user);

  const history = useHistory();
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
    };
    dispatch(signin(newUser, history));
  };

  if (authenticated) {
    return <Redirect to='/profil' />;
  }
  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className='background'>
            <div className='image-container'>
              <img src={Image} alt='' style={{ width: '100%', height: '100%' }} />
            </div>

            <div className='form'>
              <h1>Selamat Datang</h1>
              <h2>Silahkan Login Ke Akun Anda</h2>
              <form onSubmit={onSubmitHandler}>
                <div>
                  <input type='email' required onChange={(e) => setEmail(e.target.value)} />
                  <label>Email</label>
                </div>
                <div>
                  <input type='password' required onChange={(e) => setPassword(e.target.value)} />
                  <label>Password</label>
                </div>
                <input type='submit' value='Login' />
              </form>

              <h3 className='mt-4 text-lg'>
                Tidak Memiliki Akun ?{' '}
                <Link className='text-green-700 font-bold tracking-wider' to='/daftar'>
                  Daftar
                </Link>
              </h3>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}
