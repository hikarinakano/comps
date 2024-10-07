import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

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
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ]

  const keyFn = (fruit) => {
    return fruit.name;
  }

  return (
    <div>
      <div>
        <b className='border-b-2'>Simple table</b>
        <br></br>
        <Table data={data} config={config} keyFn={keyFn}/>
        <br></br>
      </div>
      <div>
        <b className='border-b-2'>Table with sorting function</b>
        <br></br>
        <SortableTable data={data} config={config} keyFn={keyFn}></SortableTable>
      </div>
    </div> 
  );
}

export default TablePage;