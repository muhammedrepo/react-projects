import { useAppContext } from "../context/appContext";
import IncomeTransaction from "./IncomeTransaction";

const IncomeList = () => {
  const { incomeTransactions } = useAppContext();

  return (
    <div className="mb-8 md:mb-0">
      <h2 className="text-2xl md:text-4xl font-light mb-8">
        Transaction History
      </h2>
      <ul className="w-full max-h-[35rem] overflow-hidden overflow-y-auto">
        {incomeTransactions.map((incomeTransaction) => (
          <IncomeTransaction
            key={incomeTransaction.id}
            {...incomeTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
