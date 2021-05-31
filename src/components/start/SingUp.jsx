import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";

import backgroundImage from "../../img/backgroundImage.png";
import logoJPG from "../../img/logoJPG.JPG";

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    backgroundImage: `url(${backgroundImage})`,
    width: "100%",
    height: " 100%",
    backgroundSize: "cover",
    backgroundPosition: "center ",
    position: "absolute",
    top: "0px",
    right: "0px",
    background: "#21282a",
    overflow: "auto",
    flexGrow: 1,
    //  display: "flex",
    // flexDirection: "column",
  },
}));

function SingUp(props) {
  const classesBackgrond = useStyles();
  const { classes } = props;
  const [details, setDetails] = React.useState({
    phone: "",
  });
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleOnChange = (value) => {
    setDetails({ ...details, phone: value });
  };
  const onChange = (value) => {
    console.log("Captcha value:", value);
  };
  return (
    // <div className={classesBackgrond.landingContainer}>
    <div
      style={{
        height: "100%",
        width: "30rem",
        display: "flex",
        alignItems: "center",
        marginLeft: "25rem",
        marginTop: "1rem",
      }}
    >
      <Grid container item xs={12} spacing={2}>
        <Grid item xs={12}>
          <img className={classes.logoImage} src={logoJPG} alt="logo-image" />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.textFieldLabel}>First Name</Typography>
          <TextField
            fullWidth
            type="text"
            id="first-name"
            variant="outlined"
            placeholder="First Name"
            className={classes.formTextField}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.textFieldLabel}>Last Name</Typography>
          <TextField
            fullWidth
            type="text"
            id="last-name"
            variant="outlined"
            placeholder="Last Name"
            className={classes.formTextField}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.textFieldLabel}>Email</Typography>
          <TextField
            fullWidth
            type="email"
            id="email-singup"
            variant="outlined"
            placeholder="Email"
            className={classes.formTextField}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.textFieldLabel}>
            Phone Number
          </Typography>
          <PhoneInput
            inputStyle={{ height: "3.5rem", width: "14rem" }}
            country={"us"}
            //  defaultCountry={"us"}
            value={details.phone}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.textFieldLabel}>Currency</Typography>
          <FormControl
            fullWidth
            variant="outlined"
            className={classes.formTextField}
          >
            <Select
              fullWidth
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>USA ($)</MenuItem>
              <MenuItem value={20}>USA ($)</MenuItem>
              <MenuItem value={30}>USA ($)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.textFieldLabel}>Password</Typography>
          <TextField
            fullWidth
            type="password"
            id="client-id"
            variant="outlined"
            placeholder="Password"
            className={classes.formTextField}
          />
        </Grid>
        {/* <Grid container item xs={12} justify="center">
          <ReCAPTCHA
            sitekey="6LfpJbUZAAAAADsrz9JiktLlGoUbUfDiwObE5vRm"
            onChange={onChange}
          />
        </Grid> */}
        <Grid item xs={12}>
          <Typography
            style={{ textAlign: "right" }}
            className={classes.redColorText}
          >
            Terms & Conditions and Privacy Notice
          </Typography>
        </Grid>

        <Grid item xs={12}>
          {" "}
          <Button
            style={{ width: "100%", marginTop: "2rem" }}
            className={classes.mainBtn}
          >
            Sing Up
          </Button>
        </Grid>
      </Grid>
      {/* </div> */}
    </div>
  );
}

export default SingUp;
