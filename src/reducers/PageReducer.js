import { SET_REDIRECT_PATH } from "./ActionTypes";

const defaultState = {
  isRedirectedToNewPage: false,
  redirectPagePath: null,
};

const PageReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_REDIRECT_PATH:
      console.log("SET_REDIRECT_PATH");
      return {
        ...state,
        isRedirectedToNewPage: payload.isRedirected,
        redirectPagePath: payload.path,
      };

    default:
      throw new Error(`GenericReducer unhandled action type: ${type}`);
    // return state
  }
};

export default PageReducer;
