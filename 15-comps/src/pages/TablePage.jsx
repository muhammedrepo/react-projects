import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const config = [
    { label: "Name", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`p-2 mr-2 ${fruit.color}`} />,
    },
    { label: "Score", render: (fruit) => fruit.score },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <div>
      <Table keyFn={keyFn} config={config} data={data} />
    </div>
  );
}
export default TablePage;
