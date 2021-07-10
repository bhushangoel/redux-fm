import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators
} from "redux";

// original state of the application
const initialState = { value: 0 };

const INCREMENT = "INCREMENT";
const ADD = "ADD";

// reducer function
const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { value: state.value + 100 };
  }
  if (action.type === ADD) {
    return { value: state.value + action.payload };
  }
};

// store created using createStore method
const store = createStore(reducer);

// action object
// const incrementAction = { type: INCREMENT, payload: 5 };
// OR
//actionCreator functions
const increment = () => ({ type: INCREMENT });
const add = (amount) => ({ type: ADD, payload: amount });

// using bindActionCreators to bind action creators with store.dispatch
// so that we don't need to write store.dispatch() every time
const actions = bindActionCreators({ increment, add }, store.dispatch);
actions.add(200);
actions.increment();

console.log("CURRENT STATE : ", store.getState());
