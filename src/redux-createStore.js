import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators
} from "redux";

const initialState = { value: 0 };

const INCREMENT = "INCREMENT";
const ADD = "ADD";

// action
// const incrementAction = { type: INCREMENT, payload: 5 };
// OR
//actionCreator
const increment = () => ({ type: "INCREMENT" });
const add = (amount) => ({ type: "ADD", payload: amount });

// reducer function
const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { value: state.value + 2 };
  }
  if (action.type === ADD) {
    return { value: state.value + action.payload };
  }
};

const store = createStore(reducer);

store.dispatch(increment());
store.dispatch(add(4));

console.log(store.getState());
