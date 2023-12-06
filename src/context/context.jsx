import { createContext, useReducer, useEffect } from "react";
import { reducer, initState } from "../reducer/reducer.js";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_COUNT_TOTAL",
    });
  }, [state.cart]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
