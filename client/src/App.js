import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isUserLoggedIn } from "./actions/userAction";
import HomePage from "./pages/HomePage";
// import AdminRoute from './HOC/AdminRoute';
// import UserRoute from './HOC/UserRoute';
import MoviePage from "./pages/MoviePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AddMoviePage from "./pages/AddMoviePage";
import AddCategoryPage from "./pages/AddCategoryPage";
import AddTimePage from "./pages/AddTimePage";
import AddSchedulePage from "./pages/AddSchedulePage";
import SchedulePage from "./pages/SchedulePage";
import BuyTicketPage from "./pages/BuyTicketPage";
import ProfilePage from "./pages/ProfilePage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import EditMoviePage from "./pages/EditMoviePage";

function App() {
  const dispatch = useDispatch();
  dispatch(isUserLoggedIn());

  return (
    <>
      <Router>
        <Switch>
          <Route path="/beli-tiket/:id" component={BuyTicketPage} />
          <Route path="/tambah-jadwal" component={AddSchedulePage} />
          <Route path="/kategori" component={AddCategoryPage} />
          <Route path="/waktu" component={AddTimePage} />
          <Route path="/profil" component={ProfilePage} />
          {/* <Route path='/add-category' component={AddCategoryPage} /> */}
          <Route path="/tambah-movie" component={AddMoviePage} />
          <Route path="/edit-movie/:id" component={EditMoviePage} />
          <Route path="/jadwal" component={SchedulePage} />
          <Route path="/masuk" component={LoginPage} />
          <Route path="/daftar" component={SignupPage} />
          <Route path="/movies/:id" component={MovieDetailPage} />
          <Route path="/movies" component={MoviePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
