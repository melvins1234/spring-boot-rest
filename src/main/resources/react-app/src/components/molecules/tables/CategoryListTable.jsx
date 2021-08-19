import { DataGrid } from "@material-ui/data-grid";
import { useSelector } from "react-redux";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 200 },
  {
    field: "description",
    headerName: "Description",
    sortable: false,
    width: 300,
  },
];

const CategoryListTable = () => {
  const rows = useSelector((state) => state.category);

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      checkboxSelection
      disableSelectionOnClick
    />
  );
};

export default CategoryListTable;
