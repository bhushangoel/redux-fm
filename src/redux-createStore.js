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
    return { value: state.value + 2 };
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

// subscribing to the state changes
const subscriber = () => console.log("SUBSCRIBER : ", store.getState());
store.subscribe(subscriber);

// dispatching actions
store.dispatch(increment());
store.dispatch(add(4));

// console.log(store.getState());
