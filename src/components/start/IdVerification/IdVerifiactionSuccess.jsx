import React from "react";

import { Grid, Typography, Button, Dialog, Slide } from "@material-ui/core";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function PhoneVerificationSuccess(props) {
  const {
    classes,
    uploadDocumentSuccessDialog,
    setDploadDocumentSuccessDialog,
  } = props;

  const handleUploadSuccessDialogClose = () => {
    setDploadDocumentSuccessDialog(false);
  };
  return (
    <div>
      <Dialog
        classes={{ paper: classes.rootDialog }}
        maxWidth="sm"
        open={uploadDocumentSuccessDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleUploadSuccessDialogClose}
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
              <Typography variant="h5" className={classes.dialogTitle}>
                Document Upload Successful
              </Typography>
            </Grid>
            <Grid
              style={{ marginTop: "2rem" }}
              container
              item
              xs={12}
              justify="center"
            >
              <Typography className={classes.redColorText}>
                Please note: It may take up to 3 business days to confirm the
                Uploads
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
}

export default PhoneVerificationSuccess;
