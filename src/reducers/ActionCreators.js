import { SET_REDIRECT_PATH } from "../reducers/ActionTypes";

// ---------------------------------------------------
// action creator functions
// ---------------------------------------------------
export const signal_redirect = (componentPath) => {
  let payload = {
    path: componentPath,
    isRedirected: true,
  };

  return {
    type: SET_REDIRECT_PATH,
    payload,
  };
};

export const clear_redirect = () => {
  let payload = {
    path: null,
    isRedirected: false,
  };

  return {
    type: SET_REDIRECT_PATH,
    payload,
  };
};
