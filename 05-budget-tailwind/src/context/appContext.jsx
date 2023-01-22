import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";
import { ADD_INCOME, ADD_EXPENSE, DELETE_TRANSACTION } from "./actions";

const initialState = {
  incomeTransactions:
    JSON.parse(localStorage.getItem("incomeTransactions")) || [],
  expenseTransactions:
    JSON.parse(localStorage.getItem("expenseTransactions")) || [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "incomeTransactions",
      JSON.stringify(state.incomeTransactions)
    );
    localStorage.setItem(
      "expenseTransactions",
      JSON.stringify(state.expenseTransactions)
    );
  });

  const addIncome = (incomeTransaction) => {
    dispatch({ type: ADD_INCOME, payload: incomeTransaction });
  };

  const addExpense = (expenseTransaction) => {
    dispatch({ type: ADD_EXPENSE, payload: expenseTransaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: DELETE_TRANSACTION, payload: id });
  };

  return (
    <AppContext.Provider
      value={{ ...state, addIncome, addExpense, deleteTransaction }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};
export { AppProvider, initialState, useAppContext };
