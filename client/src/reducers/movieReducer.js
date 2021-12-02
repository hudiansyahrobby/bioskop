import * as MOVIE from "../constants/movieConstant";

const initialState = {
  movies: [],
  movie: [],
  studios: [],
  success: "",
  error: "",
  loading: false,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE.ADD_MOVIE_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case MOVIE.ADD_MOVIE_SUCCESS:
      state = {
        ...state,
        loading: false,
        success: action.payload.success,
        error: "",
        movie: state.movie.concat(action.payload.movie),
      };
      break;
    case MOVIE.ADD_MOVIE_FAIL:
      state = {
        ...state,
        loading: false,
        success: "",
        error: action.payload.error,
      };
      break;
    case MOVIE.GET_MOVIE_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case MOVIE.GET_MOVIE_SUCCESS:
      state = {
        ...state,
        loading: false,
        movies: action.payload.movies,
      };
      break;
    case MOVIE.GET_MOVIE_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case MOVIE.GET_MOVIE_BY_ID_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case MOVIE.GET_MOVIE_BY_ID_SUCCESS:
      state = {
        ...state,
        loading: false,
        movie: action.payload.movie,
      };
      break;
    case MOVIE.GET_MOVIE_BY_ID_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case MOVIE.DELETE_MOVIE_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case MOVIE.DELETE_MOVIE_SUCCESS:
      state = {
        ...state,
        loading: false,
        movie: state.movie.filter(({ _id }) => _id !== action.payload.id),
      };
      break;
    case MOVIE.DELETE_MOVIE_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case MOVIE.RESET_MOVIE:
      state = {
        ...state,
        error: "",
        success: "",
      };
      break;

    case MOVIE.GET_STUDIO_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case MOVIE.GET_STUDIO_SUCCESS:
      state = {
        ...state,
        loading: false,
        studios: action.payload.studios,
      };
      break;
    case MOVIE.GET_STUDIO_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    default:
      return state;
  }
  return state;
}
