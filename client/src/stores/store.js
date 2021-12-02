import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import categoryReducer from "../reducers/categoryReducer";
import movieReducer from "../reducers/movieReducer";
import scheduleReducer from "../reducers/scheduleReducer";
import userReducer from "../reducers/userReducer";
import ticketReducer from "../reducers/ticketReducer";
import kursiReducer from "../reducers/kursiReducer";

const reducer = combineReducers({
  user: userReducer,
  schedule: scheduleReducer,
  category: categoryReducer,
  movie: movieReducer,
  ticket: ticketReducer,
  kursi: kursiReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
export default store;
