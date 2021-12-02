import * as MOVIE from "../constants/movieConstant";
import Axios from "../helpers/axios";

export const addMovie = (movie, history, toast) => async (dispatch) => {
  dispatch({ type: MOVIE.ADD_MOVIE_INIT });
  try {
    const { data } = await Axios.post("/film", movie, {
      headers: {
        "Content-Type": "multipart/data",
      },
    });
    toast.success("Berhasil Menambahkan Film Baru", {
      theme: "dark",
    });
    // dispatch({ type: MOVIE.ADD_MOVIE_SUCCESS, payload: { movie: data } });
    history.push("/movies");
  } catch (error) {
    toast.error("Gagal Menambahkan Film Baru", {
      theme: "dark",
    });
    dispatch({
      type: MOVIE.ADD_MOVIE_FAIL,
      payload: { error: error.response.data.message },
    });
  }
};

export const getMovies = (params) => async (dispatch) => {
  dispatch({ type: MOVIE.GET_MOVIE_INIT });
  try {
    const { data } = await Axios.get("/film", {
      params,
    });

    dispatch({
      type: MOVIE.GET_MOVIE_SUCCESS,
      payload: { movies: data },
    });
  } catch (error) {
    dispatch({
      type: MOVIE.GET_MOVIE_FAIL,
      payload: { error: error.response.data.message },
    });
  }
};

export const getStudios = () => async (dispatch) => {
  dispatch({ type: MOVIE.GET_STUDIO_INIT });
  try {
    const { data } = await Axios.get("/studio");
    console.log(data);
    dispatch({
      type: MOVIE.GET_STUDIO_SUCCESS,
      payload: { studios: data },
    });
  } catch (error) {
    dispatch({
      type: MOVIE.GET_STUDIO_FAIL,
      payload: { error: error.response.data.message },
    });
  }
};

export const getMovieById = (id) => async (dispatch) => {
  dispatch({ type: MOVIE.GET_MOVIE_BY_ID_INIT });
  try {
    const { data } = await Axios.get(`/film/${id}`);

    dispatch({
      type: MOVIE.GET_MOVIE_BY_ID_SUCCESS,
      payload: { movie: data[0] },
    });
  } catch (error) {
    dispatch({
      type: MOVIE.GET_MOVIE_BY_ID_FAIL,
      payload: { error: error.response.data.message },
    });
  }
};

export const updateMovie =
  (id, movieData, history, toast) => async (dispatch) => {
    try {
      const { data } = await Axios.patch(`/film/${id}`, movieData, {
        headers: {
          "Content-Type": "multipart/data",
        },
      });
      toast.success("Berhasil Mengupdate Film", {
        theme: "dark",
      });
      history.push("/movies");
    } catch (error) {
      toast.error("Gagal Mengupdate Film", {
        theme: "dark",
      });
      // dispatch({
      //   type: MOVIE.ADD_MOVIE_FAIL,
      //   payload: { error: error.response.data.message },
      // });
    }
  };

export const deleteMovie = (id, toast) => async (dispatch) => {
  dispatch({ type: MOVIE.DELETE_MOVIE_INIT });
  try {
    await Axios.delete(`/film/${id}`);
    toast.success("Berhasil Menghapus Film", {
      theme: "dark",
    });
    dispatch({ type: MOVIE.DELETE_MOVIE_SUCCESS, payload: { id } });
  } catch (error) {
    toast.error("Gagal Menghapus Film", {
      theme: "dark",
    });
    // dispatch({
    //   type: MOVIE.DELETE_MOVIE_FAIL,
    //   payload: { error: error.response.data.message },
    // });
  }
};

export const resetMovie = () => async (dispatch) => {
  dispatch({ type: MOVIE.RESET_MOVIE });
};
