import { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import {category} from '../../../store/action/category'

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
  const dispatch = useDispatch();

  useEffect(() => {
    return fetch("api/categories")
    .then((res) => res.json())
    .then((json) => dispatch(category(json)));
  }, [])

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
