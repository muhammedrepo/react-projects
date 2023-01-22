import { FaTrashAlt } from "react-icons/fa";
import { useAppContext } from "../context/appContext";

const ExpenseTransaction = ({ id, expenseText, expenseAmount }) => {
  const { deleteTransaction } = useAppContext();
  return (
    <li className="rounded-md  flex justify-between items-center gap-x-2 shadow-black/20 mb-4 ">
      <div className="flex justify-between items-center w-full bg-orange-600 text-xl text-white py-2 pl-2 pr-3">
        <span className="">{expenseText}</span>
        <span className="">${expenseAmount}</span>
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

export default ExpenseTransaction;
