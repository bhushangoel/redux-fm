import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers
} from "redux";

const reducer = (state) => state;

const logEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  const logReducer = (state, action) => {
    console.log("old state : ", state, action);
    const newState = reducer(state, action);
    console.log("new state : ", newState, action);
  };

  return createStore(logReducer, initialState, enhancer);
};

// createStore(<reducer>, <state>, <enhance store function>)
const store = createStore(reducer, logEnhancer);

store.dispatch({ type: "hello" });
