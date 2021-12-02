import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { signup } from "../actions/userAction";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner/Spinner";
import Image from "../assets/images/back.jpeg";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const { authenticated, loading } = useSelector((state) => state.user);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      nama: name,
      email,
      password,
    };
    dispatch(signup(newUser, history));
  };

  if (authenticated) {
    return <Redirect to="/profil" />;
  }
  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="background">
            <div className="image-container">
              <img
                src={Image}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className="form">
              <h1>Selamat Datang</h1>
              <h2>Silahkan Buat Akun Anda</h2>
              <form onSubmit={onSubmitHandler}>
                <div>
                  <input
                    type="text"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label>Nama </label>
                </div>
                <div>
                  <input
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Email</label>
                </div>
                <div>
                  <input
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label>Password</label>
                </div>
                <input type="submit" value="Daftar" />
                <h3 className="mt-4 text-lg">
                  Sudah Memiliki Akun ?{" "}
                  <Link
                    className="text-green-700 font-bold tracking-wider"
                    to="/masuk"
                  >
                    Masuk
                  </Link>
                </h3>
              </form>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}
