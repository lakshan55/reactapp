import React from "react";

import { Grid, Typography, Button, Dialog, Slide } from "@material-ui/core";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function PhoneVerificationSuccess(props) {
  const {
    classes,
    openVerifySuccess,
    setOpenVerifySuccess,
    handleVerifySubmit,
  } = props;

  const handleVerifySuccessDialogClose = () => {
    setOpenVerifySuccess(false);
  };
  return (
    <div>
      <Dialog
        classes={{ paper: classes.rootDialog }}
        maxWidth="sm"
        open={openVerifySuccess}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleVerifySuccessDialogClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={classes.divDialog}>
          <Grid container>
            <Grid
              container
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
              item
              xs={12}
              justify="center"
            >
              <CheckCircleOutlineRoundedIcon
                style={{ color: "#35FB10", fontSize: "13rem" }}
              />
            </Grid>
            <Grid container item xs={12} justify="center">
              <Typography variant="h3" className={classes.dialogTitle}>
                Verified
              </Typography>
            </Grid>

            <Grid container item xs={12} justify="center">
              <Button
                onClick={handleVerifySubmit}
                style={{ width: "80%", marginTop: "2rem" }}
                className={classes.mainBtn}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
}

export default PhoneVerificationSuccess;
