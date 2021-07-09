import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators
} from "redux";

// take multiple functions and compose a new function out of all those

const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

const makeLouderRepeatEmbolden = (string) =>
  embolden(makeLouder(repeatThreeTimes(string)));

const makeLouderRepeatEmboldenCompose = compose(
  embolden,
  makeLouder,
  repeatThreeTimes
);

console.log(makeLouderRepeatEmbolden("hello"));
console.log(makeLouderRepeatEmboldenCompose("Hi"));
