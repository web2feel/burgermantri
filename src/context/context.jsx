import { createContext, useReducer, useEffect } from "react";
import { reducer, initState } from "../reducer/reducer.js";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  let storedState = JSON.parse(localStorage.getItem("burgerState"));
  let initialState = storedState || initState;

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_COUNT_TOTAL",
    });
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem("burgerState",JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
