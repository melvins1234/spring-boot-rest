import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: "Katarina",
    lastName: "Smith",
    email: "demo@devias.io",
    phone: "",
    state: "Alabama",
    country: "USA",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [countries, setCountries] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((json) => setCountries(json));
    return;
  }, []);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Display Name"
                name="nickname"
                // onChange={handleChange}
                // value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                // onChange={handleChange}
                required
                // value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                // onChange={handleChange}
                required
                // value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                // onChange={handleChange}
                // value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
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
            </Grid>
            <Grid item md={12} xs={12}>
              <Divider />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Street"
                name="street"
                // onChange={handleChange}
                // value={values.phone}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="City"
                name="city"
                // onChange={handleChange}
                // value={values.phone}
                variant="outlined"
              />
            </Grid>
            {/*  */}
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Postal Code"
                name="postalCode"
                // onChange={handleChange}
                // value={values.phone}
                variant="outlined"
              />
            </Grid>
            
            <Grid item md={6} xs={12}>
              <Autocomplete
                id="combo-box-demo"
                options={countries}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Country"
                    fullWidth
                    label="Country"
                    name="country"
                    // onChange={handleChange}
                    required
                    value={values.country}
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
