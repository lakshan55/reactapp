import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PhoneVerificationModle from "./PhoneVerificationModle";
import PhoneVerificationSuccess from "./PhoneVerificationSuccess";
import backgroundImage from "../../../img/backgroundImage.png";
import logoJPG from "../../../img/logoJPG.JPG";

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
function PhoneVerification(props) {
  const classesBackgrond = useStyles();
  const { classes } = props;
  const [details, setDetails] = React.useState("");
  const handleOnChange = (value) => {
    setDetails(value);
  };
  // verification  modal
  const [openVerifyPhoneNo, setOpenVerifyPhoneNo] = React.useState(false);
  // verification success modal
  const [openVerifySuccess, setOpenVerifySuccess] = React.useState(false);
  const handleClickOpen = () => {
    setOpenVerifyPhoneNo(true);
  };

  const handleVerifyPhoneNumber = () => {
    setOpenVerifyPhoneNo(false);
    setOpenVerifySuccess(true);
  };
  const submitPhoneNumber = (e) => {
    e.preventDefault();
  };

  const handleVerifySubmit = () => {
    setOpenVerifySuccess(false);
  };
  return (
    <div className={classesBackgrond.landingContainer}>
      <PhoneVerificationModle
        classes={classes}
        openVerifyPhoneNo={openVerifyPhoneNo}
        setOpenVerifyPhoneNo={setOpenVerifyPhoneNo}
        handleVerifyPhoneNumber={handleVerifyPhoneNumber}
      />

      <PhoneVerificationSuccess
        classes={classes}
        openVerifySuccess={openVerifySuccess}
        setOpenVerifySuccess={setOpenVerifySuccess}
        handleVerifySubmit={handleVerifySubmit}
      />
      <div
        style={{
          height: " 90%",
          width: "30rem",
          display: "flex",
          alignItems: "center",
          marginLeft: "25rem",
          marginTop: "3rem",
        }}
      >
        <form onSubmit={submitPhoneNumber}>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
              <img
                className={classes.logoImage}
                src={logoJPG}
                alt="logo-image"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" className={classes.dialogTitle}>
                Phone Number Verification
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Enter your Phone number for verification</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.textFieldLabel}>
                Phone Number
              </Typography>
              <PhoneInput
                inputProps={{
                  required: true,
                  autoFocus: true,
                }}
                required
                inputStyle={{ height: "3.5rem", width: "16rem" }}
                country={"us"}
                //  defaultCountry={"us"}
                value={details}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.textFieldLabel}>
                A verification will be sent to your number
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {" "}
              <Button
                type="submit"
                onClick={handleClickOpen}
                style={{ width: "100%", marginTop: "2rem" }}
                className={classes.mainBtn}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default PhoneVerification;
