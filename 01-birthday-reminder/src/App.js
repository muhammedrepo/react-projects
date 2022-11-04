import { useState } from "react";
import List from "./components/List";
import data from "./data";

function App() {
  const [persons, setPersons] = useState(data);

  return (
    <section className="mt-20">
      <main className="max-w-md mx-auto flex flex-col items-center justify-center bg-white p-8">
        <h1 className="text-2xl font-bold mb-4 capitalize">
          birthday reminder project
        </h1>
        <List persons={persons} />
        <button
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 w-full capitalize"
          onClick={() => setPersons([])}
        >
          clear all
        </button>
      </main>
    </section>
  );
}

export default App;
