export const variant = (values, defaultValue) => value =>
  values[value] ?? values[defaultValue];

export function makeSuspendable(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    promise,
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}

export const once = fn => {
  let result;

  return (...args) => {
    if (result === undefined) {
      result = fn(...args);
    }

    return result;
  };
};

export const oncePerId = (fn, identifier) => {
  let result = [];

  return (...args) => {
    if (result[identifier] === undefined) {
      result[identifier] = fn(...args);
    }

    return result;
  };
};
