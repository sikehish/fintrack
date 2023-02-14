import { createContext, useReducer, useContext } from "react";

export const AuthContext = createContext();

const reducer = () => {
  switch (action.type) {
    // if (action.type === "SIGNUP") {
    //     return { user: null }; //NOT IMPLEMENTING AUTO REGISTRATION ON SIGNUP
    //   } else if (action.type === "LOGIN") {
    //     return { user: action.payload };
    //   } else if (action.type === "LOGOUT") {
    //     return { user: null };
    //   } else return state;

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: JSON.parse(localStorage.getItem("user")) || null,
  });

  return (
    <AuthContext.Provider value={{ dispatch, ...state }}>
      {children}
    </AuthContext.Provider>
  );
};
