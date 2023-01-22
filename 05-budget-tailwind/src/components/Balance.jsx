import { useAppContext } from "../context/appContext";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useAppContext();

  const incomeAmounts = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    (expenseTransaction) => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalExpense = expenseAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="flex flex-col items-center lg:mt-40 text-center">
      <h2 className="text-5xl md:text-7xl font-light shadow-black/40 mb-8">
        Your Balance
      </h2>
      <h3 className="text-5xl md:text-6xl font-light shadow-black/40">
        ${(totalIncome - totalExpense).toFixed(2)}
      </h3>
      <div className="flex justify-evenly mt-8 lg:mt-40 text-right shadow-black/40">
        <div className="text-green-600 my-0 mx-8">
          <h3 className="mb-8 w-full text-5xl md:text-6xl font-light">
            Income
          </h3>
          <p className="text-4xl md:text-5xl text-center font-bold">
            +${totalIncome}
          </p>
        </div>
        <div className="text-orange-600 my-0 mx-8">
          <h3 className="mb-8 w-full text-5xl md:text-6xl font-light">
            Expense
          </h3>
          <p className="text-4xl md:text-5xl text-center font-bold">
            -${totalExpense}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
