import { ADD_EXPENSE, ADD_INCOME, DELETE_TRANSACTION } from "./actions";

const reducer = (state, action) => {
  if (action.type === ADD_INCOME) {
    return {
      ...state,
      incomeTransactions: [action.payload, ...state.incomeTransactions],
    };
  }

  if (action.type === ADD_EXPENSE) {
    return {
      ...state,
      expenseTransactions: [action.payload, ...state.expenseTransactions],
    };
  }

  if (action.type === DELETE_TRANSACTION) {
    return {
      ...state,
      incomeTransactions: state.incomeTransactions.filter(
        (incomeTransaction) => incomeTransaction.id !== action.payload
      ),
      expenseTransactions: state.expenseTransactions.filter(
        (expenseTransaction) => expenseTransaction.id !== action.payload
      ),
    };
  }
};

export default reducer;
