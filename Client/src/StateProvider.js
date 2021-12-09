import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  isCompany: false,
  isLoged: false,
  user: {
    clientID: "",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    mobileNB: "",
  },
  company: {
    companyID: "",
    name: "",
    password: "",
    email: "",
    dateOfEstablishment: "",
    description: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, isCompany: action.value };
    case "SET_LOG":
      return { ...state, isLoged: action.value };
    case "SET_USER":
      return { ...state, user: action.value };
    case "SET_COMPANY":
      return { ...state, company: action.value };
    default:
      return state;
  }
}

export function StateProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
}
