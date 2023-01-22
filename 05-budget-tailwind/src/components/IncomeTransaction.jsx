import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useAppContext } from "../context/appContext";

const IncomeTransaction = ({ id, incomeText, incomeAmount }) => {
  const { deleteTransaction } = useAppContext();
  return (
    <li className="rounded-md  flex justify-between items-center gap-2 shadow-black/20 mb-4">
      <div className="flex justify-between items-center w-full bg-green-600 text-xl text-white py-2 pl-2 pr-3">
        <span className="">{incomeText}</span>
        <span className="">${incomeAmount}</span>
      </div>
      <button
        className="border-none  text-4xl text-red-600 cursor-pointer bg-transparent outline-none"
        onClick={() => deleteTransaction(id)}
      >
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default IncomeTransaction;
