import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import LivePicture from "./LivePicture";
import UploadDocument from "./UploadDocument";
import IdVerifiactionSuccess from "./IdVerifiactionSuccess";
import backgroundImage from "../../../img/backgroundImage.png";
import logoJPG from "../../../img/logoJPG.JPG";
import { findAllByDisplayValue } from "@testing-library/react";

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
function IdVerification(props) {
  const classesBackgrond = useStyles();
  const { classes } = props;
  // profile pic dialog state
  const [profiePicDialogState, setProfiePicDialogState] = React.useState(false);

  //Upload dcument dialog state
  const [
    uploadDocumentDialogState,
    setUploadDocumentDialogState,
  ] = React.useState(false);

  // Upload document Success
  const [
    uploadDocumentSuccessDialog,
    setDploadDocumentSuccessDialog,
  ] = React.useState(false);
  //open profie pic
  const handleProfilePicDialogOpen = () => {
    setProfiePicDialogState(true);
  };
  //open upload document
  const handleUploadDocumentDialogOpen = () => {
    setUploadDocumentDialogState(true);
  };
  const uploadFile = () => {
    setUploadDocumentDialogState(false);
    setDploadDocumentSuccessDialog(true);
  };
  return (
    <div className={classesBackgrond.landingContainer}>
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
        {profiePicDialogState && (
          <LivePicture
            classes={classes}
            profiePicDialogState={profiePicDialogState}
            setProfiePicDialogState={setProfiePicDialogState}
          />
        )}

        <UploadDocument
          classes={classes}
          uploadFile={uploadFile}
          uploadDocumentDialogState={uploadDocumentDialogState}
          setUploadDocumentDialogState={setUploadDocumentDialogState}
          handleProfilePicDialogOpen={handleProfilePicDialogOpen}
        />
        <IdVerifiactionSuccess
          classes={classes}
          uploadDocumentSuccessDialog={uploadDocumentSuccessDialog}
          setDploadDocumentSuccessDialog={setDploadDocumentSuccessDialog}
        />
        <form>
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
                Identity Verification
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.textFieldLabel}>
                Verification of document & Live picture upload page
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.textFieldLabel}>
                Enter SSN
              </Typography>
              <TextField
                fullWidth
                type="text"
                id="ssn"
                variant="outlined"
                placeholder="Enter SSN"
                className={classes.formTextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.textFieldLabel}>
                Document Upload
              </Typography>
            </Grid>
            <Grid container item xs={12} justify="space-between">
              {" "}
              <Button
                //  type="submit"
                onClick={handleUploadDocumentDialogOpen}
                style={{ width: "45%" }}
                className={classes.mainBtn}
              >
                From Gallery
              </Button>
              <Button
                //  type="submit"
                onClick={handleProfilePicDialogOpen}
                style={{ width: "45%" }}
                className={classes.mainBtn}
              >
                Live Picture
              </Button>
            </Grid>
            <Grid container item xs={12} justify="space-between">
              {" "}
              <Button
                //   type="submit"
                //  onClick={handleClickOpen}
                style={{ width: "100%", marginTop: "2rem" }}
                className={classes.mainBtn}
              >
                Done
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default IdVerification;
