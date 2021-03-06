import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
  Tooltip,
} from "@material-ui/core";

import AccountProfile from './AccountProfile';
import AccountProfileDetails from './AccountProfileDetails';

import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

import Pagination from "../../Pagination/Pagination";
import ModalDelete from "../../organisms/Modal/ModalDelete";

const useStyles = makeStyles((theme) => ({
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
  imageInitial: {
    borderRadius: "50%",
    height: "45px",
    width: "45px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "#fff",
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
  button: {
    padding: "7px",
  },
}));

const UserListTable = ({showAdd, setShow}) => {
  const users = useSelector((state) => state.users);
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [infoToDelete, setInfoToDelete] = useState();

  //   Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
  //
  const classes = useStyles();

  console.log(showAdd)

  return (
    <section>
      {open ? (
        <ModalDelete
          setOpen={setOpen}
          infoToDelete={infoToDelete}
          from={"User"}
        />
      ) : (
        ""
      )}
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow className={classes.headerRow}>
              <TableCell>Photo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPosts.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell scope="row">
                  {row.image !== null ? (
                    <img
                      style={{ height: "50px" }}
                      src={row.image}
                      alt={row.fullName}
                    />
                  ) : (
                    <span
                      style={{
                        background: `#${Math.floor(
                          Math.random() * 16777215
                        ).toString(16)}`,
                      }}
                      className={classes.imageInitial}
                    >
                      {row.fullName.charAt(0)}
                    </span>
                  )}
                </TableCell>
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.roles}</TableCell>
                <TableCell className={classes.actionColumn}>
                  <span>
                    <Tooltip className={classes.button} title="Edit">
                      <IconButton aria-label="edit">
                        <EditOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                  </span>

                  <span>
                    <Tooltip
                      onClick={() => {
                        setOpen(true);
                        setInfoToDelete(row.id);
                      }}
                      className={classes.button}
                      title="Delete"
                    >
                      <IconButton aria-label="delete">
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        key={"Pagignation"}
        postsPerPage={postsPerPage}
        totalPosts={users.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        className="product-pagination"
      ></Pagination>
      
      {showAdd ? <UserForm /> : null}
      
    </section>
  );
};

export default UserListTable;

export const UserForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <AccountProfile />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
