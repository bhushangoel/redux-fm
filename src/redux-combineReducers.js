import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers
} from "redux";

// setting up initial state
const initialState = {
  users: [
    { id: 1, name: "Steve" },
    { id: 2, name: "Eric" }
  ],
  tasks: [
    { title: "File the TPS reports" },
    { title: "Order more energy drinks" }
  ]
};

const ADD_USER = "ADD_USER";
const ADD_TASK = "ADD_TASK";

// action creator function
const addTask = (title) => ({ type: ADD_TASK, payload: { title } });
const addUser = (name) => ({ type: ADD_USER, payload: { name } });

// SPLITTING UP REDUCER INTO SMALLER REDUCER FUNCTIONS
// user reducer function
const userReducer = (users = initialState.users, action) => {
  if (action.type === ADD_USER) {
    return [...users, action.payload];
  }
  return users;
};

// task reducer
const taskReducer = (tasks = initialState.tasks, action) => {
  if (action.type === ADD_TASK) {
    return [...tasks, action.payload];
  }
  return tasks;
};

// reducer function
// const reducer = (state = initialState, action) => {
//   if (action.type === ADD_USER) {
//     return {
//       ...state,
//       users: [...state.users, action.payload]
//     };
//   }

//   if (action.type === ADD_TASK) {
//     return {
//       ...state,
//       tasks: [...state.tasks, action.payload]
//     };
//   }
// };

// using combineReducer
const reducer = combineReducers({ users: userReducer, tasks: taskReducer });

// creating store
const store = createStore(reducer, initialState);

// binding actions
const action = bindActionCreators({ addTask, addUser }, store.dispatch);

// dispatching actions
action.addTask("Record the statistics");
action.addUser("Marc");

console.log(store.getState());
