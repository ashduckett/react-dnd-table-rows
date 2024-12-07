import Table from './Table';

const tableData = [
  {
    id: 1,
    firstName: 'Some 1',
    lastName: 'Else'
  },
  {
    id: 2,
    firstName: 'Some 2',
    lastName: 'Else'
  },
  {
    id: 3,
    firstName: 'Some 3',
    lastName: 'Else'
  },
  {
    id: 4,
    firstName: 'Some 4',
    lastName: 'Else'
  },
];


function App() {
  return (
    <Table data={tableData} />
  );
}

export default App;
