import React, { useState } from "react";

import FormRow from "./FormRow";
import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../context/appContext";

const AddTransaction = () => {
  const { addIncome, addExpense } = useAppContext();

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });
  const { incomeText, incomeAmount } = income;

  const handleChange = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1,
      };
      addIncome(newIncomeTransaction);
      console.log(newIncomeTransaction);
      setIncome({
        incomeText: "",
        incomeAmount: 0,
      });
    }
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });
  const { expenseText, expenseAmount } = expense;

  const handleExpenseChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };
      addExpense(newExpenseTransaction);
      setExpense({
        expenseText: "",
        expenseAmount: 0,
      });
    }
  };

  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-8 md:gap-16">
      <form onSubmit={onSubmitIncome}>
        <div className="flex flex-col gap-4 md:gap-6">
          <FormRow
            type="text"
            placeholder="Add Income..."
            name="incomeText"
            value={incomeText}
            autoComplete="off"
            handleChange={handleChange}
          />

          <FormRow
            type="number"
            placeholder="Amount"
            name="incomeAmount"
            value={incomeAmount}
            autoComplete="off"
            handleChange={handleChange}
          />

          <input
            type="submit"
            value="Submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-2xl px-5 py-2.5 mb-2"
          />
        </div>
      </form>

      <form onSubmit={onSubmitExpense}>
        <div className="flex flex-col gap-4 md:gap-6">
          <FormRow
            type="text"
            placeholder="Add Expense..."
            name="expenseText"
            value={expenseText}
            autoComplete="off"
            handleChange={handleExpenseChange}
          />

          <FormRow
            type="number"
            placeholder="Amount"
            name="expenseAmount"
            value={expenseAmount}
            autoComplete="off"
            handleChange={handleExpenseChange}
          />
          <input
            type="submit"
            value="Submit"
            className="focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-2xl px-5 py-2.5 mb-2"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
