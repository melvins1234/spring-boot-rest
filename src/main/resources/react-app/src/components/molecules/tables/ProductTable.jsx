import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "image",
    headerName: "Image",
    sortable: false,
    width: 110,
  },
  {
    field: "name",
    headerName: "Name",
    width: 250,
  },
  {
    field: "price",
    headerName: "Price",
    sortable: false,
    width: 100,
  },

  {
    field: "description",
    headerName: "Description",
    sortable: false,
    width: 300,
  },
];

const rows = [
  {
    id: 1,
    image: "Snow",
    name: "Jon",
    price: 35,
    category: "sample",
    description: "sample description",
  },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const ProductTable = () => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      checkboxSelection
      disableSelectionOnClick
    />
  );
};

export default ProductTable;