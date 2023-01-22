import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header";
import IncomeList from "./components/IncomeList";

function App() {
  return (
    <div className="w-full h-screen bg-green-500 flex justify-center items-center overflow-y-auto">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 w-[90%] max-w-screen-xl h-[80vh] bg-stone-800 text-gray-300 shadow-2xl shadow-slate-900 rounded-lg overflow-y-auto">
        <div>
          <Header />
          <Balance />
        </div>
        <div className="col-span-2 p-8 md:p-16">
          <AddTransaction />
          <div className="grid grid-col-1 md:grid-cols-2 md:gap-16 mt-8 lg:mt-40 w-full">
            <IncomeList />
            <ExpenseList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
