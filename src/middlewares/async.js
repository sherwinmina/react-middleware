export default function({ dispatch }) {
  return next => action => {
// If action does not have payload
// or, the payload does not have a .then property
// we dont't care about it, sent it on

    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    console.log(''We don't have a promise', action);
  }
}