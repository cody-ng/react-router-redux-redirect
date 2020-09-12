import React, {
  createContext,
  useReducer,
  useContext,
  //useCallback,
} from "react";

import PageReducer from "../reducers/PageReducer";

const pageContext = createContext();
const pageDispatchContext = createContext();

const initialState = {
  isLoading: false,
  isRedirectedToPage: false,
  redirectPagePath: null,
  error: null,
};

const PageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PageReducer, initialState);

  return (
    <pageContext.Provider value={state}>
      <pageDispatchContext.Provider value={dispatch}>
        {children}
      </pageDispatchContext.Provider>
    </pageContext.Provider>
  );
};

const usePageContext = () => {
  const context = useContext(pageContext);
  if (context === undefined) {
    throw new Error(`usePageContext must be used within a PageProvider`);
  }
  return context;
};

const usePageDispatchContext = () => {
  const context = useContext(pageDispatchContext);
  if (context === undefined) {
    throw new Error(
      `usePageDispatchContext must be used within a PageProvider`
    );
  }
  return context;
};

export {
  // context-related functions
  PageProvider,
  usePageContext,
  usePageDispatchContext,
};
