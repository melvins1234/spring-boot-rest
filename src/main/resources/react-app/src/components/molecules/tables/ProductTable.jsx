import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

import Pagination from "../../Pagination/Pagination";
import ModalDelete from "../../organisms/Modal/ModalDelete";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: "1 1 100%",
  },
  tableContainer: {
    marginTop: 10,
  },
  table: {
    minWidth: 650,
  },
  headerRow: {
    borderRadius: 10,
  },
  column: {
    padding: 0,
  },
  checkBox: {
    color: "#fd2e2e",
  },
  actionColumn: {
    width: "100",
    textAlign: "center",
    "& span": {
      display: "inline-block",
      margin: "0 5px",
      color: "#fd2e2e",
      cursor: "pointer",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(6, 1, 3),
    position: "relative",
    borderTop: "6px solid #fd2e2e",
    borderRadius: "10px",
    textAlign: "center",
  },
  headerIcon: {
    background: "#fd2e2e",
    borderRadius: "50%",
    height: "70px",
    display: "flex",
    width: "70px",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "-40px",
    transform: "translateX(-50%)",
    left: "50%",
    "& svg": {
      fontSize: "4rem",
    },
  },
  h1: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "20px",
    "& span:last-child": {
      background: "#fd2e2e",
      color: "white",
    },
  },
  spanButton: {
    cursor: "pointer",
    padding: "10px 20px",
    borderRadius: "5px",
    color: "#fd2e2e",
    border: "1px solid #fd2e2e",
    width: "169px",
    maxWidth: "100%",
    margin: "0 5px",
  },
}));

const ProductTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [postsPerPage] = useState(10);

  const products = useSelector((state) => state.products);

  const classes = useStyles();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  let handleChange = (event) => {
    let newSelectedProductds;

    if (event.target.checked) {
      newSelectedProductds = products.map((val) => val.id);
    } else {
      newSelectedProductds = [];
    }

    setSelectedRows(newSelectedProductds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelectedProductds = [];

    if (selectedIndex === -1) {
      newSelectedProductds = newSelectedProductds.concat(
        selectedRows,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedProductds = newSelectedProductds.concat(
        selectedRows.slice(1)
      );
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelectedProductds = newSelectedProductds.concat(
        selectedRows.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedProductds = newSelectedProductds.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }

    setSelectedRows(newSelectedProductds);
  };

  return (
    <section>
      {open ? <ModalDelete setOpen={setOpen} infoToDelete={selectedRows} setSelectedRows={setSelectedRows} from={'Product'}/> : ""}
      <Toolbar>
        {selectedRows.length > 0 ? (
          <Typography
            className={classes.title}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {selectedRows.length} selected
          </Typography>
        ) : (
          ""
        )}

        {selectedRows.length > 0 ? (
          <Tooltip
            onClick={() => {
              setOpen(true);
            }}
            title="Delete"
          >
            <IconButton aria-label="delete">
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
        ) : (
          ""
        )}
      </Toolbar>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow className={classes.headerRow}>
              <TableCell className={classes.column}>
                <Checkbox
                  checked={selectedRows.length === products.length}
                  onChange={handleChange}
                  indeterminate={
                    selectedRows.length > 0 &&
                    selectedRows.length < products.length
                  }
                />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Inventory</TableCell>
              <TableCell>Category</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPosts.map((row) => (
              <TableRow
                key={row.id}
                hover
                selected={selectedRows.indexOf(row.id) !== -1}
              >
                <TableCell className={classes.column}>
                  <Checkbox
                    checked={selectedRows.indexOf(row.id) !== -1}
                    onChange={(event) => handleSelectOne(event, row.id)}
                  />
                </TableCell>
                <TableCell scope="row">{row.id}</TableCell>
                <TableCell>
                  <img
                    style={{ height: "50px" }}
                    src={row.productImages.map((val) => val.image)[0]}
                    alt={row.name}
                  />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.categories[0].name}</TableCell>
                <TableCell className={classes.actionColumn}>
                  <span>
                    <EditOutlinedIcon />
                  </span>
                  {/* <span onClick={() => handleOpen(row.id)}>
                    <DeleteOutlineOutlinedIcon />
                  </span> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        key={"Pagignation"}
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        className="product-pagination"
      ></Pagination>
    </section>
  );
};

export default ProductTable;
