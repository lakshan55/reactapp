import React from "react";

import { Grid, Typography, Button, Dialog, Slide } from "@material-ui/core";
import VerificationInput from "react-verification-input";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function PhoneVerificationModle(props) {
  const {
    classes,
    openVerifyPhoneNo,
    setOpenVerifyPhoneNo,
    handleVerifyPhoneNumber,
  } = props;

  const handleVerifyDialogClose = () => {
    setOpenVerifyPhoneNo(false);
  };
  return (
    <div>
      <Dialog
        classes={{ paper: classes.rootDialog }}
        maxWidth="sm"
        open={openVerifyPhoneNo}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleVerifyDialogClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={classes.divDialog}>
          <Grid container>
            <Grid container item xs={12} justify="center">
              <Typography variant="h4" className={classes.dialogTitle}>
                Enter Verification Code
              </Typography>
            </Grid>
            <Grid
              container
              style={{ marginTop: "4rem", marginBottom: "4rem" }}
              item
              xs={12}
              justify="center"
            >
              <div style={{ width: "80%" }}>
                <VerificationInput length={4} placeholder="" />
              </div>
            </Grid>
            <Grid container item xs={12} justify="center">
              <Typography className={classes.textFieldLabel}>
                Didn't get any code?{" "}
              </Typography>
              <Typography className={classes.phoneResend}>Resend </Typography>
            </Grid>
            <Grid container item xs={12} justify="center">
              <Button
                onClick={handleVerifyPhoneNumber}
                style={{ width: "80%", marginTop: "2rem" }}
                className={classes.mainBtn}
              >
                Verify
              </Button>
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
}

export default PhoneVerificationModle;
