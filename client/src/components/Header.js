import AcUnitIcon from "@material-ui/icons/AcUnit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import { signout } from "../actions/userAction";
import Drawer from "./Drawer";

export default function Header({ onOpen }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignoutHandler = () => {
    dispatch(signout(history));
  };
  return (
    <nav className="bg-info fixed top-0 w-full z-50">
      <ul className="flex justify-between items-center p-6">
        <li>
          <Link
            to="/"
            className="text-white no-underline uppercase text-xl font-bold tracking-wider"
          >
            <AcUnitIcon className="text-primary mr-2" />
            Yuki <span className="text-primary">Cinema</span>
          </Link>
        </li>

        <div className="md:hidden" onClick={onOpen}>
          <MenuIcon
            className="text-white hover:text-gray-400 cursor-pointer transition duration-300"
            fontSize="large"
          />
        </div>

        <ul className="hidden lg:flex text-white  justify-between items-center space-x-4">
          <NavLink to="/" className="no-underline">
            Beranda
          </NavLink>
          <NavLink to="/movies" className="no-underline">
            Movies
          </NavLink>
          <NavLink to="/jadwal" className="no-underline">
            Jadwal
          </NavLink>
          {user?.role === "admin" && (
            <NavLink to="/tambah-movie" className="no-underline">
              Tambah Film
            </NavLink>
          )}

          {user?.role === "user" || user?.role === "admin" ? (
            <>
              <NavLink to="/profil" className="no-underline">
                Profil
              </NavLink>
              <NavLink
                to="/keluar"
                className="btn btn-primary hover:bg-red-900 transition-colors duration-300"
                onClick={onSignoutHandler}
              >
                Keluar
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/masuk"
              className="btn btn-primary hover:bg-red-900 transition-colors duration-300"
            >
              Masuk
            </NavLink>
          )}
        </ul>
      </ul>
      <Drawer />
    </nav>
  );
}
