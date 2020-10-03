const myLoggingMiddleware = function ({ getState, dispatch }) {
  return function (next) {
    return function (action) {
      
      next(action);
      console.log(
        "%c getState after update 👉 ",
        "background:purple;color:white",
        getState()
      );
    };
  };
};

export default myLoggingMiddleware;
