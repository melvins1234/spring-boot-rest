import { useSelector, useDispatch } from "react-redux";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteUser } from "../../../store/action/addUser";

const useStyles = makeStyles((theme) => ({
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

const ModalDelete = ({ setOpen, infoToDelete, from }) => {
  const token = useSelector((state) => state.isLoggedIn.userLoggedIn.token);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  let deleteHandler = () => {
    if (from === "User") {
      fetch(`/api/users/${infoToDelete}`, {
        method: "DELETE",
        headers: new Headers({
          Authorization: token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }).then(() => {
        setOpen(false);
        dispatch(deleteUser(infoToDelete));
      });
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={setOpen.length}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={setOpen}>
        <div className={classes.paper}>
          <span className={classes.headerIcon}>
            <DeleteIcon />
          </span>
          <h1 className={classes.h1}>Delete Product?</h1>
          <p id="transition-modal-description">
            You'll permanently delete the product.
          </p>
          <footer className={classes.footer}>
            <span onClick={handleClose} className={classes.spanButton}>
              Cancel
            </span>
            <span onClick={deleteHandler} className={classes.spanButton}>
              Delete
            </span>
          </footer>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalDelete;
