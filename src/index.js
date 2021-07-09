import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators
} from "redux";

const initialState = { value: 0 };

const reducer = (state, action) => {
  return state;
};

const store = createStore();
