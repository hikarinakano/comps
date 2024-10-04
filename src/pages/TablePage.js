import Table from '../components/Table'

function TablePage() {
  const data = [
    {name: "Orange", color: "bg-orange-500", score: 5},
    {name: "Apple", color: "bg-red-400", score: 3},
    {name: "Banana", color: "bg-yellow-400", score: 1},
    {name: "Lime", color: "bg-green-400", score: 4},
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      header: () => <th className="bg-red-500">Score</th>,
      label: "Score",
      render: (fruit) => fruit.score,
    },
  ]

  const keyFn = (fruit) => {
    return fruit.name
  }
  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn}></Table>
    </div> 
  );
}

export default TablePage;