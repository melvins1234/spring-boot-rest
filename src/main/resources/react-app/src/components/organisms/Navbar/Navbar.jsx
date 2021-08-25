import NavHeader from "../../molecules/nav header/NavHeader";
import Dashboard from "../../molecules/menu tabs/Dashboard";
import { ViewProducts, Products } from "../../molecules/menu tabs/Products";
import UserManagement from "../../molecules/menu tabs/UserManagement";
import Calendar from "../../molecules/menu tabs/Calendar";
import Messages from "../../molecules/menu tabs/Messages";
import Payments from "../../molecules/menu tabs/Payments";
import Logout from "../../molecules/menu tabs/Logout";
import Category from "../../molecules/menu tabs/Category";
import Divider from "@material-ui/core/Divider";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import "./style.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    height: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  tab: {
    "&:hover, &:focus": {
      cursor: "pointer",
      background: "rgba(253, 46, 46, 0.2)",
      "& .nav__tab": {
        color: "#fd2e2e",
      },
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <section>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <NavHeader /> <Divider />
          </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem button className={classes.tab}>
          <Dashboard />
        </ListItem>
        <ListItem button onClick={handleClick} className={classes.tab}>
          <Products />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={[classes.nested, classes.tab].join(" ")}
            >
              <ViewProducts setOpen={setOpen} />
            </ListItem>
            <ListItem
              button
              className={[classes.nested, classes.tab].join(" ")}
            >
              <Category />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button className={classes.tab}>
          <UserManagement />
        </ListItem>
        <ListItem button className={classes.tab}>
          <Calendar />
        </ListItem>
        <ListItem button className={classes.tab}>
          <Messages />
        </ListItem>
        <ListItem button className={classes.tab}>
          <Payments />
        </ListItem>
      </List>
      <Divider />
      <ListItem button className={classes.tab}>
        <Logout />
      </ListItem>
    </section>
  );
};

export default Navbar;
