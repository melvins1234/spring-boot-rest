import { useState } from "react";
import { useSelector } from "react-redux";

import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import Pagination from "../../Pagination/Pagination";

const useStyles = makeStyles({
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
    color: "#b4303d",
  },
});

const ProductTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const products = useSelector((state) => state.products);
  const classes = useStyles();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  let handleChange = () => {
    
  }

  return (
    <div>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow className={classes.headerRow}>
              <TableCell className={classes.column}>
                <Checkbox onChange={handleChange} />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Inventory</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPosts.map((row) => (
              <TableRow key={row.id}>
                <TableCell className={classes.column}>
                  <Checkbox/>
                </TableCell>
                <TableCell scope="row">{row.id}</TableCell>
                <TableCell>
                  <img
                    style={{ height: "50px" }}
                    src={row.productImages.map((val) => val.image)[0]}
                  />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.categories[0].name}</TableCell>
                <TableCell>{row.description}</TableCell>
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
    </div>
  );
};

export default ProductTable;
