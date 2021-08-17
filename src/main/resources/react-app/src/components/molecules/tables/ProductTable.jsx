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
  {
    id: 2,
    image: "Snow",
    name: "Jon",
    price: 35,
    category: "sample",
    description: "sample description",
  },
  {
    id: 3,
    image: "Snow",
    name: "Jon",
    price: 35,
    category: "sample",
    description: "sample description",
  },
  {
    id: 4,
    image: "Snow",
    name: "Jon",
    price: 35,
    category: "sample",
    description: "sample description",
  },
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
