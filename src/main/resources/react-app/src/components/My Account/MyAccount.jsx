import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import AsideNav from "./AsideNav";

import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "./style.scss";

const useStyles = makeStyles((theme) => ({
  imageInitial: {
    borderRadius: "50%",
    height: "60px",
    width: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "30px",
  },
}));

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    flexDirection: "column",
  },
}))(MuiAccordionDetails);

const MyAccount = () => {
  const userInformation = useSelector((state) => state.isLoggedIn.userLoggedIn);
  const [countries, setCountries] = useState([]);
  const [expanded, setExpanded] = useState("panel1");
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );
  const classes = useStyles();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((json) => setCountries(json));
    return;
  }, []);

  console.log(userInformation);

  return (
    <section className="myaccount">
      <div className="wrapper">
        <h2 className="myaccount--title-page">My Account</h2>
        <section className="myaccount--content">
          <AsideNav />
          <aside className="myaccount--content-form">
            <form className={classes.root} noValidate autoComplete="off">
              <h4 className="myaccount--content-form--title-page--sub">
                Avatar
              </h4>
              <section className="myaccount--content-form--header">
                <section className="myaccount--content-form--avatar">
                  {userInformation.image !== null ? (
                    <img
                      style={{ height: "50px" }}
                      src={userInformation.image}
                      alt={userInformation.fullName}
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
                      {userInformation.fullName.charAt(0)}
                    </span>
                  )}
                </section>
                <section className="myaccount--content-form--upload">
                  <span>Upload</span>
                  <input
                    type="file"
                    name="fileToUpload"
                    accept="image/gif, image/jpeg, image/png"
                    className="myaccount--content-form--input"
                  />
                </section>
                <section className="myaccount--content-form--upload">
                  <span>Remove</span>
                </section>
              </section>

              <section>
                <Accordion
                  square
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <h3 className="myaccount--content-form--title-page">
                      My Details
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <section className="myaccount--content-form--input-section">
                      <TextField
                        id="outlined-display-name"
                        label="Display name"
                        type="text"
                        variant="outlined"
                        defaultValue={userInformation.fullName.split(" ")[0]}
                      />
                      <TextField
                        id="outlined-full-name"
                        label="Full name"
                        type="text"
                        variant="outlined"
                        name="fullName"
                        defaultValue={userInformation.fullName}
                      />
                    </section>
                    <Divider />
                    <section className="myaccount--content-form--input-section">
                      <TextField
                        id="outlined-emaill"
                        label="Email address"
                        type="email"
                        variant="outlined"
                        defaultValue={userInformation.email}
                      />
                      <TextField
                        id="outlined-phone-number"
                        label="Phone number"
                        type="text"
                        variant="outlined"
                        defaultValue={userInformation.phone}
                      />
                    </section>
                    <Divider />
                    <section className="myaccount--content-form--input-section">
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          disableToolbar
                          variant="inline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="birth-date-inline"
                          label="Birth Date"
                          // value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                          name="birthdate"
                        />
                      </MuiPickersUtilsProvider>
                    </section>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  square
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <h3 className="myaccount--content-form--title-page">
                      My Address
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <h4 className="myaccount--content-form--title-page--sub">
                      Billing Address
                    </h4>
                    <Divider />
                    <section className="myaccount--content-form--input-section">
                      <TextField
                        id="outlined-street"
                        label="Street"
                        type="text"
                        variant="outlined"
                        defaultValue={
                          userInformation.billingAddress.split(/,\s*/)[0]
                        }
                      />
                      <TextField
                        id="outlined-city"
                        label="City"
                        type="text"
                        variant="outlined"
                        name="city"
                        defaultValue={
                          userInformation.billingAddress.split(/,\s*/)[1]
                        }
                      />
                    </section>
                    <Divider />
                    <section className="myaccount--content-form--input-section">
                      <TextField
                        id="outlined-state"
                        label="State"
                        type="text"
                        variant="outlined"
                        defaultValue={
                          userInformation.billingAddress.split(/,\s*/)[2]
                        }
                      />
                      <TextField
                        id="outlined-postal-code"
                        label="Postal Code"
                        type="text"
                        variant="outlined"
                        name="postalCode"
                        defaultValue={
                          userInformation.billingAddress.split(/,\s*/)[2]
                        }
                      />
                    </section>
                    <Divider />
                    <section className="myaccount--content-form--input-section">
                      <Autocomplete
                        id="combo-box-demo"
                        options={countries}
                        getOptionLabel={(option) => option.name}
                        style={{ width: "48%" }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Country"
                            variant="outlined"
                            style={{ width: "100%" }}
                          />
                        )}
                      />
                    </section>

                    <Divider />
                    <section style={{flexDirection: "column"}} className="myaccount--content-form--input-section">
                      <h4 className="myaccount--content-form--title-page--sub">
                        Billing Address
                      </h4>
                      <Divider />
                      <section className="myaccount--content-form--input-section">
                        <TextField
                          id="outlined-street"
                          label="Street"
                          type="text"
                          variant="outlined"
                          defaultValue={
                            userInformation.billingAddress.split(/,\s*/)[0]
                          }
                        />
                        <TextField
                          id="outlined-city"
                          label="City"
                          type="text"
                          variant="outlined"
                          name="city"
                          defaultValue={
                            userInformation.billingAddress.split(/,\s*/)[1]
                          }
                        />
                      </section>
                      <Divider />
                      <section className="myaccount--content-form--input-section">
                        <TextField
                          id="outlined-state"
                          label="State"
                          type="text"
                          variant="outlined"
                          defaultValue={
                            userInformation.billingAddress.split(/,\s*/)[2]
                          }
                        />
                        <TextField
                          id="outlined-postal-code"
                          label="Postal Code"
                          type="text"
                          variant="outlined"
                          name="postalCode"
                          defaultValue={
                            userInformation.billingAddress.split(/,\s*/)[2]
                          }
                        />
                      </section>
                      <Divider />
                      <section className="myaccount--content-form--input-section">
                        <Autocomplete
                          id="combo-box-demo"
                          options={countries}
                          getOptionLabel={(option) => option.name}
                          style={{ width: "48%" }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Country"
                              variant="outlined"
                              style={{ width: "100%" }}
                            />
                          )}
                        />
                      </section>
                    </section>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  square
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography>Collapsible Group Item #3</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </section>
            </form>
          </aside>
        </section>
      </div>
    </section>
  );
};

export default MyAccount;
