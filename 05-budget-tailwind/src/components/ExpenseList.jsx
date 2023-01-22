import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import ExpenseTransaction from "./ExpenseTransaction";

const ExpenseList = () => {
  const { expenseTransactions } = useAppContext();

  return (
    <div className="">
      <h2 className="text-2xl md:text-4xl font-light mb-8">
        Transaction History
      </h2>
      <ul className="w-full max-h-[35rem] overflow-hidden overflow-y-auto">
        {expenseTransactions.map((expenseTransaction) => (
          <ExpenseTransaction
            key={expenseTransaction.id}
            {...expenseTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
